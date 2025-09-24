import { useLang } from '../../../contexts/LanguageContext';
import { FlagUA, FlagUK } from '../../../icons/Flags';
import ActionButton from '../../../ui/ActionButton';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return <ActionButton onClick={toggleLang} icon={lang === 'UA' ? <FlagUA /> : <FlagUK />} />;
}
