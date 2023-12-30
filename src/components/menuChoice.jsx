import { menuChoices } from "../data";
import MenuHeader from "./menuHeader";
import Linebreak from "./lineBreak";
import MenuCard from "./BasketMenuCard";

const MenuChoice = () => {
  return (
    <div className="menu-con">
      <div className="menu-header-con">
        <MenuHeader text="Our Menu" />
        <div className="menu-selection-con">
          {menuChoices.map((data) => {
            return <button>{data.name}</button>;
          })}
        </div>
      </div>
      <Linebreak />
      <div className="menu-card-con">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
};

export default MenuChoice;
