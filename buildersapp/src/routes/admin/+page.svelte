<script>
  import { auth } from "$lib/firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { goto } from "$app/navigation";
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";

  let email = "";
  let password = "";

  const adminEmail = "kevokiach20@gmail.com";
  const adminPassword = "gypsumworks.";

  const login = async () => {
    try {
      if (email === adminEmail && password === adminPassword) {
        const userCredentila = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("admin signed in:", userCredentila.user);
        goto("/configure");
      } else {
        alert("invalid credentials. Only the admin can access this page");
      }
    } catch (error) {
        if (error instanceof Error) {
        console.error("Error signing in:", error.message);
        alert("Login failed: " + error.message);
      } else {
        console.error("Unknown error:", error);
        alert("Login failed: An unknown error occurred.");
      }
    }
  };
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Terra&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&display=swap" rel="stylesheet">
  
    
  </head>
  <body>
  <Header/>
<div class = "admin">
    <div class=" heading">Admin</div>

<form on:submit|preventDefault={login}>
  <input type="email" bind:value={email} placeholder="Admin Email" required />
  <input
    type="password"
    bind:value={password}
    placeholder="Admin Password"
    required
  />
  <br>
  <button type="submit">Login</button>
</form>
</div>
<Footer/>
</body>
<style>
    :global(body){
    margin: 0;
    padding: 0;
  }
    .admin{
        width: 100%;
        max-width:100vw;
        height: 177vh;
        background-color:azure;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .heading{
        font-family: "Lexend Terra", sans-serif;
        font-size: 32px;
        font-weight: 400;
        margin-top: 2px;
        margin-bottom: 36px;
        letter-spacing: 0.8em;
        margin-left: 8px;

    }
    
  input[type="email"],
  input[type="password"],
  button[type = "submit"]
  {
    width: 80%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    margin-top: 10px;
    margin-left: 30px;
    box-sizing: border-box;
    font-family: "";
    

  }
</style>
