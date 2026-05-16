function Conteudo() {
  return (
    <section className="conteudo" aria-labelledby="features-heading">
      <h2 id="features-heading" className="visually-hidden">
        Destaques
      </h2>
      <div className="center">
        <article className="conteudo-single">
          <h3>Transforme ideias em código e construa o futuro</h3>
          <p>
            Aprender programação vai muito além de escrever linhas de código. É
            desenvolver criatividade, resolver problemas e criar soluções que
            impactam pessoas no mundo inteiro. Seja para criar sites modernos,
            aplicativos incríveis ou sistemas inteligentes, a programação abre
            portas para oportunidades sem limites.
          </p>
        </article>
        <article className="conteudo-single">
          <h3>Desenvolva projetos incríveis com mais velocidade</h3>
          <p>
            Crie, organize e entregue projetos com mais eficiência usando
            ferramentas modernas pensadas para desenvolvedores. Simplifique seu
            fluxo de trabalho, aumente sua produtividade e foque no que
            realmente importa: construir soluções incríveis. Código limpo.
            Desenvolvimento rápido. Resultados reais.
          </p>
          <a className="cta-link" href="#contato">
            Começar agora →
          </a>
        </article>
      </div>
    </section>
  );
}

export default Conteudo;
