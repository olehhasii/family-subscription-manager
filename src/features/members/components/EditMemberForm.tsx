import { useMember } from '../../../hooks/useMember';
import MemberFormBase from './MemberFormBase';

export default function EditMemberForm({
  onCancelMemberAction,
  activeMemberId,
}: {
  onCancelMemberAction: () => void;
  activeMemberId: string;
}) {
  const { member } = useMember(activeMemberId);

  return (
    <MemberFormBase
      formLabel="Update Member"
      submitLabel="Save Changes"
      onCancel={onCancelMemberAction}
      onSubmit={() => {}}
      secondaryActionLabel="Delete"
      defaultValues={member}
    />
  );
}
