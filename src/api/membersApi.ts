import supabase from '../supabase';
import type { Member } from '../types/types';

export async function createMember(newMember: Omit<Member, 'id'>, file: File) {
  let avatarUrl;

  if (file.size === 0 && file.name === '') {
    console.log('file is not uploaded');
    avatarUrl = '';
  } else {
    avatarUrl = await uploadAvatar(file);
  }

  const { data, error } = await supabase.from('Members').insert([{ ...newMember, avatarUrl }]);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function uploadAvatar(file: File) {
  const fileName = `${Date.now()}-${file.name.replaceAll(' ', '')}`;

  const { data, error } = await supabase.storage.from('Avatars').upload(fileName, file);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data.fullPath;
}

export async function getAllMembers() {
  const { data, error } = await supabase.from('Members').select('*');

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getMemberById(id: string) {
  const { data, error } = await supabase.from('Members').select().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function deleteMemberById(id: string) {
  try {
    const { data: member } = await supabase.from('Members').select().eq('id', id);
    deleteAvatar(member?.[0].avatarUrl);
  } catch (error) {
    throw new Error('Error deleting avatar');
  }

  const { error } = await supabase.from('Members').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteAvatar(fileName: string) {
  const { error } = await supabase.storage.from('Avatars').remove([fileName.split('/')[1]]);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
