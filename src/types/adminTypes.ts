export const ADMIN_VIEWS = {
  MEMBERS_LIST: 'members-list',
  BOARD_SETTINGS: 'board-settings',
  MEMBERS_CREATE: 'members-create', // Fixed
  MEMBERS_EDIT: 'members-edit', // Fixed
} as const;

export type AdminPanelView = (typeof ADMIN_VIEWS)[keyof typeof ADMIN_VIEWS];
