import './App.css';
import Days from './components/Days'

function App() {
  return (
    <>
    <header className='header'>
      <h1># Days</h1>
      <div className='menu'>
        Login
      </div>
    </header>
    <div>
      <Days inpDays = {50}/>
    </div>
    </>
  );
}

export default App;
