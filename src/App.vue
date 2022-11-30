<script setup>
</script>

<template>
    <alerta-app></alerta-app>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/perfil">Perfil</router-link> |
      <router-link to="/notificacoes">Notiificações</router-link> |
      <router-link to="/">Sair</router-link> |
    </nav>
    <router-view></router-view>
</template>


