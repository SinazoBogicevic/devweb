import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
  const [click, isClicked] = useState(true);

  return (
    <NavbarContext.Provider value={[click, isClicked]}>
      {props.children}
    </NavbarContext.Provider>
  );
};
