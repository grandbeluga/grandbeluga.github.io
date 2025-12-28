function applyTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
applyTheme();

document.addEventListener("DOMContentLoaded", function () {
  const breadcrumb = document.getElementById("page-breadcrumb");
  if (breadcrumb) breadcrumb.textContent = document.title.replace("Ethan Bliese |","");

  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 1);
});

function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  document.body.style.overflow = menu.classList.contains("flex")
    ? "hidden"
    : "auto";
}
