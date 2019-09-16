// function expression to select elements

const selectElement = s => document.querySelector(s);

//open the meny when clicked

selectElement(".open").addEventListener("click", () => {
  selectElement("nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
  selectElement("nav-list").classList.remove("active");
});
