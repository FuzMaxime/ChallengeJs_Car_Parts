<script setup>
    import Nav from '../components/NavBar.vue';
    import Card from '../components/CardGame.vue';
    import Foot from '../components/FooterGame.vue';
    import { ref } from 'vue';

    const cards = ref([
        {
          id: 1,
          path: "/quete",
          title: "Quêtes",
          img: "./img/quete.png",
        },
        {
          id: 2,
          path: "/hhgk",
          title: "Circuit",
          img: "./img/circuit.png",
        },
        {
          id: 3,
          path: "/garage",
          title: "Garage",
          img: "./img/garage.png",
        }
    ]);
</script>

<template>
    <section class="game">
        <Nav></Nav>
        <main class="display-card">
            <Card v-for="item in cards" :key="item.id" :path=item.path :title="item.title" :img="item.img"/>
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
    .display-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 80vh;
        width: 100%;
    }
     footer {
        display: flex;
        align-items: center;
        padding: 0 20px;
     }
</style>