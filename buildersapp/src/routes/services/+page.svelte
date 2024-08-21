<script>
  import Icon from "@iconify/svelte";
  import { goto } from "$app/navigation";
  let popOpen = false;
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Services",
      url: "/services",
    },
    {
      label: "Contact",
      url: "/contact",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Admin",
      url: "/admin",
    },
  ];
  $: {
    console.log("Pops", popOpen)
  }
  const navigateTo = (/** @type {string} */ url) => {
    popOpen = false;
    goto(url);
  };
</script>
<div class="header">
  <div class="logo">KEV'S INTERIORS <br />& BUILDERS</div>
  <div class="navigation">
    <button class="button1" on:click={(e) => (popOpen = true)}>
        <Icon icon="mi:menu" />
    </button>

    {#if popOpen}
      <div class="dropdown">
        <div>
          {#each links as link}
            <button class="pages" on:click={(e) => navigateTo(link.url)}>
              {link.label}
            </button>
          {/each}
        </div>
        <button class = "close" on:click={(e) => (popOpen=false)}><Icon icon="mingcute:close-line" /></button>
      </div>
    {/if}
  </div>
</div>


<style>
    .header{
        width: 360px;
        height: 105px;
        background-color: #d9d9d9;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        font-weight: bold;
        font-size: 24px;
    }
</style>
