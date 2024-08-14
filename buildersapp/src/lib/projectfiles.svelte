<script>
    export let title = "Landscaping";
    export let description1 = "We blend nature and architecture to create stunning outdoor spaces that enhance curb appeal.";
    export let description2 = "Our designs aren’t just beautiful, they increase property value and create inviting environments that leave a lasting impression.Experience the magic of our landscaping and elevate your property’s allure.";
    export let src = "/landscaping1a.jpeg";
    export let src2 = "/landscapinglb.jpeg";
    export let backgroundcolor = "#f4f2f2";
</script>
<div class = "projectfiles" style = "--background-color:{backgroundcolor}">
    <div class = "files1"> {title}</div>
    <div class = "files2"><p>{description1}</p><p> {description2}</p></div>
    <div class = "files3"><img alt= "school" src = {src}/></div>
    <div class = "files4"> <img alt= "school" src = {src2}></div>


</div>


<style>
    .projectfiles{
        display: flex;
        width: 360px;
        height:760px;
        flex-direction: column;
        border: 2px;
        background-color:var(--background-color);
        
        
        

    }
    .files1{
        font-size: 24px;
        font-family: inter;
        justify-content: center;
        margin-left: 30px;
        margin-top: 20px;
        line-height: 23.17px;
        font-weight: 400;
        color: #2c2c2c;
        

    }
    .files2{
        font-size: 13px;
        font-family: inter;
        justify-content: center;
        margin-left: 30px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 20px;
        color: #2c2c2c;
        


    }
    .files3{
        width: 299px;
        height: 162px;
        margin-top: 30px;
        margin-left: 30px;

    }
    
    .files3 img{
        height: 100%;
        width:100%;
        
        object-fit: cover; 
    }
    .files4{
        margin-top: 30px;
        margin-left: 30px;
        width: 299px;
        height:162px;
        object-fit: cover;
        

    }
    .files4 img{
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
</style>