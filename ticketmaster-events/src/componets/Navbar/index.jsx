import { useState } from "react";

const Navbar = ({ onSearch} ) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
          if (evt.key === 'Enter') {
                    onSearch(search)
          }
  }

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="Busca tu evento"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
      ></input>
    </div>
  );
};

export default Navbar;
