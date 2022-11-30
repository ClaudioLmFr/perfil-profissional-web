<template>
    <table border="1">
        <thead>
            <th>Instituição</th>
            <th>Título</th>
            <th>Carga Horária</th>
        </thead>
        <tbody>
            <tr v-for="item in certificacoes" :key="item.ingresso">
                <td>{{ item.instituicao }}</td>
                <td>{{ item.titulo }}</td>
                <td>{{ item.cargaHoraria }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            certificacoes: {
                type: Array,
                require: true,
            },
        },
    };
</script>