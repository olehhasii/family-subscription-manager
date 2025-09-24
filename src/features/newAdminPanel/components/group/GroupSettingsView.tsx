import { useTranslations } from '../../../../hooks/useTranslation';
import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import GroupSettingsForm from './GroupSettingsForm';

export default function GroupSettingsView() {
  const { t } = useTranslations();

  return (
    <div>
      <ViewHeader>
        <h2>{t.groupSettings}</h2>
      </ViewHeader>
      <GroupSettingsForm />
    </div>
  );
}
