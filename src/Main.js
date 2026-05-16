function Main() {
  return (
    <header className="hero">
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="center hero__inner">
        <nav className="menu" aria-label="Principal">
          <div className="logo">
            <span className="logo__mark" aria-hidden="true" />
            <h3>Landing page</h3>
          </div>
          <div className="item-menu">
            <a className="btn-nav" href="https://marciodutra.rf.gd/">
              Login
            </a>
          </div>
        </nav>

        <section className="form-card" aria-labelledby="contact-heading">
          <p className="form-card__eyebrow">Fale conosco</p>
          <h2 id="contact-heading">Entre em contato!</h2>
          <p className="form-card__lead">
            Preencha o formulário e retornaremos o mais rápido possível.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="items-form">
              <label className="field">
                <span className="field__label">Nome</span>
                <input placeholder="Seu nome" type="text" name="name" autoComplete="name" />
              </label>
              <label className="field">
                <span className="field__label">Telefone</span>
                <input placeholder="Seu telefone" type="tel" name="phone" autoComplete="tel" />
              </label>
              <label className="field field--full">
                <span className="field__label">E-mail</span>
                <input placeholder="seu@email.com" type="email" name="email" autoComplete="email" />
              </label>
              <label className="field field--full">
                <span className="field__label">Mensagem</span>
                <textarea placeholder="Como podemos ajudar?" name="message" rows={4} />
              </label>
              <button className="btn-submit" type="submit">
                Enviar mensagem
              </button>
            </div>
          </form>
        </section>
      </div>
    </header>
  );
}

export default Main;
