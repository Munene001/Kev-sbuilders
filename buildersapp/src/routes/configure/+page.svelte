<script>
  import { addProject, addTeamMember, uploadImage } from "$lib/firebase";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import { db } from "$lib/firebase";
  import { collection, onSnapshot,deleteDoc,doc } from "firebase/firestore";
  

  let projectCaption = "";
  let projectStatus = "pending";
  let projectImage = null;
  let teamCaption = "";
  let teamName = "";
  let teamImage = null;
  let error = null;

  let team = [];
  let projects = [];

  function fetchTeam() {
    const teamCollection = collection(db, "team");
    onSnapshot(
      teamCollection,
      (snapshot) => {
        team = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
      },
      (err) => {
        console.error("error fetching team", err);
        error = "failed to fetch team,";
      }
    );
  }

  function fetchProjects() {
    const projectCollection = collection(db, 'project'); // Make sure 'projects' matches your Firestore collection name
    onSnapshot(projectCollection, (snapshot) => {
      projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }, (err) => {
      console.error("Error fetching projects:", err);
      error = "Failed to fetch projects.";
    });
  }
  fetchTeam();
  fetchProjects();

  async function deleteProject(id) {
    try{
      await deleteDoc(doc(db, 'project', id));
      alert("Project deleted successfully");
    } catch(error){
      console.error("Error deleting project:", error);
      error = "Failed to delete project";
    }
    
  }
  async function deleteTeamMember(id) {
    try{
      await deleteDoc(doc(db, 'team', id));
      alert("Team member deleted successfully");
    } catch(error){
      console.error("Error deleting TeamMember:", error);
      error = "Failed to delete team memeber";
    }
    
  }


  async function handleProjectUpload() {
    if (projectImage) {
      try {
        const imageUrl = await uploadImage(projectImage, "projects");
        const project = {
          caption: projectCaption,
          status: projectStatus,
          imageUrl,
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
          name:teamName,
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
    teamName = "";
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
</head>

<Header />

<div class="configure">
  <div class="conhead">Configure</div>

  <!-- Form to upload a new project -->
  <form on:submit|preventDefault={handleProjectUpload} class="form-container">
    <h2>Upload Project</h2>
    <div class="form-group">
      <label>
        Caption:
        <input
          type="text"
          bind:value={projectCaption}
          placeholder="Enter project caption"
          required
        />
      </label>
    </div>
    <br />

    <div class="form-group">
      <label>
        Status:<br />
        <select bind:value={projectStatus}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
    <br />

    <div class="form-group">
      <label>
        Image:<br />
        <input
          type="file"
          accept="image/*"
          on:change={handleProjectImageChange}
          required
        />
      </label>
    </div>
    <br />

    <button class="submit-button" type="submit">Upload Project</button><br />
  </form>
  <br />

  <!-- Form to add a new team member -->
  <form
    on:submit|preventDefault={handleTeamMemberUpload}
    class="form-container"
  >
    <h2>Add Team Member</h2>
    <div class="form-group">
      <label>
        Name:
        <input
          type="text"
          bind:value={teamName}
          placeholder="Enter team member Name"
          required
        />
      </label>
    </div>
    <div class="form-group">
      <label>
        Caption:
        <input
          type="text"
          bind:value={teamCaption}
          placeholder="Enter team member caption"
          required
        />
      </label>
    </div>
    <br />

    <div class="form-group">
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          on:change={handleTeamImageChange}
          required
        />
      </label>
    </div>
    <br />

    <button class="submit-button" type="submit">Add Team Member</button>
  </form>
</div>
<h3>Projects</h3>
  {#if projects.length > 0}
    <ul>
      {#each projects as project}
        <li>
          <h2>{project.caption}</h2>
          <p>Status: {project.status}</p>
          <img src={project.imageUrl} alt={project.caption} style="width: 200px; height: auto;" />
          <button on:click={() => deleteProject(project.id)}>Delete Project</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No projects available.</p>
  {/if}
  <br>
  <br>
  <br>
  <h3>Team Members</h3>
  {#if team.length > 0}
    <ul>
      {#each team as member}
        <li>
          <h2>{member.caption}</h2>
          <p>Name: {member.name}</p>
          <img src={member.imageUrl} alt={member.caption} style="width: 200px; height: auto;" />
          <button on:click={() => deleteTeamMember(member.id)}>Delete Team Member</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No team members available.</p>
  {/if}

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}


<Footer />

<style>
  .configure {
    width: 360px;
    background-color: azure;
    box-sizing: border-box;
  }

  .form-container {
    color: black;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.2em;
    font-weight: 300;
    margin-top: 20px;
    font-size: 12px;
    margin-left: 15px;
  }

  .form-group {
    margin-top: 7px;
  }

  input[type="text"],
  input[type="file"],
  select {
    width: 80%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }

  .submit-button {
    padding: 5px;
    border-radius: 4px;
    background-color: #007bff; /* Example color, adjust as needed */
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .submit-button:hover {
    background-color: #0056b3; /* Example hover color, adjust as needed */
  }
  .form-group label {
    font-size: 16px;
    display: block;
    margin-bottom: 4px;
  }
  .conhead {
    font-family: "Lexend Terra", sans-serif;
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 26px;
    color: rgb(34, 27, 27);
    margin-bottom: 50px;
    margin-top: 1px;
    letter-spacing: 0.8em;
  }
</style>
