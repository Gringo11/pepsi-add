import "../styles/main-info.css";
import NutritionFact from "./NutritionalFact";
import img from "../assets/pngwing.png";
import ButtonBuy from "./ButtonBuy";

function MainInfo() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="name-of-juice">Pepsi Classic</h1>
        <div className="composition">
          <p>
            Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar,
            Phosphoric Acid, Caffeine, Citric Acid, Natural Flavour
          </p>
        </div>
        <div className="main-text-info">
          <div className="main-text-info-title">NUTRITIONAL FACTS</div>
          <div className="main-text-info-about-pepsi-block">
            <NutritionFact title="Sugar syrup" amount="150 cL" />
            <NutritionFact title="Caffeine" amount="10 g" />
            <NutritionFact title="Citric Acid" amount="0.8 cL" />
            <NutritionFact title="Natural Flavour" amount="200 g" />
            <NutritionFact title="Fructose" amount="200 g" />
          </div>
        </div>
        <div className="footer">
          <div className="text-add">
            Rich in energy, our drinks will revitalize your body and get you
            ready for the day’s activities
          </div>
          <ButtonBuy title="Buy Now" />
        </div>
      </div>
      <div className="pepsi-juice-photo">
        <img className="pepsi-photo" src={img} />
      </div>
    </div>
  );
}

export default MainInfo;
