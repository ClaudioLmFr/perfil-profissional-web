import { mande } from "mande";
import { usePerfilStore } from "../stores/perfilStore";

const perfil = mande("http://localhost:3000/perfil", {})

function setToken() {
  const store = usePerfilStore();
  perfil.options.headers.token = store.usuarioLogado.token;
}

export function cadastrar(novoPerfil) {
  return perfil.post(novoPerfil);
}

export function listarUltimosPerfis() {
  return perfil.get();
}

export function buscarPerfil(id) {
  return perfil.get(id);
}

export function atualizarPerfil(perfilAtualizado) {
  setToken();
  console.log(perfil)
  return perfil.put(perfilAtualizado._id, perfilAtualizado);
}

export function conectarPerfil(perfilOrigem, perfilDestino) {
  setToken()
  return perfil.post("/conexao",{remetente: perfilOrigem, destinatario: perfilDestino});
}