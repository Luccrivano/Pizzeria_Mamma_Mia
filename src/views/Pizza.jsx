import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextApp } from "../App";

const Pizza = () => {
  const { id } = useParams();
  const pizzaId = id;
  const Mc = useContext(ContextApp);
  const pizza = Mc.dataPizzas.find((item) => item.id === pizzaId);

  const handleAddToCart = () => {
    const updatedPizzas = Mc.dataPizzas.map((pizzaItem) => {
      if (pizzaItem.id === pizzaId) {
        return { ...pizzaItem, count: pizzaItem.count + 1 };
      }
      return pizzaItem;
    });
    Mc.setTotal((prevTotal) => prevTotal + 1);
    Mc.setDataPizzas(updatedPizzas);
  };
  console.log(pizzaId);
  console.log(Mc.dataPizzas);
  if (!pizza) {
    return <div>Pizza not found</div>;
  }

  return (
    <div className="container1">
      <div className="card">
        <h1 className="card-title">Detalle de tu pizza</h1>
        <img src={pizza.img} alt={pizza.name} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{pizza.desc}</p>
          <p className="card-text">
            <small className="text-muted">
              Ingredients: {pizza.ingredients.join(", ")}
            </small>
          </p>
          <p className="card-text">Price: {pizza.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
