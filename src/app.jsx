import { Hero } from './components/Hero.jsx';
import * as S from './components/Sections.jsx';
import { useReveal } from './components/ui.jsx';

export function App() {
  useReveal();
  return (
    <>
      <Hero />
      <main>
        <S.About />
        <S.Problem />
        <S.Justification />
        <S.Question />
        <S.Objectives />
        <S.Scope />
        <S.Timeline />
        <S.Methodology />
        <S.Stack />
        <S.Legal />
        <S.StateOfArt />
        <S.References />
        <S.Results />
        <S.Faq />
        <S.Team />
      </main>
      <S.Closing />
    </>
  );
}
