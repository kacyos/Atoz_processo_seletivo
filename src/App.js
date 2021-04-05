import logo from "./logo.svg";
import "./App.css";
import { CContainer } from "@coreui/react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CContainer className="form-div">
          <h1 className="form-pre-challenge-greeting">
            Construa aqui seu formulário! <br /> Boa sorte e, se tiver alguma
            dúvida, pode me mandar no arthur.abreu@atoz.vc
          </h1>
        </CContainer>
      </header>
    </div>
  );
}

export default App;
