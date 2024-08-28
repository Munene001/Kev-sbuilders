<script>
  import Footer from "$lib/footer.svelte";
  import Header from '$lib/header.svelte';
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

  <Header/>
  <div class="contact">
    <div class="uno">CONTACT</div>
    <div class="dos">Have a project in mind?</div>
    <div class="tres">Contact Us</div>
    <div class="cuantro"><u>+254 712 345678|kevokiach20@gmail.com</u></div>
    <div class="cinco">
      <div class="cincouno">
        <div class="cincodos">Open on:</div>
        <div class="cincotres">Monday - Saturday</div>
      </div>
      <div class="cincouno">
        <div class="cincodos">Location:</div>
        <div class="cincotres">Engineer Town, Kinangop</div>
      </div>
    </div>
    <div class="seis">
      <iframe
      title="Engineer Town"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6794.779693824633!2d36.57401400644805!3d-0.6056501291700614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182902cd425fb409%3A0xa69392805474f81a!2sKinangop%20Police%20Station!5e1!3m2!1sen!2ske!4v1723826769817!5m2!1sen!2ske"
        width="330px"
        height="403px"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class = "form-container">
        <form action="" method="post">
            <div>Name</div>
            <div class = "form-group1">
                <div><label for = "name">Firstname:</label> <br><br><input type = "text" id= "firtsname" name="firstname" required/></div>
                <div><label for = "name">Lastname:</label><br> <br><input type = "text" id= "lastname" name="lastname" required/></div>
            </div>
            <div class = "form-group">
                <div><label for = "name">Email:</label><br><br> <input type = "email" id= "email" name="email" required/></div>
                
            </div>
            <div class = "form-group">
                <div><label for = "name">Phone Number:</label><br><br> <input type = "tel" id= "phone" name="phone" required/></div>
                
            </div>
            <div class = "form-group">
                <div><label for = "name">Message:</label> <br><br><textarea id = "message" name="message" rows="7" required/></div>
                
            </div>
            <br>
            <button type = "submit" class = "submit-button">Submit</button>

        </form>
    </div>
  </div>
  <Footer />


<style>
  .contact {
    width: 360px;
    height: 1135px;
    background-color: #b2ac88;
    box-sizing: border-box;
  }
  .uno {
    font-family: "Lexend Terra", sans-serif;
    letter-spacing: 1.4em;
    font-size: 22px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    margin-top: 1px;
    
    color: #ffffff;
  }
  .dos {
    font-weight: 300;
    font-family: "inter";
    font-size: 16px;
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }
  .tres {
    font-weight: 300;
    font-family: "inter";
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .cuantro {
    font-weight: 500;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: "inter";

    color: #383838;
    margin-top: 15px;
  }
  .cinco {
    font-weight: 500;
    display: flex;
    font-size: 13px;
    font-family: "inter";
    margin-top: 30px;
    justify-content: center;
    flex-direction: column;
    margin-left: 80px;
  }
  .cincouno {
    display: flex;
    flex-direction: row;
  }
  .cincodos {
    color: black;
  }
  .cincotres {
    color: #ffffff;
  }
  .seis {
    margin-top: 20px;
    margin-left: 15px;
  }
  .form-container{
    color: black;
    font-family: "inter";
    letter-spacing: 0.2em;
    font-weight: 300;
    margin-top: 20px;
    font-size: 12px;
    margin-left: 15px;
  }
  .form-group1{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .form-group{
    margin-top: 7px;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 80%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  .submit-button{
    padding: 5px;
    border-radius: 4px;
    
  }
 
</style>
