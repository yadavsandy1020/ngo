<nav class="navbar navbar-expand-lg navbar-light bg-custom-2 ">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <a class="navbar-brand" href="/">
      <img src="/ngo-logo.png" alt="Logo" />
    </a>
    <div class="d-flex flex-column justify-content-between align-items-end">
      <div class="pb-3 d-flex justify-content-between">
        <span style="color: #00acee;">
          <a
            href="https://www.facebook.com/Royalkrishnagroup24/"
            target="_blank"><i class="fa-brands fa-twitter fa-beat" /></a
          >
        </span>
        <span style="color: #4267B2;">
          <i class="fa-brands fa-facebook fa-beat" />
        </span>
        <span style="color: #8a3ab9;">
          <a
            href="https://www.instagram.com/royalkrishnagroup24/"
            target="_blank"><i class="fa-brands fa-instagram fa-beat" /></a
          >
        </span>
        <span style="color: #FF0000;">
          <a
            href="https://www.youtube.com/channel/UCaan_z4_PPLBxVGNRzeVVng"
            target="_blank"><i class="fab fa-youtube fa-beat" /></a
          >
        </span>
      </div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/members">Members</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/news">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<slot />

<style>
  nav {
    margin-bottom: 20px;
  }
  i {
    padding: 10px;
    cursor: pointer;
  }
  a {
    color: unset;
  }
  .bg-custom-2 {
    background-image: white;
  }
</style>
