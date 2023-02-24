import { useState, useEffect, useRef } from "react";
import { Usuario, ReqRespListado } from "../interfaces/reqResp";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const pagRef = useRef(0);

  useEffect(() => {
    // llamado al api
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqRespListado>("/users", {
      params: { page: pagRef.current },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      pagRef.current--;
      alert("No hay mas registros");
    }
  };

  const paguinaSiguiente = () => {
    pagRef.current++;
    cargarUsuarios();
  };
  const paguinaAnterior = () => {
    if (pagRef.current > 1) {
      pagRef.current--;
      cargarUsuarios();
    }
  };

  return {
    usuarios,
    paguinaSiguiente,
    paguinaAnterior,
  };
};
