<script>
    export let src = "/gypsum2.jpeg";
    export let head = "GYPSUM WORKS";
    export let body = "Gypsum adds a feel of elegance and class to your apartment.If coupled with a dash of expertise the feel increases by tenfold.";
    import { quintOut } from 'svelte/easing'; // Correct import for easing function
  import { fly } from 'svelte/transition';
  import {goto} from "$app/navigation"

  function navigateToServices() {
    goto('/services'); 
  }
  </script>
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Terra&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  
  <div transition:fly={{x:3000,duration: 3000, easing: quintOut }} class="compe">
    <div class="ser">
      <div class="ser1"><u>Our services</u></div>
      <div class="ser2">
        We strive to make your living experience better<br /> through our
        expertise at affordable <br />prices.
      </div>
    </div>
    <div class="carousel" style=" background-image: url({src});"></div>
    <div class="carousel2">
      <div class="car1">
        <div class="g">{head}</div>{body}
      </div>
      <button class="link" on:click={navigateToServices}>Services</button>
    </div>
  </div>
  
  <style>
    .compe {
      width: 100%;
      max-width: 100vw;
      height: 522px;
      background-color: black;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 30px;
    }
    .ser {
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      margin-top: 17px;
    }
    .ser1 {
      font-size: 18px;
      font-family: "David Libre", serif;
    }
    .ser2 {
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 15%;
      font-family: "inter", sans-serif;
      margin-top: 14px;
    }
    .carousel {
      width: 272px;
      height: 200px;
      background-size: cover;
      background-position: center;
      margin-top: 44px;
      z-index: 1;
      margin-left: 23px;
      border-radius: 3px;
    }
    .carousel2 {
      width: 272px;
      height: 200px;
      background-color: white;
      margin-top: 18px;
      z-index: 2;
      position: absolute;
      bottom: 34px;
      right: 24px;
      border-radius: 3px;
    }
    .car1 {
      position: absolute;
      width: 156px;
      height: 77px;
      background-color: white;
      right: 63px;
      bottom: 110px;
      font-size: 10px;
      font-family: "inter", serif;
      line-height: 12px;
    }
  
    .link {
      position: absolute;
      width: 88px;
      height: 34px;
      background-color: black;
      color: white;
      font-size: 18px;
      font-family: "David Libre", serif;
      right: 132px;
      bottom: 38px;
      border-radius: 5px;
    }
    .g{
      font-size: 15px;
      margin-bottom: 10px;
      font-weight: 600;
  
    }
  </style>
  