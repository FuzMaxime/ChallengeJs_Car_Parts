<script setup>
  import Nav from '../components/NavBar.vue';
  import Foot from '../components/FooterMenu.vue';
</script>

<template>
    <section class="menu">
        <Nav></Nav>
        
        <main>
            <li><router-link to="/game">Jouer</router-link></li>
            <li><router-link to="/game">Recommencer</router-link></li>
            <li><router-link to="/">Quitter</router-link></li>
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
    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100VW;
        background-color: #f5f5f5;
    }
    /* header,
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        height: 9vh;
        width: 100%;
        background-color: #2C3049;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    } */
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        width: 100%;
    }
    main li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        width: 50%;
        font-size: 2rem;
        font-weight: 50px;
        margin: 1rem;
        background-color: #dd160f;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        width: 100;
        background-color: #2C3049;
    }
</style>