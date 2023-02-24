import { Usuario } from "../interfaces/reqResp";
import { useUsuarios } from "../hooks/useUsuarios";

const Usuarios = () => {
  const { usuarios, paguinaAnterior, paguinaSiguiente } = useUsuarios();

  const renderItem = ({
    avatar,
    email,
    first_name,
    id,
    last_name,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            style={{
              width: 35,
              borderRadius: 100,
            }}
            src={avatar}
            alt="avatar"
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>

      <button className="btn btn-primary" onClick={paguinaAnterior}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={paguinaSiguiente}>
        Siguiente
      </button>
    </>
  );
};

export default Usuarios;
