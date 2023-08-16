import "./style.css";
const landing = () => {
  const body = document.querySelector("body");
  const main = document.createElement("main");
  const header = document.createElement("header");
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  main.appendChild(content);
  header.appendChild(headerContent());

  body.appendChild(header);
  body.appendChild(main);
};

const headerContent = () => {
  const nav = document.createElement("nav");
  nav.classList.add("nav-grid");

  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");

  home.textContent = "Home";
  home.classList.add("nav-home", "nav-item", "active");

  menu.textContent = "Menu";
  menu.classList.add("nav-menu", "nav-item");

  contact.textContent = "Contact";
  contact.classList.add("nav-contact", "nav-item");

  const children = [home, menu, contact];
  children.forEach((child) => {
    nav.appendChild(child);
  });
  return nav;
};

export { landing };
