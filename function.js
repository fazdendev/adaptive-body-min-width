function adaptiveSizePageScaleInit(startWidth = 320) {
  const page = document.documentElement;
  let clientWidth = page.clientWidth;
  let pageComputedWidth;
  let resizeCoef;
  let resizeCoefPercents;

  window.addEventListener("resize", scalePage);
  scalePage();

  function scalePage() {
    clientWidth = page.clientWidth;
    if (clientWidth <= startWidth) {
      pageComputedWidth = parseInt(getComputedStyle(page).width);
      resizeCoef = clientWidth / pageComputedWidth;
      resizeCoefPercents = 100 * resizeCoef;
      page.style.transformOrigin = `top left`;
      page.style.transform = `scale(${resizeCoef})`;
      page.style.width = `${resizeCoefPercents}%`;
      page.style.height = `${resizeCoefPercents}%`;
    } else {
      page.style.transform = ``;
      page.style.transformOrigin = ``;
      page.style.width = ``;
      page.style.height = ``;
    }
  }
}

function startOnSpecificBrowserInit() {
  let userAgent = window.navigator.userAgent.toLowerCase();
  let browser = "other";
  const browserNames = {
    safari: "safari",
    firefox: "firefox",
    trident: "ie",
    chrome: "chrome",
    opr: "opera",
    "edg/": "chrEdge",
    edge: "msEdge"
  };

  for (const browserId in browserNames) {
    if (userAgent.includes(browserId)) {
      browser = browserNames[browserId];
    }

    if (browser == 'opera' && !window.opr || browser == 'chrome' && !window.chrome) {
      browser = 'other'
    }
  }

  if (["safari", "firefox"].includes(browser)) {
    adaptiveSizePageScaleInit();
  }
}

startOnSpecificBrowserInit();