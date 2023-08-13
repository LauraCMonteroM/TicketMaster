import Navbar from "./componets/Navbar";
import Events from "./componets/Events";
import "./App.css";
import { useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState ('')

  const handleNavbarSearch = (value) => {
    setSearchValue(value)

  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue}/>
    </>
  );
}

export default App;
