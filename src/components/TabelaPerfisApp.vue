<template>
   <table border="1">
            <thead>
                <th>Nome</th>
                <th>Disponibilidade de Mudança</th>
                <th>Disponibilidade de Horário</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="item in ultimosPerfis" v-show="item._id != usuarioLogado.perfil">
                    <td>{{ item.nome }}</td>
                    <td>{{ item.disponibilidadeMudanca ? "Sim" : "Não" }}</td>
                    <td>{{ item.disponibilidadeHorario }}</td>
                    <td><button @click="realizarConexao(item._id)">Conectar</button></td>
                </tr>
            </tbody>
        </table>  
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { usePerfilStore } from '../stores/perfilStore'

export default {
    computed: {
        ...mapState(usePerfilStore, ["ultimosPerfis", "usuarioLogado"])
    },
    methods: {
        ...mapActions(usePerfilStore, ["conectarPerfil"]),
        realizarConexao(perfilDestino) {
            this.conectarPerfil(perfilDestino)
        }
    }
}
</script>