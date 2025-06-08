const THEME_KEY = "color-theme";
const toggleButton = document.querySelector("#dark-mode-toggle");
const toggleButtonFooter = document.querySelector("#dark-mode-toggle-footer");
const docEl = document.documentElement;

toggleButton.addEventListener("click", function () {
  if (localStorage.getItem(THEME_KEY)) {
    if (localStorage.getItem(THEME_KEY) === "light") {
      docEl.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      docEl.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }

    // if NOT set via local storage previously
  } else {
    if (docEl.classList.contains("dark")) {
      docEl.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      docEl.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    }
  }
  
});

toggleButtonFooter.addEventListener("click", function () {
  if (localStorage.getItem(THEME_KEY)) {
    if (localStorage.getItem(THEME_KEY) === "light") {
      docEl.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      docEl.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }

    // if NOT set via local storage previously
  } else {
    if (docEl.classList.contains("dark")) {
      docEl.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      docEl.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    }
  }
});
