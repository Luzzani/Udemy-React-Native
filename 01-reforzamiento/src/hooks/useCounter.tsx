import { useState } from "react";
function useCounter( inicial:number = 10) {
  const [valor, setValor] = useState(inicial);

  const acumular = (num: number) => {
    setValor((valor) => valor + num);
  };

  return {
    valor,
    acumular,
  };
}

export default useCounter;
