<template>
    <h1>Home</h1>
    <h2>Olá! {{ usuarioLogado.nome }}</h2>
    <section>
        <h3>Últimos perfis cadastrados</h3>
        <lista-perfis-app></lista-perfis-app>
    </section>
    <section>
        <h3>Últimas notificações</h3>
        <lista-notificacoes-app></lista-notificacoes-app>
    </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useNotificacaoStore } from "../stores/notificacaoStore";
import { usePerfilStore } from "../stores/perfilStore";
import ListaPerfisApp from "../components/ListaPerfisApp.vue";
import ListaNotificacoesApp from "../components/ListaNotificacoesApp.vue";
export default {
    components: {
        ListaPerfisApp, 
        ListaNotificacoesApp,
    },
    computed: {
        ...mapState(usePerfilStore, ["usuarioLogado"]),
        ...mapState(useNotificacaoStore, ["notificacoes"])
    },
    methods: {
        ...mapActions(usePerfilStore, ["listarUltimosPerfis"]),
        ...mapActions(useNotificacaoStore, ["buscarNotificacoesPerfil"])
    },
    mounted() {
        this.listarUltimosPerfis();
        this.buscarNotificacoesPerfil(this.usuarioLogado.perfil);
    },
};
</script>