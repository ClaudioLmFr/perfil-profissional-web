<template>
    <table border="1">
        <thead>
            <th>Instituição</th>
            <th>Nível</th>
            <th>Ingresso</th>
            <th>Conclusão</th>
        </thead>
        <tbody>
            <tr v-for="item in educacao" :key="item.ingresso">
                <td>{{ item.instituicao }}</td>
                <td>{{ item.nivelEscolaridade }}</td>
                <td>{{ item.ingresso }}</td>
                <td>{{ item.conclusao }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            educacao: {
                type: Array,
                require: true,
            },
        },
    };
</script>