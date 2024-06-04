//import logo from './logo.svg';
import "./App.css";
//testimonio componente
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="cont-main">
        <h1>Testimonios sobre de IsnotCristhianr: </h1>
      </div>
        <h3>Desliza para visualizar</h3>
      <Testimonio
        img="emma"
        altname="img emma"
        nombre="Emma"
        pais="Mexico"
        cargo="Desarrolladora"
        empresa="Google"
        testimonio="IsnotCristhianr es un excelente desarrollador, siempre cumple con los tiempos de entrega y tiene un excelente trabajo en equipo."
      />

      <Testimonio
        img="sara"
        altname="img sara"
        nombre="Sara"
        pais="Colombia"
        cargo="Desarrollador"
        empresa="Facebook"
        testimonio="IsnotCristhianr es un desarrollador muy creativo, siempre tiene ideas innovadoras y es muy comprometido con su trabajo."
      />

      <Testimonio
        img="shawn"
        altname="img shawn"
        nombre="Shawn"
        pais="Canada"
        cargo="Desarrollador"
        empresa="Amazon"
        testimonio="IsnotCristhianr es un desarrollador muy proactivo, siempre esta dispuesto a ayudar a sus compañeros y tiene un excelente manejo de las tecnologias."
      />
    </div>
  );
}

export default App;
