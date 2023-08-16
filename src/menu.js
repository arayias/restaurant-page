const items = [
  {
    name: "Oolong tea",
    price: 5.99,
    description: "A refreshing tea",
    isPopular: false,
  },
  {
    name: "Green Tea",
    price: 2.99,
    description: "The classic",
    isPopular: false,
  },
  {
    name: "Herbal Tea",
    price: 4.99,
    description: "Hand picked herbs",
    isPopular: false,
  },
  {
    name: "Matcha Tea",
    price: 1.99,
    description: "The antioxidant powerhouse",
    isPopular: true,
  },
];

const menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu-flex");
  items.forEach((item) => {
    const menuItem = createMenuItem(item);
    menu.appendChild(menuItem);
  });
  return menu;
};

const createMenuItem = ({ name, price, description, isPopular }) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  title.innerText = name;
  menuItem.appendChild(title);

  const itemPrice = document.createElement("p");
  itemPrice.innerText = `$${price}`;
  menuItem.appendChild(itemPrice);

  const itemDescription = document.createElement("p");
  itemDescription.innerText = description;
  menuItem.appendChild(itemDescription);

  isPopular ? menuItem.classList.add("popular") : null;

  return menuItem;
};

export { menu };
