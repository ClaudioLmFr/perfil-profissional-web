<template>
    <button v-show="!formCertificacao" @click="formCertificacao = true" type="button">Novo</button>
    <div v-show="formCertificacao">
        <label for="instituição">Instituição de Ensino</label>
        <input v-model="certificacao.instituicao" id="instituição" type="text" placeholder="Ex: High Tech Cursos">

        <label for="titulo">Título</label>
        <input v-model="certificacao.titulo" id="titulo" type="text" placeholder="Ex: Fábrica de programador">

        <label for="cargaHoraria">Carga Horária</label>
        <input v-model="certificacao.cargaHoraria" id="cargaHoraria" type="number" placeholder="Ex: 12 horas">

        <button @click="adicionarcertificacao" type="button">Adicionar</button>
        <button @click="formCertificacao = false" type="button">Cancelar</button>
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
        certificacao: {},
        formCertificacao: false,
    }),
    methods: {
        adicionarcertificacao() {
            this.perfil.certificacoes.push(this.certificacao);
            this.certificacao = {};
            this.formCertificacao = false;
        },
    },
}
</script>