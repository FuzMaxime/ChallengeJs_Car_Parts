<template>
    <nav>
        <router-link to="/" class="nav-link"><img src="../../public/img/menu.png" alt="menu"></router-link>
        <h1 class="title">Car Parts</h1>
        <div>
            <h2>000000</h2>
            <img src="../../public/img/money.png" alt="">
        </div>
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
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 80%;
        width: 100%;
        height: 10vh;
        background-color: red;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .nav-link {
        height: 7vh;
        width: 7vh;
        background-color: #f5f5f5;
        border-radius: 50px;
    }
    .nav-link img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .title {
        font-size: 3rem;
        font-weight: 50px;
        position: absolute;
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