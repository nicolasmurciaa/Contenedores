import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Prueba de React para entender varias parametros como los componentes y sus diferencias</h1>
      <Testimonio 
        nombre='Test1'
        pais='Test1'
        imagen='Test1'
        
        cargo='Test1'
        empresa='Test1'
        testimonio='"Im in London, I like to go and shop at the mall Shop at the Prada, shop at the store Shop in the tropics, stop at Dior (ah, ah) Louis Vuitton cover my toes Throw on my trousers, look at my bricks These are my tennis, look at my shoes (look at my shoes) Chrome Heart socks in sandals"'
        />
          <Testimonio 
          nombre='Test2'
          pais='Test2'
          imagen='Test2'
         
          cargo='Test2'
          empresa='Test2'
          testimonio='"Im in London, I like to go and shop at the mall Shop at the Prada, shop at the store Shop in the tropics, stop at Dior (ah, ah) Louis Vuitton cover my toes Throw on my trousers, look at my bricks These are my tennis, look at my shoes (look at my shoes) Chrome Heart socks in sandals"'
          />
      </div>
    </div>
  );
}

export default App;


