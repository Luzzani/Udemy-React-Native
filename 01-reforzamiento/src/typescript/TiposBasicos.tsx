function TiposBasicos() {
  const nombre:string = "Fernando";
  const edad:number = 35;
  const estaActivo:boolean = true;
  
  const poderes: string[] = ['Velocidad', 'Volar']

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? <p>si</p> : <p>no</p>}
      {poderes.join(', ')}
    </>
  );
}

export default TiposBasicos;
