import { defineStore } from "pinia";
import { login } from "../api/login";
import { cadastrar, listarUltimosPerfis, buscarPerfil, atualizarPerfil } from "../api/perfil";

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        usuarioLogado: {},
        ultimosPerfis: [],
    }),
    actions: {
        async login(usuario) {
            this.usuarioLogado = await login(usuario);
        },
        async cadastrar(perfil) {
            await cadastrar(perfil);
        },
        async listarUltimosPerfis() {
            this.ultimosPerfis = await listarUltimosPerfis()
        },
        async buscarPerfilLogado() {
            return await buscarPerfil(this.usuarioLogado.perfil)
        },
        async atualizarPerfil(perfil) {
            return await atualizarPerfil(perfil)
        },
    }
})