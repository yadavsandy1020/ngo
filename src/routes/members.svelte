<script>
    const members =[{
        name: "Deeksha Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    {
        name: "Sandeep Yadav",
        designation:"developer",
        photo: "Welcome_bg.jpg"
    },
    ]
</script>

<style>
    .card-body{
        padding: 1rem 0rem !important;
    }
</style>

<div class="container">
    <div class="row justify-content-evenly">
        {#each members as {name, designation, photo} }
        <div class="card col-3 mb-4" style="width: 18rem;">
            <img src={photo} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <!-- <a href="/" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        {/each}
    </div>
</div>

