import MenuHeader from "./menuHeader";
import Linebreak from "./lineBreak";
import NewMenuCard from "../our_menu_page/newMenuCards";
import MenuChoiceSm from "./menuChoiceSm";
import { useEffect, useState } from "react";
import pic from "../../assets/img/home-page-bg.png";
const MenuChoice = () => {
  //Fetching data

  const [meals, setMeals] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "http://localhost:4000/our-menu/zapiekankas"
      );
      const json = await response.json();

      if (response.ok) {
        setMeals(json);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="menu-con">
      <div className="menu-header-con">
        <MenuHeader text="Our Menu" />
        <div className="menu-selection-con">
          {/* {menuChoices.map((data) => {
            return <button key={data.key}>{data.name}</button>;
          })} */}
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
