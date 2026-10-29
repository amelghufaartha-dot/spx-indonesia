const CONFIG = {
  WA_NUMBER: "6285166661990",
  BRAND_NAME: "SPX Express",
  BASE_URL: "https://spx-indonesia.vercel.app",
  WA_DEFAULT_MESSAGE: "Halo saya butuh bantuan SPX Express",
  ONLINE_BASE: 1248
};

function waLink(message) {
  const msg = encodeURIComponent(message || CONFIG.WA_DEFAULT_MESSAGE);
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${msg}`;
}

window.CONFIG = CONFIG;
window.waLink = waLink;