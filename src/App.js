import React, { useState } from 'react';
// import './App.css';
// import './index.css';
import './scss/custom.scss';
import Header from './components/Header';
import About from './components/About/About';
import Applications from './components/Portfolio/Applications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {


  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Applications') {
      return <Applications />;
    }
    if (currentPage === 'Contact')
      return <Contact />;
  };

  const pageChange = (page) => setCurrentPage(page);


  return (
    <div id="reactApp">
      <Header currentPage={currentPage} pageChange={pageChange} />
      <main>
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
