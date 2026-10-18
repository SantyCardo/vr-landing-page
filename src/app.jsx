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
        <S.Prototype />
        <S.Modules />
        <S.Results />
        <S.Methodology />
        <S.Timeline />
        <S.Stack />
        <S.Justification />
        <S.Question />
        <S.Objectives />
        <S.Legal />
        <S.StateOfArt />
        <S.References />
        <S.Faq />
        <S.Team />
      </main>
      <S.Closing />
    </>
  );
}
