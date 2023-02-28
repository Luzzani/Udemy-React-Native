import {useState, useRef} from 'react';

const useCalculadora = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('100');

  enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

  const ultimaOperacion = useRef<Operadores>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    //no aceptar mas de un punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        return;
      } else {
        return setNumber(number + textNumber);
      }
    } else {
      return setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const cleanLastEntry = () => {
    if (number === '-0' || (number.length === 2 && number.startsWith('-'))) {
      setNumber('0');
    } else if (number.length > 1) {
      setNumber(number.substring(0, number.length - 1));
    } else {
      setNumber('0');
    }
  };

  const changeNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDiv = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMult = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    changeNumber();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumber(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }

    setPrevNumber('0');
  };

  return {
    cleanLastEntry,
    buildNumber,
    positiveNegative,
    number,
    clean,
    calcular,
    btnSumar,
    btnRestar,
    btnMult,
    btnDiv,
    prevNumber,
  };
};

export default useCalculadora;
