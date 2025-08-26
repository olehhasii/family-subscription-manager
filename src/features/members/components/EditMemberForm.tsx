import MemberFormBase from './MemberFormBase';

export default function EditMemberForm({ onCancelMemberAction }: { onCancelMemberAction: () => void }) {
  return <MemberFormBase formLabel="Update Member" submitLabel="Save Changes" onCancel={onCancelMemberAction} />;
}
