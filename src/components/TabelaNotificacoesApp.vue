<template>
    <table border="1">
        <thead>
            <th>Tipo</th>
            <th>Título</th>
            <th>Lida</th>
            <th>Ações</th>
        </thead>
        <tbody>
            <tr v-for="item in notificacoes">
                <td>{{ item.tipo }}</td>
                <td>{{ item.titulo }}</td>
                <td>{{ item.lida ? "Sim" : "Não" }}</td>
                <td>
                    <router-link :to="`/notificacao/${item._id }`">Detalhes</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'pinia'
import { useNotificacaoStore } from '../stores/notificacaoStore';

export default {
    computed: {
        ...mapState(useNotificacaoStore, ["notificacoes"])
    }
}
</script>