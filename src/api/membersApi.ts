import supabase from '../supabase';
import type { Member } from '../types/types';

export async function createMember(newMember: Omit<Member, 'id'>, file: File) {
  let avatarUrl;

  if (file.size === 0 && file.name === '') {
    console.log('file is not uploaded');
    avatarUrl = '';
  } else {
    avatarUrl = await uploadAvatar(newMember.email, file);
  }

  const { data, error } = await supabase.from('Members').insert([{ ...newMember, avatarUrl }]);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function uploadAvatar(memberEmail: string, file: File) {
  const fileName = `${memberEmail}-${file.name.replaceAll(' ', '')}`;

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
