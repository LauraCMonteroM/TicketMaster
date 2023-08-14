import { useEffect, useState, forwardRef, useImperativeHandle} from "react";

const Navbar = forwardRef(({ onSearch}, ref ) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log('1010 effect');
  }, [search,onSearch])

  useImperativeHandle(ref, () =>({
    search
  }));


  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
          if (evt.key === 'Enter') {
                    onSearch(search)
          }
  }

  return (
    <div ref={ref} style={{
      marginBottom:14,
      width: '100%', 
      display: 'flex',
    }}>
      <div style={{
        flex: 1,
        display: 'flex',        
      }}> 
        <p style={{
          fontSize: 24, 
          fontWeight: 'bold'
        }}>Mi boletera</p>
        </div>
     <div style={{
        flex: 1,
        display: 'flex',     
        alignItems: 'center',
        justifyContent: "flex-end", 
      }}>
      <input
        placeholder="Busca tu evento"
        onChange={handleInputChange}
        value={search}
        onKeyDown={handleInputKeyDown}
        style={{
          fontSize: 16,
        padding: '6px 12px',
        borderRadius: 4,
        border: 'none',
        width: 500, 
      }}
        
      ></input>
      </div>
      
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
