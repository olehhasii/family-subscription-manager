import { useTheme } from '../../../contexts/ThemeContext';
import DarkThemeIcon from '../../../icons/DarkThemeIcon';
import LighThemeIcon from '../../../icons/LighThemeIcon';
import ActionButton from '../../../ui/ActionButton';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ActionButton
      onClick={toggleTheme}
      icon={theme === 'dark' ? <LighThemeIcon size="30px" /> : <DarkThemeIcon size="30px" />}
    />
  );
}
