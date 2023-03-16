import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error(`Theme Context unavailable`);
  return context;
};

export default useTheme;
