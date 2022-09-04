function adaptiveSizePageScaleInit(startWidth = 320) {
  const page = document.documentElement;
  let clientWidth = document.documentElement.clientWidth;
  let pageComputedWidth;
  let resizeCoef;
  let resizeCoefPercents;
  if (clientWidth <= startWidth) {
    pageComputedWidth = parseInt(getComputedStyle(page).width);
    resizeCoef = clientWidth / pageComputedWidth;
    resizeCoefPercents = 100 * resizeCoef;
    page.style.transform = `scale(${resizeCoef})`;
    page.style.transformOrigin = `top left`;
    page.style.width = `${resizeCoefPercents}%`;
    page.style.height = `${resizeCoefPercents}%`;
  } else {
    page.style.transform = ``;
    page.style.transformOrigin = ``;
    page.style.width = ``;
    page.style.height = ``;
  }
  window.addEventListener("resize", scalePage);
  function scalePage(e) {
    clientWidth = document.documentElement.clientWidth;
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
  let browser;
  switch (true) {
    case userAgent.indexOf("edge") > -1:
      browser = "msEdge";
      break;
    case userAgent.indexOf("edg/") > -1:
      browser = "chrEdge";
      break;
    case userAgent.indexOf("opr") > -1 && !!window.opr:
      browser = "opera";
      break;
    case userAgent.indexOf("chrome") > -1 && !!window.chrome:
      browser = "сhrome";
      break;
    case userAgent.indexOf("trident") > -1:
      browser = "ie";
      break;
    case userAgent.indexOf("firefox") > -1:
      browser = "firefox";
      break;
    case userAgent.indexOf("safari") > -1:
      browser = "safari";
      break;
    default:
      browser = "other";
  }
  if (browser == "safari" || browser == "firefox") {
    adaptiveSizePageScaleInit();
  }
}
startOnSpecificBrowserInit();
