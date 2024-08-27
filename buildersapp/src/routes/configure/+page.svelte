<script>
  import { addProject, addTeamMember, uploadImage } from '$lib/firebase';
  import Header from '$lib/header.svelte';

  let projectCaption = "";
  let projectStatus = "pending";
  let projectImage = null;
  let teamCaption = "";
  let teamImage = null;
  let error = null;

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
