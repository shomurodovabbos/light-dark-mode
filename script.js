const toggleBtn = document.getElementById("toggleBtn");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
    html.dataset.theme = "dark";
}

toggleBtn.addEventListener("click", () => {
    if (html.dataset.theme === "dark") {
        delete html.dataset.theme;
        localStorage.removeItem("theme");
    } else {
        html.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
    }
});
