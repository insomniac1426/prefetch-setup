const root = document.getElementById("root");

function updateUI(url) {
  if (url === "/") {
    root.innerHTML = `
            <h1>Home</h1>
            <p>This is the home page of this mock SPA</p>
        `;
  } else if (url === "/about") {
    /**
     * Adding script like this makes the browser to
     * re-download the script 🤔
     */
    const aboutScript = document.createElement("script");
    aboutScript.src = "/static/js/about.js";
    document.body.appendChild(aboutScript);

    root.innerHTML = `
            <h1>About</h1>
            <p>Let us get to know more "about" prefetch</p>
        `;
  }
}

function setupNavigation(loadPage) {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");

  const urlBtnMapping = {
    "/": homeLink,
    "/about": aboutLink,
  };

  function selectNavLink(targetLink) {
    links = document.getElementsByClassName("page-name");
    [].forEach.call(links, (link) => {
      if (link.classList.contains("selected"))
        link.classList.remove("selected");
    });
    targetLink.classList.add("selected");
  }

  function onLinkClick(url) {
    window.history.pushState({ url: url }, null, url);
    loadPage(url);
  }

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    selectNavLink(homeLink.parentElement);
    onLinkClick("/");
  });

  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    selectNavLink(aboutLink.parentElement);
    onLinkClick("/about");
  });

  window.onpopstate = (e) => {
    if (e && e.state && e.state.url) {
      loadPage(e.state.url);
    }
  };

  return urlBtnMapping;
}

const mapping = setupNavigation(updateUI);

mapping[window.location.pathname].click();
