const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = " Темна тема";
    } else {
        themeBtn.textContent = " Світла тема";
    }
});
