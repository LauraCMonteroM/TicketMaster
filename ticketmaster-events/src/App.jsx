import Navbar from "./componets/Navbar";
import Events from "./componets/Events";
import "./App.css";
import { useState , useRef} from "react";

function App() {

  const [searchValue, setSearchValue] = useState ('')

const containerRef = useRef();


  const handleNavbarSearch = (value) => {
    setSearchValue(value)

  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchValue={searchValue}/>
    </>
  );
}

export default App;
