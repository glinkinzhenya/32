// Є текстове поле на сторінці.Під час фокусування на цьому полі збоку з'являється <div>.
//  При пропажі фокусу - <div> так само пропадає

const id = document.getElementById("focus");
const div = document.querySelector("div");

id.onmouseenter = () => div.classList.add("div");
id.onmouseleave = () => div.classList.remove("div");