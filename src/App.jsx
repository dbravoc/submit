import './App.css';
import Registro from './components/Registro';
import 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crea tu cuenta</h1>
      </header>
      <main>
        <Registro />
      </main>
    </div>
  );
}

export default App;
