<script>
  import { db } from '$lib/firebase';
  import { collection, onSnapshot } from "firebase/firestore";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";

  /**
   * @type {string | any[]}
   */
  let projects = [];
  /**
   * @type {string | null}
   */
  let error = null;

  function fetchProjects() {
    const projectCollection = collection(db, 'project'); 
    onSnapshot(
      projectCollection,
      (snapshot) => {
        projects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      },
      (err) => {
        console.error("Error fetching projects:", err);
        error = "Failed to fetch projects.";
      }
    );
  }

  fetchProjects();
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
</head>
<body>

<Header />

<div class="projects">
  <div class="uno1">Projects</div>
  {#if projects.length > 0}
    <ul>
      {#each projects as project}
        <li class="list">
          <div
            class="pro1"
            style="background-image: url({project.imageUrl});"
          >
            <!-- Apply dynamic class for status color -->
            <div class="{project.status === 'completed' ? 'completed' : 'pending'}"><h2>{project.status}</h2></div>
            <div class="type">{project.type}</div>
          </div>
          <div class="caption">{project.caption}</div>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No projects available.</p>
  {/if}

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
</div>

<Footer />
</body>

<style>
   :global(body){
    margin: 0;
    padding: 0;
  }
  .uno1 {
    font-family: "Lexend Terra", sans-serif;
    letter-spacing: 1.0em;
    font-size: 27px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    margin-top: 1px;
    color: black;
  }

  .projects {
    min-height: 1280px;
    width: 100%;
    max-width:100vw;
    background-color: azure;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
  }

  .pro1 {
    width: 350px;
    height: 238px;
    background-size: cover;
    background-position: center;
    margin: 0 auto; /* Center the element */
    border-radius: 3px;
    margin-right: 38px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .pending {
    color: red;
    font-family: "inter", sans-serif;
    
    margin-top: 170px;
    
    
  }

  .completed {
    color: green;
    font-family: "inter", sans-serif;
    margin-top: 170px;
   
   
  }
  .type{
    background-color: white;
    width: 100px;
    height: 40px;
    color: black;
    font-family: "inter", sans-serif;
    font-size: 17px;


  }
  .caption{
    font-family: "inter", sans-serif;
    font-size: 17px;
    margin-top:8px ;
    margin-right: 7px;

  }
</style>
