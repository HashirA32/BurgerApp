import React, { useState } from 'react';
import BurgerTop from './burger-logo.b8503d26.png';
import BurgerBotom from './burger-logo.b8503d27.png';
import Bacon from './bacon.png';
import Cheese from './Cheez.png';
import Meat from './meat.png';
import Salaad from './Salaad.png';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

export default function Content() {
  const [price, setPrice] = useState(4);
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (type) => {
    const updatedIngredients = [...ingredients, type];

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = price + priceAddition;

    setIngredients(updatedIngredients);
    setPrice(newPrice);
  };

  const removeIngredientHandler = (type) => {
    const index = ingredients.lastIndexOf(type);
    if (index === -1) {
      return;
    }
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);

    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = price - priceDeduction;

    setIngredients(updatedIngredients);
    setPrice(newPrice);
  };

  const ingredientImages = ingredients.map((ingredient, index) => {
    let src;
    switch (ingredient) {
      case 'lettuce':
        src = Salaad;
        break;
      case 'bacon':
        src = Bacon;
        break;
      case 'cheese':
        src = Cheese;
        break;
      case 'meat':
        src = Meat;
        break;
      default:
        src = null;
    }
    return <img key={index} src={src} alt={ingredient} />;
  });

  return (
    <>
      <div className='Container burger'>
        <div>
          <img src={BurgerTop} alt="Burger Top" />
        </div>

        <div className='burgerInside'>
          {ingredients.length === 0 ? (
            <p>No Ingredients Added</p>
          ) : (
            ingredientImages
          )}
        </div>

        <div>
          <img src={BurgerBotom} alt="Burger Bottom" />
        </div>
      </div>

      {/* Footer Part */}
      <div className='priceBoard'>
        <div className='price'>Current Price: ${price.toFixed(2)}</div>

        <div className='Ingridiants'>
          Lettuce
          <button type="button" className="btn btn-light" onClick={() => removeIngredientHandler('lettuce')}>Less</button>
          <button type="button" className="btn btn-light" onClick={() => addIngredientHandler('lettuce')}>More</button>
        </div>
        <div className='Ingridiants'>
          Bacon
          <button type="button" className="btn btn-light" onClick={() => removeIngredientHandler('bacon')}>Less</button>
          <button type="button" className="btn btn-light" onClick={() => addIngredientHandler('bacon')}>More</button>
        </div>
        <div className='Ingridiants'>
          Cheese
          <button type="button" className="btn btn-light" onClick={() => removeIngredientHandler('cheese')}>Less</button>
          <button type="button" className="btn btn-light" onClick={() => addIngredientHandler('cheese')}>More</button>
        </div>
        <div className='Ingridiants'>
          Meat
          <button type="button" className="btn btn-light" onClick={() => removeIngredientHandler('meat')}>Less</button>
          <button type="button" className="btn btn-light" onClick={() => addIngredientHandler('meat')}>More</button>
        </div>

        <div>
          <button type="button" className="btn btn-light signup">SIGN UP TO ORDER</button>
        </div>
      </div>
    </>
  );
}
