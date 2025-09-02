/* import supabase from '../supabase';
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

export async function updateMemberData(newData: Omit<Member, 'id'>, id: string, newAvatar: File) {
  try {
    if (newAvatar.size !== 0 && newAvatar.name !== '') {
      const newAvatarUrl = await updateAvatar(id, newAvatar);

      const { error } = await supabase
        .from('Members')
        .update({ ...newData, avatarUrl: newAvatarUrl })
        .eq('id', id)
        .select();

      if (error) {
        throw new Error(error.message);
      }
    } else {
      const { error } = await supabase
        .from('Members')
        .update({ ...newData })
        .eq('id', id)
        .select();
      if (error) {
        throw new Error(error.message);
      }
    }
  } catch (error) {
    throw new Error('Error updating member');
  }
}

export async function updateAvatar(id: string, newFile: File) {
  const { data, error } = await supabase.from('Members').select('avatarUrl').eq('id', id).single();

  if (error) {
    console.error('Failed to fetch avatar URL:', error);
    throw new Error(error.message);
  }

  const fileName = data?.avatarUrl;

  await deleteAvatar(fileName);

  const newPath = await uploadAvatar(newFile);

  return newPath;
} */

import supabase from '../supabase';
import type { Member } from '../types/membersTypes';
import { uploadImageToSupabase } from './fileApi';

export async function getAllMembers() {
  const { data: members, error } = await supabase.from('Members').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return members;
}

export async function createMember(newMember: Omit<Member, 'id'>, avatar?: File) {
  let avatarUrl = '';

  if (avatar && avatar.size !== 0 && avatar.name !== '') {
    avatarUrl = await uploadImageToSupabase(avatar, 'Avatars');
  }

  const { data, error } = await supabase
    .from('Members')
    .insert([{ ...newMember, avatarUrl }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
