import MenuHeader from "./menuHeader";
import Linebreak from "./lineBreak";
import NewMenuCard from "../our_menu_page/newMenuCards";
import MenuChoiceSm from "./menuChoiceSm";
import { useEffect, useState } from "react";
import pic from "../../assets/img/home-page-bg.png";
import UseSelect from "../../hooks/useSelect";
const MenuChoice = () => {
  //Fetching data

  const [meals, setMeals] = useState(null);
  const [selections, setSelections] = useState(null);
  const [collectionName, setCollectionName] = useState("zapiekankas");
  console.log(collectionName);
  useEffect(() => {
    const fetchMeals = async () => {
      const selectionResponse = await fetch(
        "http://localhost:4000/our-menu/selection-menu"
      );

      const mealsResponse = await fetch(
        "http://localhost:4000/our-menu/" + collectionName
      );
      const mealJson = await mealsResponse.json();
      const selectionJson = await selectionResponse.json();
      if (mealsResponse.ok) {
        setMeals(mealJson);
      }
      if (selectionResponse.ok) {
        setSelections(selectionJson);
      }
    };
    fetchMeals();
  }, [collectionName]);

  return (
    <div className="menu-con">
      <div className="menu-header-con">
        <MenuHeader text="Our Menu" />
        <div className="menu-selection-con">
          {selections &&
            selections.map((selection) => {
              return (
                <button
                  onClick={() => {
                    setCollectionName(`${selection.name}`);
                  }}
                  key={selection._id}
                >
                  {selection.category}
                </button>
              );
            })}
        </div>
        <MenuChoiceSm />
      </div>
      <Linebreak />
      <div className="menu-card-con">
        {meals &&
          meals.map((meal) => <NewMenuCard key={meal._id} data={meal} />)}
      </div>
    </div>
  );
};

export default MenuChoice;
