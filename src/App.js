import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


// site components

function App() {

  const [pages] = useState([
    {
      name: "about",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    }
  ])

  const [currentPage, setCurrentPage] =useState(pages[0]);

  return <div>
    <Header>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </Header>
    <main>
      {/* <Page/> */}
    </main>
    <Footer/>
  </div>
}

export default App;