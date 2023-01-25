import "../styles/main-info.css";

const NutritionFact = (props) => {
  return (
    <div className="main-text-info-about-pepsi">
      <p className="text">{props.title}</p>
      <p className="numbers">{props.amount}</p>
    </div>
  );
};

export default NutritionFact;
