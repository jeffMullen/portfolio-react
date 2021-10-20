import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Applications from './components/Applications/Applications';
import Footer from './components/Footer';

function App() {


  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Applications') {
      return <Applications />;
    }
    // if (currentPage === 'Contact')
    // return <Contact />;
  };

  const pageChange = (page) => setCurrentPage(page);


  return (
    <div id="reactApp">
      <Header currentPage={currentPage} pageChange={pageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
