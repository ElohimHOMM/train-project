function includeNavbar() {
  $("#navbar-container").html(`<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html">AOC JS Project</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  2015
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/2015/day01.html">Day 01</a></li>
                  <li><a class="dropdown-item" href="/2015/day02.html">Day 02</a></li>
                  <li><a class="dropdown-item" href="/2015/day03.html">Day 03</a></li>
                  <li><a class="dropdown-item" href="/2015/day04.html">Day 04</a></li>
                  <li><a class="dropdown-item" href="/2015/day05.html">Day 05</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Day 11</a></li>                  
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Unrelated
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/unrelated/mox.html">Mox' Hobby Page</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
    </nav>`);
}