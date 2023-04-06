<template>
    <nav class="footer">
        <router-link to="/magasin"><img src="../assets/logo.png" alt=""></router-link>
        <img src="../assets/logo.png" alt="">
    </nav>
</template>

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
    .nav-link {
        background-color: #f5f5f5;
    }
    .nav-link img {
        width: 8vh;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    h1 {
        font-size: 3rem;
        font-weight: 50px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1vh 2vh;
        background-color: yellow;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 50px;
        margin-right: 1rem;
    }
    img {
        width: 5vh;
    }
</style>