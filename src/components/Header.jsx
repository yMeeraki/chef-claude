import { ChefHat, Moon, Sun } from "lucide-react";

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <ChefHat className="header-img" />
          <p>Chef Claude</p>
          <button onClick={props.handleModeBtn}>
            {props.mode ? <Moon /> : <Sun />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
