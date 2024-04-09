import React, { useContext } from "react";
import { ContextApp } from "../App";

const Carrito = () => {
  const Mc = useContext(ContextApp);

  const handleIncrement = (id) => {
    const updatedPizzas = Mc.dataPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    Mc.setTotal((prevTotal) => prevTotal + 1);
    Mc.setDataPizzas(updatedPizzas);
  };

  const handleDecrement = (id) => {
    const updatedPizzas = Mc.dataPizzas.map((pizza) => {
      if (pizza.id === id && pizza.count > 0) {
        return { ...pizza, count: pizza.count - 1 };
      }
      return pizza;
    });
    Mc.setTotal((prevTotal) => prevTotal - 1);
    Mc.setDataPizzas(updatedPizzas);
  };

  return (
    <div className="container mt-4">
      <h1 className="title_carrito">Carrito de Compras</h1>
      {Mc.dataPizzas.map((pizza) => (
        <div key={pizza.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <p>Cantidad: {pizza.count}</p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleIncrement(pizza.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDecrement(pizza.id)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
