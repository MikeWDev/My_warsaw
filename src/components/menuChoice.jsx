import { menuChoices } from "../data";
import MenuHeader from "./menuHeader";
import Linebreak from "./lineBreak";
import NewMenuCard from "./newMenuCards";
import MenuChoiceSm from "./menuChoiceSm";
const MenuChoice = () => {
  return (
    <div className="menu-con">
      <div className="menu-header-con">
        <MenuHeader text="Our Menu" />
        <div className="menu-selection-con">
          {menuChoices.map((data) => {
            return <button key={data.key}>{data.name}</button>;
          })}
        </div>
        <MenuChoiceSm />
      </div>
      <Linebreak />
      <div className="menu-card-con">
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
        <NewMenuCard />
      </div>
    </div>
  );
};

export default MenuChoice;
