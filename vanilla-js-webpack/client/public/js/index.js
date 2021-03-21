import "../css/index.css";

const root = document.getElementById("root");

async function router(url) {
  if (url === "/") {
    const { default: Home } = await import(
      /* webpackChunkName: "home" */
      /* webpackPrefetch: true */
      "./home"
    );
    Home(root);
  } else if (url === "/about") {
    const { default: About } = await import(
      /* webpackChunkName: "about" */
      /* webpackPrefetch: true */
      "./about"
    );
    About(root);
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
    const links = document.getElementsByClassName("page-name");
    [].forEach.call(links, (link) => {
      if (link.classList.contains("selected"))
        link.classList.remove("selected");
    });
    targetLink.classList.add("selected");
  }

  async function onLinkClick(url) {
    window.history.pushState({ url: url }, null, url);
    await loadPage(url);
  }

  homeLink.addEventListener("click", async (e) => {
    e.preventDefault();
    selectNavLink(homeLink.parentElement);
    await onLinkClick("/");
  });

  aboutLink.addEventListener("click", async (e) => {
    e.preventDefault();
    selectNavLink(aboutLink.parentElement);
    await onLinkClick("/about");
  });

  window.onpopstate = async (e) => {
    if (e && e.state && e.state.url) {
      await loadPage(e.state.url);
    }
  };

  return urlBtnMapping;
}

const mapping = setupNavigation(router);

mapping[window.location.pathname].click();
