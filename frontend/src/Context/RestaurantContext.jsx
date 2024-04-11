import { createContext, useState } from "react";

export const RestaurantContext = createContext(null);

const RestaurantContextProvider = (props) => {
  //Loaders

  const contextValue = {};

  return (
    <RestaurantContext.Provider value={contextValue}>
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
