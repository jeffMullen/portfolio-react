import './App.css';
import About from './components/About';
import Applications from './components/Applications';

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

    console.log(title)
    console.log(deployed)
    console.log(github)
    console.log(tech)
    console.log(description)
  }

  return (
    <main>
      <About />
      <Applications modalHandler={modalHandler} />
    </main>
  );
}

export default App;
