<script setup>
    import Nav from '../components/NavBar.vue';
    import Foot from '../components/FooterGame.vue';
</script>

<template>
    <section class="garage">
        <router-link to="/game"><img class="back-btn" src="../../public/img/back.png" alt=""></router-link>
        <Nav></Nav>
        <main>
            <div class="card-car">
                <img class="card-car-img" src="../../public/img/voiture.png" alt="voiture">
                <div class="card-car-info">
                    <h2>Voiture</h2>
                    <h3>1/20</h3><!-- <p>{{ compteur }}</p> -->
                </div>
            </div>
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
    .garage {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100VW;
        background-color: #f5f5f5;
    }
    .back-btn{
        position: absolute;
        top: 10px;
        left: 30px;
        height: 8vh;
        width: 8vh;
        background-color: #f5f5f5;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card-car {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 500px;
        width: 350px;
        background-color: #2C3049;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card-car-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        padding: 10px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card-card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100px;
        width: 100%;
        background-color: #2C3049;
    }
</style>