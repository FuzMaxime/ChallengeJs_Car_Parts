<template>
    <router-link :to="path" class="card">
        <img class="card-img" :src="img" alt="">
        <h2 class="card-title">{{ title }}</h2> 
    </router-link>
</template>

<script>
    export default {
        props: {
            path: String,
            title: String,
            img: String,
        }
    }
</script>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 350px;
        height: 500px;
        color: #000;
        background-color: #f5f5f5;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin: 1rem;
    }
    .card-img {
        width: 95%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }
    .card-title {
        font-size: 1.5rem;
        font-weight: 50px;
        margin-top: 1rem;
    }
</style>