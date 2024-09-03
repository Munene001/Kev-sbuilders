<script>
    import Icon from "@iconify/svelte";
    import lo from "$lib/assets/01.svg";
    import badge from "$lib/assets/02.svg";
  </script>
  
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Terra&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;700&display=swap" rel="stylesheet">
    
  </head>
    <div class="footer">
      <div class="footer1">KEV'S INTERIORS <br /> & BUILDERS</div>
      <div class="footer2">Engineer Town|kinangop</div>
      <div class="footer3">
        We build more than structures; we create spaces that enhance lives. Our
        commitment lies in delivering exceptional projects that not only meet but
        exceed our clients’ expectations, enriching their everyday experiences.
      </div>
      <div class="footer4"><Icon icon="ic:outline-facebook" /></div>
      <div class="footer5">
        <div class="footer51"><a href="/">Home</a></div>
        <div class="footer51"><a href="/services">Services</a></div>
        <div class="footer51"><a href="/about">About</a></div>
        <div class="footer51"><a href="/contact">Contact</a></div>
        <div class="footer51"><a href="/projects">Projects</a></div>
        <div class="footer51"><a href="/admin">Admin</a></div>
      </div>
      <div class="footer6">
        <div class = "footer61"><img alt="badge" src={lo} /></div>
        <div class = "footer62"><img alt="badge" src={badge} /></div>
      </div>
      <div class="footer7">
        <Icon icon="tabler:copyright" />Kev's interiors and builders<br />
        kevokiach20@gmail.com|07360560|0720441236
      </div>
    </div>
    
  
  </html>
 
  
  <style>
    .footer {
      background-color: #d9d9d9;
      height: 534px;
      width: 100%;
      max-width:100vw;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      
    }
    .footer1 {
      font-size: 30px;
      font-family: 'David Libre', serif;
      margin-top: 20px;
      margin-left: 20px;
      color: #000000;
      font-weight: 400px;
      line-height: 23.17px;
    }
    .footer2 {
      font-size: 12px;
      font-family: 'inter';
      font-weight: 300;
      margin-top: 3px;
      margin-left: 20px;
      color: #717171;
      line-height: 20px;
    }
    .footer3 {
      margin-left: 20px;
      margin-top: 10px;
      font-family: 'inter';
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      font-weight: 300;
      color: #2c2c2c;
    }
    .footer4 {
      margin-left: 20px;
      margin-top: 10px;
      font-size: 39px;
    }
    .footer5 {
      font-family: 'inter';
      font-size: 12px;
      margin-left: 20px;
      color: #2c2c2c;
      display: flex;
      flex-direction: column;
    }
    .footer51 {
      margin-top: 5px;
      color: rgb(168, 71, 2);
      font-size: 12px;
    }
    .footer6 {
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    
    .footer7 {
      font-size: 12px;
      color: #2c2c2c;
      display: flex;
      justify-content: center;
      margin-top: 7px;
      text-indent: 20px;
      font-family: 'inter';
      font-weight: 300;
    }
    
  </style>
  