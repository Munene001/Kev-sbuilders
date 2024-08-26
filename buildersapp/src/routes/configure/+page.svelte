<script>
    import { onMount } from 'svelte';
    import { addProject, addTeamMember, uploadImage, fetchProjects, fetchTeamMembers, listenToProjects, listenToTeamMembers } from '$lib/firebase';
    import Header from '$lib/header.svelte';
  
    let projectCaption = "";
    let projectStatus = "pending";
    let projectImage = null;
    let teamCaption = "";
    let teamImage = null;
  
    let projects = [];
    let teamMembers = [];
    let error = null;
  
    async function handleProjectUpload() {
      if (projectImage) {
        try {
          const imageUrl = await uploadImage(projectImage, "projects");
          const project = {
            caption: projectCaption,
            status: projectStatus,
            imageUrl,
            createdAt: new Date(),
          };
          await addProject(project);
          alert("Project uploaded successfully");
          resetProjectForm();
        } catch (error) {
          console.error("Error uploading project:", error);
          error = "Failed to upload project.";
        }
      } else {
        alert("Please select an image for the project");
      }
    }
  
    async function handleTeamMemberUpload() {
      if (teamImage) {
        try {
          const imageUrl = await uploadImage(teamImage, "team");
          const teamMember = {
            caption: teamCaption,
            imageUrl,
            createdAt: new Date(),
          };
          await addTeamMember(teamMember);
          alert("Team member uploaded successfully");
          resetTeamForm();
        } catch (error) {
          console.error("Error uploading team member:", error);
          error = "Failed to upload team member.";
        }
      } else {
        alert("Please select an image for the team member");
      }
    }
  
    function handleProjectImageChange(event) {
      const input = event.target;
      projectImage = input.files ? input.files[0] : null;
    }
  
    function handleTeamImageChange(event) {
      const input = event.target;
      teamImage = input.files ? input.files[0] : null;
    }
  
    function resetProjectForm() {
      projectCaption = "";
      projectStatus = "pending";
      projectImage = null;
    }
  
    function resetTeamForm() {
      teamCaption = "";
      teamImage = null;
    }
  
    // Function to load projects with real-time updates
    function setupRealTimeProjects() {
      try {
        listenToProjects((snapshot) => {
          projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
      } catch (err) {
        console.error("Error setting up real-time project listener:", err);
        error = "Failed to set up real-time project listener.";
      }
    }
  
    // Function to load team members with real-time updates
    function setupRealTimeTeamMembers() {
      try {
        listenToTeamMembers((snapshot) => {
          teamMembers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });
      } catch (err) {
        console.error("Error setting up real-time team member listener:", err);
        error = "Failed to set up real-time team member listener.";
      }
    }
  
    onMount(() => {
      setupRealTimeProjects();
      setupRealTimeTeamMembers();
    });
  </script>
  
  <Header/>
  
  <h1>Configure Page</h1>
  
  <!-- Form to upload a new project -->
  <form on:submit|preventDefault={handleProjectUpload}>
    <h2>Upload Project</h2>
    <label>
      Caption:
      <input
        type="text"
        bind:value={projectCaption}
        placeholder="Enter project caption"
        required
      />
    </label>
  
    <label>
      Status:
      <select bind:value={projectStatus}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </label>
  
    <label>
      Image:
      <input
        type="file"
        accept="image/*"
        on:change={handleProjectImageChange}
        required
      />
    </label>
  
    <button type="submit">Upload Project</button>
  </form>
  
  <!-- Form to add a new team member -->
  <form on:submit|preventDefault={handleTeamMemberUpload}>
    <h2>Add Team Member</h2>
    <label>
      Caption:
      <input
        type="text"
        bind:value={teamCaption}
        placeholder="Enter team member caption"
        required
      />
    </label>
  
    <label>
      Image:
      <input
        type="file"
        accept="image/*"
        on:change={handleTeamImageChange}
        required
      />
    </label>
  
    <button type="submit">Add Team Member</button>
  </form>
  
  <!-- Display projects -->
  <h2>Projects</h2>
  {#if error}
    <p>{error}</p>
  {:else if projects.length > 0}
    <ul>
      {#each projects as project}
        <li>
          <h3>{project.caption}</h3>
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
  
  <!-- Display team members -->
  <h2>Team Members</h2>
  {#if error}
    <p>{error}</p>
  {:else if teamMembers.length > 0}
    <ul>
      {#each teamMembers as teamMember}
        <li>
          <h3>{teamMember.caption}</h3>
          {#if teamMember.imageUrl}
            <img src={teamMember.imageUrl} alt={teamMember.caption} style="max-width: 100%; height: auto;" />
          {/if}
          <p>Created At: {new Date(teamMember.createdAt.seconds * 1000).toLocaleDateString()}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No team members available.</p>
  {/if}
  