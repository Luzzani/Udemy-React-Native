interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

function ObjetosLiterales() {
  const persona: Persona = {
    nombreCompleto: "Lucas",
    edad: 35,
    direccion: {
      pais: "Canada",
      casaNo: 615,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
}

export default ObjetosLiterales;