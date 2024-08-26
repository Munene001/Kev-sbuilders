<script>
    import { onMount } from 'svelte';
    import { fetchProjects } from '$lib/firebase';
    import Header from '$lib/header.svelte';
  
    /**
   * @type {string | any[]}
   */
    let projects = [];
    /**
   * @type {string | null}
   */
    let error = null;
  
    async function loadProjects() {
      try {
        projects = await fetchProjects();
      } catch (err) {
        console.error('Error fetching projects:', err);
        error = 'Failed to load projects.';
      }
    }
  
    onMount(async () => {
      await loadProjects();
    });
  </script>
  
  <Header/>
  
  <h1>Projects</h1>
  
  {#if error}
    <p>{error}</p>
  {:else if projects.length > 0}
    <ul>
      {#each projects as project}
        <li>
          <h2>{project.caption}</h2>
          <p>Status: {project.status}</p>
          {#if project.imageUrl}
            <img src={project.imageUrl} alt={project.caption} style="max-width: 100%; height: auto;" />
          {/if}
          <p>Created At: {new Date(project.createdAt.seconds * 1000).toLocaleDateString()}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No projects available.</p>
  {/if}
  