import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const acumular = (num: number) => {
    setValor((valor) => valor + num);
  };

  return (
    <>
      <h3>
        Contador <small>{valor}</small>
      </h3>

      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
