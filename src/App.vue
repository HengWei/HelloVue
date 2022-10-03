<template>
    <navView></navView>
    <router-view></router-view>
</template>

<script>    
    import navView from './components/navPage.vue'
    export default {
        name: 'App',
        components: {
            navView
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
