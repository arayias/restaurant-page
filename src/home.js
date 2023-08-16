import organic from "./organicsourcing.png";
import tea from "./teadip.jpg";

const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  const title = document.createElement("h1");
  title.textContent = "Welcome to the best tea house in the world!";
  home.appendChild(title);

  const homeGrid = document.createElement("div");
  homeGrid.classList.add("home-grid");
  const gridText = document.createElement("div");
  gridText.classList.add("grid-text");
  const gridImageTea = new Image();
  gridImageTea.classList.add("grid-image");
  gridImageTea.src = tea;
  gridImageTea.alt = "tea";
  const gridImageOrganic = new Image();
  gridImageOrganic.classList.add("grid-image");
  gridImageOrganic.src = organic;
  gridImageOrganic.alt = "organic sourcing of tea";
  gridText.textContent = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`;
  homeGrid.appendChild(gridText);
  homeGrid.appendChild(gridImageTea);
  homeGrid.appendChild(gridImageOrganic);
  homeGrid.appendChild(gridText.cloneNode(true));

  home.appendChild(homeGrid);
  return home;
};

export { home };
