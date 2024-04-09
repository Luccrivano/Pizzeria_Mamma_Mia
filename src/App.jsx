import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import NotFound from "./Components/NotFound";

export const ContextApp = createContext();

function App() {
  const [dataPizzas, setDataPizzas] = useState([]);
  const [total, setTotal] = useState(0);

  const getPizzas = async () => {
    const data = await fetch("/src/assets/json/pizzas.json");
    const res = await data.json();
    const adaptedPizzas = [];
    res.forEach((pizza) => {
      adaptedPizzas.push({ ...pizza, count: 0 });
    });
    setDataPizzas(adaptedPizzas);
    console.log(adaptedPizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const handleAddToCart = (item) => {
    const updatedPizzas = dataPizzas.map((pizza) => {
      if (pizza.id === item.id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setDataPizzas(updatedPizzas);
    setTotal((prevTotal) => prevTotal + 1);
  };

  const contextValue = {
    dataPizzas,
    setDataPizzas,
    total,
    setTotal,
    handleAddToCart,
  };

  return (
    <ContextApp.Provider value={contextValue}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextApp.Provider>
  );
}

export default App;
