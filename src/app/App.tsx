import { Portfolio } from './components/Portfolio';
import type { Lang } from './components/portfolioData';

export default function App() {
  const envLang = import.meta.env.VITE_PORTFOLIO_LANG;
  const forcedLang: Lang | undefined = envLang === 'ru' || envLang === 'en' ? envLang : undefined;
  const hideLangSwitcher = import.meta.env.VITE_PORTFOLIO_SINGLE_LANG === 'true';

  return <Portfolio forcedLang={forcedLang} hideLangSwitcher={hideLangSwitcher} />;
}
