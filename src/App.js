import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Applications from './components/Applications';
import Footer from './components/Footer';

function App() {

  function modalHandler(title, deployed, github, tech, description) {
    let modalTitle = document.querySelector('.modal-title')
    let liveApp = document.querySelector('#liveApp');
    let gitHubRepo = document.querySelector('#gitHubRepo');
    let techUsed = document.querySelector('#techUsed')
    let projectDescription = document.querySelector('#projectDescription')

    liveApp.setAttribute('href', deployed);
    gitHubRepo.setAttribute('href', github);
    modalTitle.innerHTML = title;
    techUsed.innerHTML = tech;
    projectDescription.innerHTML = description;
  }

  return (
    <div id="reactApp">
      <Header />
      <main>
        <About />
        <Skills />
        <Applications modalHandler={modalHandler} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
