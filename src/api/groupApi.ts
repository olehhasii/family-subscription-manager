import supabase from '../supabase';
import type { GroupType } from '../types/adminTypes';

export async function getGroupSettings() {
  const { data: group, error } = await supabase.from('Group').select('*').single();

  if (error) {
    throw new Error(error.message);
  }

  return group;
}

export async function updateGroupSettings(updatedData: GroupType, id: number) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error('Unauthorized');
  }

  const { data, error } = await supabase
    .from('Group')
    .update({ ...updatedData })
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
