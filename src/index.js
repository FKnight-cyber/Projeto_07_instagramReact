import ReactDOM from 'react-dom';
import Stories from './Stories'
import Posts from './Posts';
import Sugestoes from './Sugestoes';
import User from './User';

function App(){
    return(
        <div>
        <div class="navbar">
          <div class="container">
            <div class="logo">
              <ion-icon name="logo-instagram"></ion-icon>
              <div class="separador"></div>
              <img src="assets/img/logo.png" />
            </div>
  
            <div class="logo-mobile">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
  
            <div class="instagram-mobile">
              <img src="assets/img/logo.png" />
            </div>
    
            <div class="pesquisa">
              <input type="text" placeholder="Pesquisar" />
            </div>
    
            <div class="icones">
              <ion-icon name="paper-plane-outline"></ion-icon>
              <ion-icon name="compass-outline"></ion-icon>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </div>
  
            <div class="icones-mobile">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
          </div>
        </div>
  
        <div class="corpo">
          <div class="esquerda">
            <div class="stories">
              <Stories />
  
              <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
              </div>
            </div>
  
            <div class="posts">
                <Posts />
  
            </div>
          </div>
  
          <div class="sidebar">
            <User />
  
            <div class="sugestoes">
              <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
              </div>
            <Sugestoes />
              
            </div>
  
            <div class="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
  
            <div class="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
            </div>
          </div>
        </div>
  
        <div class="fundo-mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    );
    
}

ReactDOM.render(<App />,document.querySelector(".root"));
