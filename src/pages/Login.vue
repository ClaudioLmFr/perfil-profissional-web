<template>
    <h1 class="text-center titulo">Login</h1>

    <form class="form-login">
        <input v-model="usuario.email" type="email" placeholder="E-mail">
        <input v-model="usuario.senha" type="password" placeholder="Senha">
        <button @click="logar" type="button">Entrar</button>
        <button @click="novaConta" class="mt-5">Crirar minha conta</button>
    </form>
</template>

<script>
import { mapActions } from 'pinia';
import { usePerfilStore } from '../stores/perfilStore';
import { useAlertaStore } from "../stores/alertaStore";


export default {
    data: () => ({
        usuario: {}
    }),
    methods: {
        ...mapActions(usePerfilStore, ["login"]),
        ...mapActions(useAlertaStore, ["exibirErro"]),
        async logar() {
            try {
                await this.login(this.usuario);
                this.$router.push("/home");
            } catch (error) {
                console.log(error)
                this.exibirErro(error.body.message);
            }
        },
        novaConta() {
            this.$router.push("/nova-conta")
        },
    },
};
</script>