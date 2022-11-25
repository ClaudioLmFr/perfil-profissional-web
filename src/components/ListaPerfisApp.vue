<template>
   <table border="1">
            <thead>
                <th>Nome</th>
                <th>Disponibilidade de Mudança</th>
                <th>Disponibilidade de Horário</th>
            </thead>
            <tbody>
                <tr v-for="item in ultimosPerfis">
                    <td>{{ item.nome }}</td>
                    <td>{{ item.disponibilidadeMudanca ? "Sim" : "Não" }}</td>
                    <td>{{ item.disponibilidadeHorario }}</td>
                </tr>
            </tbody>
        </table>  
</template>
<script>
import { mapState } from 'pinia'
import { usePerfilStore } from '../stores/perfilStore'

export default {
    computed: {
        ...mapState(usePerfilStore, ["ultimosPerfis"])
    }
}
</script>