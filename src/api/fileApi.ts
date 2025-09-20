import supabase from '../supabase';

export async function uploadImageToSupabase(file: File, bucketName: string) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error('Unauthorized');
  }

  const fileName = `${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage.from(bucketName).upload(fileName, file);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);

  const publicUrl = publicUrlData.publicUrl;

  return publicUrl;
}
