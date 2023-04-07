
<template>
    <section class="game">
        <main>
            <h2>Erreur 404</h2>
            <h3>La page que vous recherchez n'existe pas</h3>
            <router-link class='btn-return' to="/game">Retourner</router-link>
        </main>
    </section>
</template>

<style>
    .btn-return {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        width: 50%;
        font-size: 2rem;
        font-weight: 50px;
        margin: 1rem;
        color: #fff;
        background-color: #000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
</style>