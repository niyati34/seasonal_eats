import React from 'react';
import { useParams } from 'react-router-dom';
import seasonalProduce from './seasonalData';
import './FruitVegetableInfo.css'; // Import CSS file for styling

const FruitVegetableInfo = () => {
  const { name } = useParams();
  const item = seasonalProduce.fruits.find(fruit => fruit.name === name) || seasonalProduce.vegetables.find(vegetable => vegetable.name === name);

  if (!item) {
    return <div className="item-not-found">Item not found</div>;
  }

  return (
    <div className="fruit-vegetable-info">
      <div className="header">
        <h2>{item.name}</h2>
        <p>Available months: {item.months ? item.months.join(', ') : 'N/A'}</p>
        <img className="item-image" src={`/${item.image}`} alt={item.name} />
      </div>
      <div className="details">
        <div className="nutritional-facts">
          <h3>Nutritional Facts:</h3>
          <ul>
            <li>Calories: {item.nutritionalFacts.calories}</li>
            <li>Carbohydrates: {item.nutritionalFacts.carbohydrates}g</li>
            <li>Fiber: {item.nutritionalFacts.fiber}g</li>
            <li>Protein: {item.nutritionalFacts.protein}g</li>
            <li>Vitamins: {item.nutritionalFacts.vitamins.join(', ')}</li>
          </ul>
        </div>
        <div className="recipes">
          <h3>Recipes:</h3>
          <ul>
            {item.recipes.map(recipe => (
              <li key={recipe.name}>
                <strong>{recipe.name}</strong>: {recipe.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="health-benefits">
          <h3>Health Benefits:</h3>
          <p>{item.healthBenefits}</p>
        </div>
        <div className="tips-preparation">
          <h3>Tips for Preparation:</h3>
          <p>{item.preparationTips}</p>
        </div>
        <div className="best-time-to-eat">
          <h3>Best Time to Eat:</h3>
          <p>{item.bestTimeToEat}</p>
        </div>
        <div className="buying-tips">
          <h3>Buying Tips:</h3>
          <p>{item.buyingTips}</p>
        </div>
        <div className="storage-info">
          <h3>Storage Information:</h3>
          <p>{item.storageInfo}</p>
        </div>
        <div className="fun-facts">
          <h3>Fun Facts:</h3>
          <p>{item.funFacts}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitVegetableInfo;
