<!-- <script setup>
  import ItemInfo from '../components/ItemInfo.vue';
</script> -->

<template>
    <section class="quete">
        <canvas></canvas>
        <section class="nav">
          <div class="money">
            <h2>000000</h2>
            <img src="../../public/img/money.png" alt="">
          </div>
          <h3 class="instruction">
            Votre objectif est de rentrer dans le garage pour voler une pièce de voiture
          </h3>
          <div class="deplacement">
            <img class="img-clav" src="../assets/bouton-clavier.png" alt="">
            <h4>Déplacement</h4>
          </div>
          <router-link to="/game"><img class="btn-back" src="../../public/img/back.png" alt=""></router-link>
        </section>
    </section>
</template>

<style>
     .quete {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        width: 100VW;
        background-color: #f5f5f5;
     }
     /* canvas {
        margin-left: 20px;
        border: 5px solid black;
        width: 90%;
        height: 95%;
        background-size: cover;
        background-image: url(../assets/map1.png);
     } */
     .nav{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 8%;
        height: 95%;
     }
      .money {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 100px;
          height: 50px;
      }
      .money h2 {
          font-size: 20px;
      }
      .money img {
          width: 30px;
          height: 30px;
      }
      .instruction {
          width: 100px;
          text-align: center;
          font-size: 20px;
          background-color: rgb(42, 230, 73);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      .deplacement {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 100px;
          padding: 20px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      .deplacement .img-clav {
          width: 140px;
          height: 140px;
      }
      .btn-back {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
</style>

