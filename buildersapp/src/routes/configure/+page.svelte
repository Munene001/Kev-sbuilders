<script>
  import { addProject, addTeamMember, uploadImage } from "$lib/firebase";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import { db } from "$lib/firebase";
  import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

  let projectCaption = "";
  let projectStatus = "pending";
  let projectImage = null;
  let projectType = "Remodelling";
  let teamCaption = "";
  let teamName = "";
  let teamImage = null;
  let error = null;

  let team = [];
  let projects = [];
  let contact = [];

  function fetchTeam() {
    const teamCollection = collection(db, "team");
    onSnapshot(
      teamCollection,
      (snapshot) => {
        team = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      },
      (err) => {
        console.error("error fetching team", err);
        error = "failed to fetch team,";
      }
    );
  }
  function fetchContact() {
    const contactCollection = collection(db, "contact");
    onSnapshot(
      contactCollection,
      (snapshot) => {
        contact = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      },
      (err) => {
        console.error("error fetching contact", err);
        error = "failed to fetch contact,";
      }
    );
  }

  function fetchProjects() {
    const projectCollection = collection(db, "project"); // Make sure 'projects' matches your Firestore collection name
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
  fetchTeam();
  fetchProjects();
  fetchContact();

  async function deleteProject(id) {
    try {
      await deleteDoc(doc(db, "project", id));
      alert("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      error = "Failed to delete project";
    }
  }
  async function deleteContact(id) {
    try {
      await deleteDoc(doc(db, "contact", id));
      alert("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      error = "Failed to delete contact";
    }
  }
  async function deleteTeamMember(id) {
    try {
      await deleteDoc(doc(db, "team", id));
      alert("Team member deleted successfully");
    } catch (error) {
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
          type: projectType,
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
          name: teamName,
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
    projectType = "Remodelling";
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
<body>
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
    <div class="form-group">
      <label>
        Type:<br />
        <select bind:value={projectType}>
          <option value="Remodelling">Remodelling</option>
          <option value="General Construction">General Construction</option>
        </select>
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
  <br />
  <br />

  <div class="title">Projects</div>
  {#if projects.length > 0}
    <ul>
      {#each projects as project}
        <li class="list">
          <div class="pro1" style="background-image: url({project.imageUrl});">
            <!-- Apply dynamic class for status color -->
            <div
              class={project.status === "completed" ? "completed" : "pending"}
            >
              <h2>{project.status}</h2>
            </div>
            <div class="type">{project.type}</div>
          </div>
          <div class="caption1">{project.caption}</div>
          <br />
          <button
            on:click={() => deleteProject(project.id)}
            class="submit-button">Delete Project</button
          >
        </li>
      {/each}
    </ul>
  {:else}
    <p>No projects available.</p>
  {/if}

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
  <br />
  <br />

  <div class="title">Team Members</div>
  <div class="pro1o">
    {#if team.length > 0}
      <ul class="teamlist">
        {#each team as team}
          <li class="teammember">
            <div class="image">
              <img src={team.imageUrl} alt={team.caption} />
            </div>
            <div class=" name">Name: {team.name}</div>
            <div class="caption">
              {team.caption}
              <div>
                <br />
                <button
                  on:click={() => deleteTeamMember(team.id)}
                  class="submit-button">Delete Team Member</button
                >
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No teamMembers available.</p>
    {/if}

    {#if error}
      <p style="color: red;">{error}</p>
    {/if}
  </div>
  <div class="title2">Contact Feedback</div>
  {#if contact.length > 0}
    <ul>
      {#each contact as contact}
        <li class="list">
          <div class="caption1">{contact.firstname} {contact.lastname}</div>
          <div class="caption1">{contact.email}</div>
          
          <div class="caption1">{contact.phonenumber}</div>
          <div class="caption1"><b>Message: </b>{contact.message}</div>
          <br />
          <button
            on:click={() => deleteContact(contact.id)}
            class="submit-button">Delete Feedback</button
          >
        </li>
      {/each}
    </ul>
  {:else}
    <p>No feedback available.</p>
  {/if}

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}
</div>
</body>

<style>
   :global(body){
    margin: 0;
    padding: 0;
  }
  .configure {
    width: 100%;
    max-width: 100vw;
    background-color: azure;
    box-sizing: border-box;
  }

  .form-container {
    color: black;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.2em;
    font-weight: 300;
    margin-top: 20px;
    font-size: 14px;
    margin-left: 15px;
    box-sizing: border-box;
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
    font-size: 16px;
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
    font-size: 18px;
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
  .teamlist {
    list-style: none;
    margin-left: 20px;
  }
  .teammember {
    margin-bottom: 30px;
    display: flex;
    display: block;
  }
  .image img {
    width: 167px;
    height: 167px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    display: flex;
    font-size: 17px;
    margin-bottom: 4px;
    margin-top: 3px;
    font-weight: bold;
    font-family: "inter", serif;
  }
  .caption {
    font-family: "inter", serif;
    color: #222;
    font-size: 15px;
  }
  .title {
    color: black;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.2em;
    font-weight: 700;
    font-size: 22px;
    margin-left: 20px;
  }
  .pro1 {
    width: 350x;
    height: 240px;
    background-size: cover;
    background-position: center;
    /* Center the element */
    border-radius: 3px;
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
    margin-right: 38px;
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
  .type {
    background-color: white;
    width: 112px;
    height: 48px;
    color: black;
    font-family: "inter", sans-serif;
    font-size: 17px;
  }
  .caption1 {
    font-family: "inter", sans-serif;
    font-size: 17px;
    margin-top: 8px;
    margin-right: 7px;
  }
  .title2{
    color: black;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.2em;
    font-weight: 700;
    font-size: 22px;
    margin-left: 50px

  }
</style>
