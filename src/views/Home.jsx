import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApp } from "../App";
import pizzas from "../assets/json/pizzas.json";

const Home = () => {
  const Mc = useContext(ContextApp);

  const handleAddToCart = (item) => {
    const updatedPizzas = Mc.dataPizzas.map((pizza) => {
      if (pizza.id === item.id) {
        return { ...pizza, count: pizza.count + 1 };
      }

      return pizza;
    });
    Mc.setTotal((prevTotal) => prevTotal + 1);
    Mc.setDataPizzas(updatedPizzas);
  };

  return (
    <div className="container mt-4">
      <h1 className="mt-4 mb-4 display-1 fw-bold custom-font">
        Pizzeria Mamma Mia
      </h1>
      <div className="row">
        {pizzas.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.img} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Ingredients: {item.ingredients.join(", ")}
                  </small>
                </p>
                <p className="card-text">Price: {item.price}</p>
                <Link to={`/pizza/${item.id}`} className="btn btn-primary me-2">
                  Ver detalles
                </Link>

                <button
                  className="btn btn-success"
                  onClick={() => handleAddToCart(item)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
