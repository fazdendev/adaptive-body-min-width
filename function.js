function adaptiveSizePageScaleInit(definedStartWidth) {
  const page = document.documentElement;
  let clientWidth = page.clientWidth;
  let pageComputedWidth;
  let resizeCoef;
  let resizeCoefPercents;
  let startWidth = definedStartWidth;
  if (!(startWidth / 1)) {
    let bodyMinWidthStr = getComputedStyle(document.body).minWidth;
    let bodyMinWidthNumber = Number(bodyMinWidthStr.replace(/[^0-9]/g, ""));
    startWidth = bodyMinWidthNumber;
  }
  function scalePage(startWidth) {
    clientWidth = page.clientWidth;
    if (startWidth / 1 && clientWidth <= startWidth) {
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
  window.addEventListener("resize", function () {
    scalePage(startWidth);
  });
  scalePage(startWidth);
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
