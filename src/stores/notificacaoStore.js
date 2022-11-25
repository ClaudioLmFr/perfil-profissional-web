import { defineStore } from "pinia";
import { buscarNotificacoesPerfil } from "../api/notificacao";

export const useNotificacaoStore = defineStore("notificacao", {
    state: () => ({
        notificacoes: [],
    }),
    actions: {
        async buscarNotificacoesPerfil(perfilId) {
            this.notificacoes = await buscarNotificacoesPerfil(perfilId)
        }
    }
})