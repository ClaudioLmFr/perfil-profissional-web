<template>
    <div class="alerta-app" :class="[{ erro: erro }, { info: info }, { sucesso: sucesso}]" v-show="exibir">
        <P>{{ mensagem }}</P>
        <button @click="fechar">Fechar</button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useAlertaStore } from '../stores/alertaStore'

export default {
    computed: {
        ...mapState(useAlertaStore, ["exibir", "mensagem", "erro", "info", "sucesso"])
    },
    methods: {
        ...mapActions(useAlertaStore, ["fechar"])
    }
}
</script>