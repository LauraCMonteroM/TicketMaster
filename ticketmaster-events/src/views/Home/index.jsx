import { useState, useRef } from "react";
import Navbar from "../../componets/Navbar";
import Events from "../../componets/Events";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const containerRef = useRef();

  const handleNavbarSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchValue={searchValue} />
    </>
  );
};

export default Home;
