import { Hero } from './components/Hero.jsx';
import * as S from './components/Sections.jsx';
import { useReveal } from './components/ui.jsx';

export function App() {
  useReveal();
  return (
    <>
      <Hero />
      <main>
        <S.Problem />
        <S.Justification />
        <S.Question />
        <S.Objectives />
        <S.Methodology />
        <S.Architecture />
        <S.Prototype />
        <S.Modules />
        <S.Stack />
        <S.Results />
        <S.Team />
        <S.Faq />
      </main>
      <S.SiteEnd />
      <S.UnabBadge />
    </>
  );
}
