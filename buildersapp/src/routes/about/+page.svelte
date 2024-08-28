<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import { db } from "$lib/firebase";
  import { collection, onSnapshot } from "firebase/firestore";

  /**
   * @type {string | any[]}
   */
  let team = [];
  /**
   * @type {string | null}
   */
  let error = null;

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
  fetchTeam();
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
  <link
    href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>

<Header />
<div class="about">
  <div class=" head">About</div>
  <div class="body">
    <div class="text">
      We are a team of building experts and professionals dealing with;<br />
      Construction<br />
      Remodeling<br />
      Interior Design<br />
      Landscaping<br />
      Building Consultancy<br />
      Project Management<br />
      <br />
      We offer construction services at competitive prices as we strive to ensure
      each and every person is able to live in a place they can appreciate.
    </div>
    <div class="mid">Meet our team</div>
    <div>
      {#if team.length > 0}
        <ul>
          {#each team as team}
            <li>
              <h2>{team.caption}</h2>
              <p>Status: {team.name}</p>
              <img
                src={team.imageUrl}
                alt={team.caption}
                style="width: 200px; height: auto;"
              />
              <!-- Removed the date display -->
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
  </div>
</div>
<Footer />

<style>
  .about {
    width: 360px;
    height: 1335px;
    background-image: url("/about.png");
    box-sizing: border-box;
    background-size: cover;
  }
  .head {
    font-family: "Lexend Terra", sans-serif;
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: #ffffff;
    letter-spacing: 1em;
    font-weight: 400;
  }
  .body {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    margin-top: 2px;
    width: 288px;
    height: 1266px;
    background-color: hsl(0, 0%, 85%);
    box-sizing: border-box;
    display: flex;
  }
  .text {
    font-family: "inter", serif;
    font-size: 14px;
    line-height: 15px;
    padding: 25px;
  }
  .mid {
    width: 288px;
    height: 24px;
    background-color: black;
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-family: "Lexend Terra", serif;
  }
</style>
