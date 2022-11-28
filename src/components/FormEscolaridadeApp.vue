<template>
    <button v-show="!formEducacao" @click="formEducacao = true" type="button">Novo</button>
    <div v-show="formEducacao">
        <label for="instituição">Instituição de Ensino</label>
        <input v-model="educacao.instituicao" id="instituição" type="text" placeholder="Instituição">

        <label for="ingresso">Instituição de Ensino</label>
        <input v-model="educacao.ingresso" id="ingresso" type="date" placeholder="Data de ingresso">

        <label for="conclusao">Instituição de Ensino</label>
        <input v-model="educacao.conclusao" id="conclusao" type="date" placeholder="Data de conclusão">

        <label for="nivelEscolaridade">Nível de Escolaridade</label>
        <select v-model="educacao.nivelEscolaridade" id="nivelEscolaridade">
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Ensino Superior">Ensino Superior</option>
            <option value="Ensino Pós-Graduação">Ensino Pós-Graduação</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
        </select>
        <button @click="adicionarEducacao" type="button">Adicionar</button>
    <button @click="formEducacao = false" type="button">Cancelar</button>
    </div>
</template>

<script>
export default {
    props: {
        perfil: {
            type: Object,
            require: true,
        },
    },
    data: () => ({
        educacao: {},
        formEducacao: false,
    }),
    methods: {
        adicionarEducacao() {
            this.perfil.educacao.push(this.educacao);
            this.educacao = {};
            this.formEducacao = false;
        },
    },
}
</script>