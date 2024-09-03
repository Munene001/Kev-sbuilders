<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
  
    let images = [
      "/background.jpeg",
      "/balc.jpeg",
      "/outdoor.jpeg",
    ];
  
    let currentIndex = 0;
    /**
   * @type {string | number | NodeJS.Timeout | undefined}
   */
    let interval;
  
    onMount(() => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    });
  </script>
  
  <div class="font" style="background-image: url({images[currentIndex]});" transition:fade={{ duration: 1200 }}>
    <div class="header">Home</div>
    <div class="welcome">
      Welcome,<br />Transform your<br />Space with us
    </div>
  </div>
  
  <style>
    .font {
      width: 100%;
      max-width:100vh;
      height: 713px;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
    .header {
      font-family: "Lexend Terra", sans-serif;
      letter-spacing: 1em;
      font-size: 30px;
      font-weight: 600;
      color: white;
      margin-left: 23px;
    }
    .welcome {
      color: whitesmoke;
      font-size: 38px;
      margin-bottom: 270px;
      margin-left: 15px;
      font-family: "David Libre", serif;
      letter-spacing: 5%;
      line-height: 44px;
      font-weight: 300;
    }
  </style>
  