import { ViewHeader } from '../../../../ui/adminViews/AdminViews.styles';
import GroupSettingsForm from './GroupSettingsForm';

export default function GroupSettingsView() {
  return (
    <div>
      <ViewHeader>
        <h2>⚙️Group Settings⚙️</h2>
      </ViewHeader>
      <GroupSettingsForm />
    </div>
  );
}
