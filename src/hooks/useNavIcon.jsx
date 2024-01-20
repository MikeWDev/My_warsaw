import useScreenSize from "../hooks/useScreenSize";
import { Basket, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const UseNavIcon = () => {
  //Hooks
  const screenSize = useScreenSize();
  const [navIcon, setNavIcon] = useState("");
  //Icons
  const listIcon = (
    <List onClick={handleClickOpen} size={32} color="#fff" weight="bold" />
  );
  const basketIcon = <Basket size={32} color="#fff" />;
  const xIcon = (
    <X onClick={handleClickClose} size={32} color="#fff" weight="bold" />
  );

  useEffect(() => {
    if (screenSize.width < 650) {
      setNavIcon(listIcon);
    } else {
      if (screenSize.width > 650) {
        setNavIcon(basketIcon);
      }
    }
  }, [screenSize.width]);

  function handleClickOpen() {
    setNavIcon(xIcon);
  }
  function handleClickClose() {
    setNavIcon(listIcon);
  }

  return {
    navIcon,
  };
};

export default UseNavIcon;
