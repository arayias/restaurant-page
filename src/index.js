import { landing } from "./landing";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

import "./style.css";

const states = {
  currentTab: "home",
};

const activateTab = (tab) => {
  const tabs = document.querySelectorAll(".nav-item");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tab.classList.add("active");
};

landing();

const content = document.querySelector("#content");

// the 1st time the page loads, the home tab is selected
content.appendChild(home());

const nav = document.querySelector("nav");
const mainBtn = document.querySelector(".nav-home");
const menuBtn = document.querySelector(".nav-menu");
const contactBtn = document.querySelector(".nav-contact");

activateTab(mainBtn);

mainBtn.addEventListener("click", () => {
  states.currentTab = "home";
  content.innerHTML = "";
  content.appendChild(home());
  activateTab(mainBtn);
});

menuBtn.addEventListener("click", () => {
  states.currentTab = "menu";
  content.innerHTML = "";
  content.appendChild(menu());
  activateTab(menuBtn);
});

contactBtn.addEventListener("click", () => {
  states.currentTab = "contact";
  content.innerHTML = "";
  content.appendChild(contact());
  activateTab(contactBtn);
});
