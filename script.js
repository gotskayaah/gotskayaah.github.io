const loader = document.getElementById("loader");
const content = document.querySelector("main");

let loaded = false;

const slowLoading = setTimeout(() => {
  if (!loaded && loader) {
    loader.textContent = "Still loading...";
  }
}, 10000);

const fallback = setTimeout(() => {
  if (!loaded && content) {
    hideLoader();
  }
}, 15000);

window.addEventListener("load", () => {
  loaded = true;

  if (content) {
    hideLoader();
  }
});

function hideLoader() {
  loader.style.display = "none";
  content.style.visibility = "visible";

  clearTimeout(slowLoading);
  clearTimeout(fallback);
}