<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Corousel from "$lib/corousel.svelte";
  import Homer from "$lib/homer.svelte";
  import { onMount } from "svelte";
  import { quintOut } from 'svelte/easing';
  import { fly, fade } from 'svelte/transition'; // Import both transitions
  import {goto} from "$app/navigation"

  function navigateToContact() {
    goto('/contact'); 
  }

  const homer = [
    { image: "/background.jpeg" },
    { image: "/balc.jpeg" },
    { image: "/outdoor.jpeg" },
  ];

  const corousel = [
    {
      src: "/gypsum1.jpeg",
      head: "Gypsum",
      body: "Gypsum adds a feel of elegance and class to your apartment. If coupled with a dash of expertise, the feel increases by tenfold."
    },
    {
      src: "/landscaping1a.jpeg",
      head: "Landscaping",
      body: "Landscaping transforms outdoor spaces, adding beauty and functionality to your home. With expert touches, gardens and yards turn into elegant and serene retreats, elevating your property's appeal."
    },
    {
      src: "/construction2.jpeg",
      head: "Construction (Plumbing & Tiling)",
      body: "Our construction services blend durability and aesthetics, ensuring every tile and pipe fits perfectly. Expertise in plumbing and tiling makes your spaces more functional, adding a polished finish."
    },
    {
      src: "/design2.jpeg",
      head: "Interior Design",
      body: "Interior design enhances the ambiance and functionality of your spaces. With a touch of creativity and a keen eye for detail, we transform rooms into stylish, inviting, and personalized havens."
    },
    {
      src: "/cabinetry2.jpeg",
      head: "Cabinetry and Millwork",
      body: "Cabinetry and millwork elevate your interiors, blending craftsmanship with design. From custom kitchens to elegant built-ins, our work adds luxury and functionality, reflecting your unique style."
    },
  ];

  let currentIndex = 0;
  /**
   * @type {string | number | NodeJS.Timeout | undefined}
   */
  let interval;

  onMount(() => {
    // Setting up the interval to rotate the carousel every 4 seconds
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % corousel.length;
    }, 3500);

    // Cleanup function to clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
  });
</script>

<Header />
<div class="Home">
  <Homer/>

  <div class="our">
    <div class="projects"><u>Our Projects</u></div>
    <br />
    <div class="par">
      We have 50+ projects to our<br />name<br />each project reflects a unique
      blend<br />of form and function tailored to<br />our client's vision
    </div>
  </div>
  <a href="/projects">
    <div class="general">
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="text1">General construction</div>
    </div>
  </a>
  <a href="/projects">
    <div class="remodel">
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="text1">Remodeling</div>
    </div>
  </a>

  <!-- Displaying the carousel with fly transition -->
  {#if corousel.length}
    <Corousel {...corousel[currentIndex]} />
  {/if}

  <div class="contact">
    <div class="ev">
      Get a proven expert for your construction<br>
      <br>
      and design works
    </div>
  
    <button class="bt" on:click={navigateToContact}>Contact Us</button>
  </div>
</div>
<Footer />

<style>
  .Home {
    width: 100%;
    max-width:100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: content-box;
  }
  
  .our {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 26px;
    color: black;
    text-align: center;
    line-height: 20px;
    letter-spacing: 5%;
  }
  .par {
    font-size: 15px;
    margin-top: 5px;
    font-family: "Inter", serif;
  }
  .projects {
    font-size: 18px;
    font-family: "David Libre", serif;
  }
  .general {
    background-image: url(/slab.jpeg);
    background-position: top;
    width: 350px;
    height: 238px;
    background-size: cover;
    margin-top: 10px;
    margin-left: 12px;
    border-radius: 5px;
    position: relative;
  }
  .remodel {
    background-image: url(/int.jpeg);
    width: 350px;
    height: 238px;
    background-size: cover;
    background-position: center;
    margin-top: 15px;
    margin-left: 12px;
    border-radius: 5px;
    position: relative;
  }
  .text1 {
    margin-bottom: 3px;
    color: rgb(0, 19, 19);
    font-size: 26px;
    font-family: "Inter", serif;
    font-weight: 700;
  }
  .contact {
    width: 100%;
    max-width: 100vw;
    height: 167px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .ev {
    text-align: center;
    font-family: "Inter", serif;
    margin-top: 25px;
    font-size: 16px;
    letter-spacing: 5%;
    line-height: 10px;
  }
  .bt {
    background-color: black;
    width: 152px;
    height: 50px;
    border-radius: 5px;
    color: white;
    margin-top: 30px;
    font-size: 18px;
    font-family: "David Libre", serif;
  }
</style>
