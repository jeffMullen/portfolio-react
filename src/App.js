import './reset.css';
import './App.css';
import About from './components/About';
import Applications from './components/Applications';

function App() {

  function modalHandler(imageLink) {
    const modalBody = document.querySelector('.modal-body')
    const modalTitle = document.querySelector('.modal-title')
    modalTitle.innerHTML = 'Hello';
    modalBody.innerHTML = 'COOOL';
    console.log(this);
  }

  return (
    <main>
      <About />
      <Applications modalHandler={modalHandler} />
    </main>
  );
}

export default App;
