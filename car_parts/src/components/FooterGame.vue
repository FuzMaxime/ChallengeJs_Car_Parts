<template>
    <nav class="footer">
        <router-link to="/magasin"><img class="shop" src="../../public/img/online-shop.png" alt=""></router-link>
        <button class="casse" v-on:click="casse()"><img src="../../public/img/casse-automobile.png" alt=""></button>
    </nav>
</template>

<script>
    let time = true;
    export default {
        methods: {
            casse() {
                if (time) {
                    alert('Vous avez reçu une piece !');
                    time = false;
                } else {
                    alert('Vous avez déjà récupéré le gain de la casse !');
                    time = true;
                }
            }
        }
    }
    
</script>

<style>
    * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    }
    .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 10vh;
        gap: 80%;
        background-color: red;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .footer .shop {
        width: 50px;
        height: 50px;
        padding: 5px;
    }
    .footer .casse {
        width: 60px;
        height: 60px;
        cursor: pointer;
        border: none;
    }
    .footer .casse,
    .footer .shop {
        background-color: aliceblue;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
</style>