import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  // return <nav><a href="#Home">Home</a></nav>;

  const navElements = links.map((link) => {
    // console.log(link)
    return <a href={link}>{link}</a> 
  });
    return   <nav> {navElements} </nav>
    
        
    
  

}

export default NavBar;
