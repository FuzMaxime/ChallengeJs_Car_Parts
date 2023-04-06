<script setup>
    import Nav from '../components/NavBar.vue';
    import Foot from '../components/FooterGame.vue';
</script>

<template>
    <section class="game">
        <Nav></Nav>
        <main>

        </main>
        <Foot></Foot>
    </section>
</template>

<style>
     * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
    }
    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100VW;
        background-color: #f5f5f5;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        width: 100%;
    }
     footer {
        display: flex;
        align-items: center;
        padding: 0 20px;
     }
</style>