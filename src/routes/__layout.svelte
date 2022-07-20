<nav
  class="navbar navbar-expand-lg navbar-light"
  style="background-color: white;"
>
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
      <div class="pb-5">Hello</div>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>

<slot />

<style>
  nav {
    margin-bottom: 20px;
  }
</style>
