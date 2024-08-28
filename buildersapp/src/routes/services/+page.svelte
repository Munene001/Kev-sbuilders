<script>
    import Footer from '$lib/footer.svelte';
    import Projectfiles from '$lib/projectfiles.svelte';
    import Header from '$lib/header.svelte';
</script><html lang="en"></html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Terra&display=swap" rel="stylesheet">
    <title></title>
</head>

<Header/>
    <div class = "services">
        <div class = "heading">SERVICES</div>
        <div class = "heading3"><p>From floor plans, project management, furnishings 
            and everything in between, we offer our clients a 
            fully-integrated, all-inclusive design and building 
            experience that is unrivaled by any other</p></div>
    
    </div>
    
    <Projectfiles backgroundcolor= "#ffffff" title = "Gypsum Works" description1= "From smooth, flawless ceilings to intricate wall designs, our gypsum products are the transformative touch your building needs." description2= "Let our expertise in interior craft impress and help your building stand out.
    We don’t just build; we enhance spaces adding value and character to your surroundings." src = ./gypsum1.jpeg src2= ./gypsum2.jpeg/> 
    <Projectfiles  src = landscaping1a.jpeg src2= landscaping1b.jpeg/>
    <Projectfiles backgroundcolor= "#ffffff" title = "Construction(Plumbing,& Tiling)" description1 = "We build more than structures, we craft dreams. We transform blueprints to reality delivering exceptional buildings." description2= "From foundation to finish, our commitment to quality and innovation ensures your vision becomes a stunning reality. Choose us and experience topmost craftmanship without even having to dig that deep in your pockets." src = construction2.jpeg src2 = construction1.jpeg/>
    <Projectfiles  title = "Interior Design" description1 = "With creativity and expertise, we craft interiors that reflect your style and enhance functionality." description2= "From conceptualization to completion, we curate spaces that inspire, impress and elevate your buildings appeal. 
    Call us to help you turn your wildest dreams to reality" src = design1.jpeg src2 = design2.jpeg/>
    <Projectfiles backgroundcolor= "#ffffff" title = "Cabinetry & Millwork" description1 = "With meticulous craftmanship, we design and build custom pieces that blend seamlessly with any interior. " description2= "From sleek modern kitchens to classic libraries our work adds functionality and a touch of luxury to any building that is lucky enough to be made by our experts. 
    Contact us to experience the artistry of our craftmanship." src = cabinetry1.jpeg src2 = cabinetry2.jpeg/>
    
    <Footer/>



<style>
    .services{
        height: 286px;
        width: 360px;
        background-image: url('/services.jpeg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        
        
        
    }
    .heading{
        letter-spacing: 1.4em;
        font-size: 22px;
        font-family:'Lexend Terra', sans-serif;
        color: #ffffff;
        padding: 9px;
        margin-top: 1px;
        font-weight: 400;

    }
    
    
    .heading3{
        margin-top: 80px;
        margin-left: 10px;
        font-size: 13px;
        color: #ffffff;
    }
</style>
