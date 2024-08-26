<script>
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  import Header from "$lib/header.svelte"
  
  let popOpen = false;
  
  const links = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
    { label: "Projects", url: "/projects" },
    { label: "Admin", url: "/admin" },
  ];

  const navigateTo = (/** @type {string | URL} */ url) => {
    popOpen = false;
    goto(url);
  };
</script>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Lexend+Terra&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&display=swap" rel="stylesheet">

  
</head>

<div class="header" class:hidden={popOpen}>
  <!-- Correct conditional class application -->
  <div class="logo">
    KEV'S INTERIORS <br />& BUILDERS
  </div>
  <div class="navigation" >
    <button class="button1"  on:click={() => (popOpen = true)}>
      <Icon icon="mi:menu"  style="width:27px;height:27px;"/>
    </button>
  </div>
</div>

    {#if popOpen}
      <div class="dropdown">
        <div class="header">
          <div class="logo1">
            KEV'S INTERIORS <br />& BUILDERS
          </div>
          <div class = "navigation"><button class="close" on:click={() => (popOpen = false)}>
            <Icon icon="mingcute:close-line" style= "width:40px; height:40px;" />
          </button></div>
          
        </div>
        <div class = "links">
          {#each links as link}
            <button class="pages" on:click={() => navigateTo(link.url)}>
              {link.label}
            </button>
          {/each}
          </div>
        
        
      </div>
    {/if}
  


<style>
  .header {
    width: 360px;
    height: 105px;
    background-color: #d9d9d9;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    
  }
  
  .logo {
    font-weight: bold;
    font-size: 28px;
    font-family: 'David Libre', serif;
  }
  .logo1{
    font-weight: bold;
    font-size: 28px;
    color: white;
    font-family: 'David Libre', serif;

  }
  .links{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 115px;
    
  }


  .hidden {
    display: none;
  }
  
    
  
  .dropdown{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 360px;
    box-sizing: border-box;
    height: 800vh;
   
    
    
   
  }
  .pages{
    border: #d9d9d9;
    font-size: 36px;
    margin-top: 22px;
    background-color:white;
    color: black;
    width: 20px;
    font-family: 'David Libre', serif;
  }
 
  
</style>
