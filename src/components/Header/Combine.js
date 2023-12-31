import React, { useState } from "react";
import NavBar from "./Navbar";
import Sidebar from "./sidebar";

const Combine = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </>
  );
};

export default Combine;
