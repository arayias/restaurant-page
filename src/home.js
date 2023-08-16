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
  const gridImage = new Image();
  gridImage.classList.add("grid-image");
  gridImage.src = tea;
  gridText.textContent = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`;

  return home;
};

export { home };
