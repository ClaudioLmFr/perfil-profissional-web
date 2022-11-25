<template>
    <h1 class="text-center titulo">Nova Conta</h1>

    <form class="form-login">
        <label for="nome">Nome</label>
        <input id="nome" v-model="perfil.nome" type="text" placeholder="Digite seu nome">

        <label for="dataNascimento">Data de Nacimento</label>
        <input id="dataNascimento" v-model="perfil.dataNascimento" type="date" placeholder="Data de nascimento">

        <div class="flex full-width mb-5">
            <input id="disponibilidadeMudanca" v-model="perfil.disponibilidadeMudanca" class="mr-3" type="checkbox">
            <label for="disponibilidadeMudanca">Disponibilidade de Mudança</label>
        </div>

        <label for="disponibilidadeHorario"> Disponibilidade de Horário</label>
        <select v-model="perfil.disponibilidadeHorario" id="disponibilidadeHorario">
            <option value="Meio Período">Meio Período</option>
            <option value="Integral">Integral</option>
        </select>

        <label for="email">E-mail</label>
        <input id="email" v-model="perfil.usuario.email" type="email" placeholder="E-mail">

        <label for="senha">Senha</label>
        <input id="senha" v-model="perfil.usuario.senha" type="password" placeholder="Senha">

        <button @click="cadastrarPerfil" type="button">Criar</button>
        <button @click="voltar" type="button" class="mt-5">Voltar</button>
    </form>
</template>
<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore'
import { useAlertaStore } from '../stores/alertaStore';

export default {
    data: () => ({
        perfil: { usuario: {} },
    }),
    methods: {
        ...mapActions(usePerfilStore, ["cadastrar"]),
        ...mapActions(useAlertaStore, ["exibirErro", "exibirSucesso"]),
        cadastrarPerfil() {     
            try {
                this.cadastrar(this.perfil)
                this.exibirSucesso("Perfil cadastrado com sucesso!")
                this.$router.push({ name: "Login" })
            } catch (error) {
                console.log(error)
                this.exibirErro(error.body.message)
            }
        },
        voltar() {
            this.$router.push({ name: "Login"}) 
        },
    }
}
</script>