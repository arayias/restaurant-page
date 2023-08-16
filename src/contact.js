import Jim from "./jim.jpg";
import John from "./john.jpg";
import Dwight from "./dwight.jpg";

const contacts = [
  {
    name: "John",
    role: "Tea manager",
    email: "test@aol.com",
    picture: John,
  },
  {
    name: "Dwight",
    role: "Assistant to the Assistant to the Regional Manager",
    email: "test@aol.com",
    picture: Dwight,
  },
  {
    name: "Jim",
    role: "Salesman",
    email: "test@aol.com",
    picture: Jim,
  },
];

const contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  contacts.forEach((contact) => {
    const contactElement = createContactElement(contact);
    contactContainer.appendChild(contactElement);
  });

  return contactContainer;
};

const createContactElement = (contact) => {
  const contactElement = document.createElement("div");
  contactElement.classList.add("contact");

  const contactPicture = new Image();
  contactPicture.classList.add("contact-picture");
  contactPicture.src = contact.picture;
  contactElement.appendChild(contactPicture);

  const contactName = document.createElement("h2");
  contactName.classList.add("contact-name");
  contactName.textContent = contact.name;
  contactElement.appendChild(contactName);

  const contactRole = document.createElement("h3");
  contactRole.classList.add("contact-role");
  contactRole.textContent = contact.role;
  contactElement.appendChild(contactRole);

  const contactEmail = document.createElement("a");
  contactEmail.classList.add("contact-email");
  contactEmail.textContent = contact.email;
  contactEmail.href = `mailto:${contact.email}`;
  contactElement.appendChild(contactEmail);

  return contactElement;
};

export { contact };
