// Adiciona a classe "active" no item do menu que foi clicado
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// Adiciona um botão de menu para dispositivos móveis
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.createElement("button");
menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "<span></span><span></span><span></span>";
header.appendChild(menuBtn);

// Exibe/oculta o menu quando o botão de menu é clicado
menuBtn.addEventListener("click", function() {
  nav.classList.toggle("show");
});

// Fecha o menu quando um link é clicado
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.remove("show");
  });
});