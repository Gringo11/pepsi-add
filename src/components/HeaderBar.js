import "../styles/header-bar.css";
import Navigation from "./Navi";
import ButtonBuy from "./ButtonBuy";
import logo from "../assets/logo-pepsi.png";

function BarElem() {
  return (
    <div className="highter-bar">
      <div className="logo-photo">
        <img className="logotype" src={logo} />
      </div>
      <div className="bar">
        <Navigation text="PRODUCTS" />
        <Navigation text="WHAT’S NEW" />
        <Navigation text="NEWS LETTER" />
        <Navigation text="ABOUT US" />
        <Navigation text="CONTACT US" />
      </div>
      <ButtonBuy title="Buy Product" />
    </div>
  );
}

export default BarElem;
