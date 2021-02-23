import React from "react";
import Rate from "../Rate";
import "./Header.css";
import {NavLink} from "react-router-dom"; 

const Header = ({ setSearch, searchRate, setSearchRate }) => {
  return (
    <div className="search-container">
      
         <nav>
         <NavLink to ='/' exact style={{color: "#f326d1",fontSize:40, marginRight :30}} >Home
          </NavLink>
      </nav> 

      <input
        type="text"
        placeholder="Type movie name to search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Rate rating={searchRate} setSearchRate={setSearchRate} />
    </div>
  );
};

export default Header;