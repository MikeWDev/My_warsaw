import MenuHeader from "./menuHeader";
import Linebreak from "./lineBreak";
import NewMenuCard from "../our_menu_page/newMenuCards";
import MenuChoiceSm from "./menuChoiceSm";

import SelectionButtons from "./selectionButtons";
import { useEffect, useState } from "react";
const MenuChoice = ({ meals }) => {
  const [mealsData, setMealsData] = useState([]);
  const [category, setCategory] = useState("zapiekanka");
  useEffect(() => {
    const filtredMeals = meals.filter((meal) => {
      return meal.category === category;
    });
    setMealsData(filtredMeals);
  }, [category]);
  console.log(category);
  return (
    <div className="menu-con">
      <div className="menu-header-con">
        <MenuHeader text="Our Menu" />
        <SelectionButtons setCategory={setCategory} />
        <MenuChoiceSm />
      </div>
      <Linebreak />
      <div className="menu-card-con">
        {mealsData &&
          mealsData.map((meal) => <NewMenuCard key={meal._id} data={meal} />)}
      </div>
    </div>
  );
};

export default MenuChoice;
