<script>
  import { db } from '$lib/firebase';
  import { collection, onSnapshot } from "firebase/firestore";

  /**
   * @type {string | any[]}
   */
  let projects = [];
  /**
   * @type {string | null}
   */
  let error = null;

  // Fetch and display projects in real-time
  function fetchProjects() {
    const projectCollection = collection(db, 'project'); // Make sure 'projects' matches your Firestore collection name
    onSnapshot(projectCollection, (snapshot) => {
      projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }, (err) => {
      console.error("Error fetching projects:", err);
      error = "Failed to fetch projects.";
    });
  }

  // Call the fetch function when the component is mounted
  fetchProjects();
</script>

<h1>Projects</h1>
{#if projects.length > 0}
  <ul>
    {#each projects as project}
      <li>
        <h2>{project.caption}</h2>
        <p>Status: {project.status}</p>
        <img src={project.imageUrl} alt={project.caption} style="width: 200px; height: auto;" />
        <!-- Removed the date display -->
      </li>
    {/each}
  </ul>
{:else}
  <p>No projects available.</p>
{/if}

{#if error}
  <p style="color: red;">{error}</p>
{/if}
