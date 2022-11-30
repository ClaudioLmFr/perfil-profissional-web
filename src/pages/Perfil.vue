<template>
    <h1>Meu Perfil</h1>

    <h2>Informações Pessois</h2>
    {{ perfil }}
    <section>
        <form>
            <div>
                <label for="nome">Nome:</label>
                <input v-model="perfil.nome" type="text">
            </div>
            <div>
                <label for="email">Email:</label>
                <input v-model="perfil.usuario.email" type="email" disabled>
            </div>
            <div>
                <label for="dataNascimento">Data de Nascimento:</label>
                <input v-model="perfil.dataNascimento" type="date">
            </div>
            <div>
                <label for="disponibilidadeMudanca">Disponibilidade de Mudança</label>
                <input v-model="perfil.disponibilidadeMudanca" type="checkbox">
            </div>
            <div>
                <label for="disponibilidadeHorario">Disponibilidade de Horário</label>
                <select v-model="perfil.disponibilidadeHorario" id="disponibilidadeHorario">
                    <option value="Meio Período">Meio Período</option>
                    <option value="Integral">Integral</option>
                </select>
            </div>
            <fieldset>
                <legend>Escolaridade</legend>
                <form-escolaridade-app :perfil="perfil "></form-escolaridade-app>
                <section>
                <tabela-escolaridade-app :educacao="perfil.educacao"></tabela-escolaridade-app>
                </section>
            </fieldset>
            <fieldset>
                <legend>Certificações</legend>
                <form-certificacao-app :perfil="perfil "></form-certificacao-app>
                <section>
                <tabela-certificacao-app :certificacoes="perfil.certificacoes"></tabela-certificacao-app>
                </section>
            </fieldset>
            </form>
    </section>

    <div>
        <button @click="atualizar">Salvar Alterações</button>
    </div>
</template>
<script>
import { mapState, mapActions } from "pinia"
import { usePerfilStore } from "../stores/perfilStore"
import FormEscolaridadeApp from "../components/FormEscolaridadeApp.vue"
import TabelaEscolaridadeApp from "../components/TabelaEscolaridadeApp.vue"
import FormCertificacaoApp from "../components/FormCertificacaoApp.vue"
import TabelaCertificacaoApp from "../components/TabelaCertificacaoApp.vue"

export default {
    components: {
        FormEscolaridadeApp,
        TabelaEscolaridadeApp,
        FormCertificacaoApp,
        TabelaCertificacaoApp,
    },
    data: () => ({
        perfil: { usuario: {} },
    }),
    computed: {
        ...mapState(usePerfilStore, ["usuarioLogado"])
    },
    methods: {
        ...mapActions(usePerfilStore, ["buscarPerfilLogado", "atualizarPerfil"]),
        atualizar() {
            this.atualizarPerfil(this.perfil)
        },
    },
    async mounted() {
        this.perfil = await this.buscarPerfilLogado();
    },
}
</script>