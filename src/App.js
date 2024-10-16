import React, { useState, 
  // useEffect 
} from "react";
import Header from "./components/Header/header.js";
import Nav from "./components/Nav/nav.js";
import Footer from "./components/Footer/footer.js";
import MainContent from "./Pages/MainContent/MainContent.js";

// site components

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "CV" },
    { name: "Portfolio" },
    // { name: "Outside Work" },
    // { name: "Contact" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // useEffect(() => {
  //   document.title = `Win Pomerantz${currentPage.name === 'About' ? '' : ' - ' + currentPage.name}`;
  // }, [currentPage]);

  return (
    <div>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
