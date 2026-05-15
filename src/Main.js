

function Main(){
    return(
        <div className="main">        
        <div className="center">
            <div className="menu">
            <div className="logo">
              <h3>Landing page</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
        </div>

          <div className='form'>
            <h2>Entre em contato!</h2>
            <form>              
              <div className='items-form'>
                <input placeholder="Seu nome..." type='text' />
                <input placeholder="Seu telefone..." type='text' />
                <input placeholder="Seu email..." type='text' />
                <input placeholder="Sua mensagem" type='text' />
                <input type='submit' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Main;