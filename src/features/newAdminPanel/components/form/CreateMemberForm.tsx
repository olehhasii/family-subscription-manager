import Button from '../../../../ui/elements/Button';
import Form from '../../../../ui/elements/Form';
import ImgInput from '../../../../ui/elements/ImgInput';
import Input from '../../../../ui/elements/Input';
import ToggleInput from '../../../../ui/elements/ToggleInput';
import defaultAvatar from '../../../../assets/profile.png';
import ActionsContainer from '../../../../ui/elements/ActionsContainer';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';
import MonthPicker from '../../../../ui/elements/MonthPicker';
import ErrorContainer from '../../../../ui/elements/ErrorContainer';
import useMemberForm from '../../../../hooks/useMemberForm';
import { useTranslations } from '../../../../hooks/useTranslation';

interface CreateMemberFormProps {
  onGoBack: (view: AdminPanelView, id?: number) => void;
}

export default function CreateMemberForm({ onGoBack }: CreateMemberFormProps) {
  const { t } = useTranslations();
  const { handleSubmit, setIsBillable, isBillable, isError, isPending } = useMemberForm({ mode: 'create', onGoBack });

  if (isError) {
    return (
      <ErrorContainer>
        <p>{t.errorCreatingMember}</p>
        <Button onClick={() => window.location.reload()}>{t.retry}</Button>
      </ErrorContainer>
    );
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Input name="name" placeholder="Oleh" label={t.memberName} id="name" size="medium" disabled={isPending} />
      <Input
        name="email"
        placeholder="example@gmail.com"
        label={t.memberEmail}
        id="email"
        size="medium"
        disabled={isPending}
      />
      <ToggleInput
        id="isBillable"
        name="isBillable"
        label={t.isMemberBillable}
        defaultChecked={true}
        checked={isBillable}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBillable(e.target.checked)}
        disabled={isPending}
      />
      <MonthPicker
        label={t.dateUntilPaid}
        id="paidUntil"
        name="paidUntil"
        inputText={t.selectDate}
        size="medium"
        disabled={!isBillable}
        fullWidth={true}
      />
      <ImgInput
        id="avatar"
        name="avatar"
        label={t.memberAvatar}
        defaultImg={defaultAvatar}
        showUploadedFile
        size="medium"
        disabled={isPending}
      />
      <ActionsContainer align="flex-end">
        <Button type="submit" variant="primary" disabled={isPending}>
          {isPending ? t.creating : t.addMemberButton}
        </Button>
        <Button onClick={() => onGoBack(ADMIN_VIEWS.MEMBERS_LIST)} disabled={isPending}>
          {t.cancel}
        </Button>
      </ActionsContainer>
    </Form>
  );
}
