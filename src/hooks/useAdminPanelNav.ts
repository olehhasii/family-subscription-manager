import { useState } from 'react';
import { ADMIN_VIEWS, type AdminPanelView } from '../types/adminTypes';

export default function useAdminPanelNav() {
  const [activeView, setActiveView] = useState<AdminPanelView>(ADMIN_VIEWS.MEMBERS_LIST);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const navigateTo = (view: AdminPanelView, memberId?: number) => {
    setActiveView(view);
    setSelectedMemberId(memberId || null);
  };

  return { activeView, selectedMemberId, navigateTo };
}
