import pizza_americana from "./fake-images/americana.svg";
import pizza_bbq_chicken from "./fake-images/bbq_chicken.svg";
import pizza_campesina from "./fake-images/campesina.svg";
import pizza_mechada_bbq from "./fake-images/mechada_bbq.svg";
import pizza_chicken_tomato from "./fake-images/chicken_tomato.svg";
import pizza_solo_queso from "./fake-images/solo_queso.svg";
import pizza_pepperoni from "./fake-images/pepperoni.svg";
import pizza_tomate_queso from "./fake-images/tomate_queso.svg";
import pizza_vegan_queen from "./fake-images/vegan_queen.svg";
import pizza_hawaiana from "./fake-images/hawaiana.svg";
import pizza_jamon_supreme from "./fake-images/jamon_supreme.svg";
import pizza_tomate_pimenton from "./fake-images/tomate_pimenton.svg";

import cocacola from "./fake-images/cocacola.svg";
import pepsi from "./fake-images/pepsi.svg";
import jugo from "./fake-images/jugo.svg";
import agua from "./fake-images/agua.svg";
import sprite from "./fake-images/sprite.svg";

import salsa_bbq from "./fake-images/salsa_bbq.svg";
import salsa_picante from "./fake-images/salsa_picante.svg";
import salsa_tomate from "./fake-images/salsa_tomate.svg";
import salsa_garlic from "./fake-images/salsa_garlic.svg";

const products = [
  {
    id: 1,
    name: "Americana",
    price: 10000,
    image: pizza_americana,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 2,
    name: "Hawaiana",
    price: 12000,
    image: pizza_hawaiana,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 3,
    name: "Mechada BBQ",
    price: 15000,
    image: pizza_mechada_bbq,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 4,
    name: "Vegan Queen",
    price: 10000,
    image: pizza_vegan_queen,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 5,
    name: "Tomate y Queso",
    price: 12000,
    image: pizza_tomate_queso,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 6,
    name: "BBQ Chicken",
    price: 15000,
    image: pizza_bbq_chicken,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 7,
    name: "Campesina",
    price: 10000,
    image: pizza_campesina,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 8,
    name: "Tomate y Pimentón",
    price: 12500,
    image: pizza_tomate_pimenton,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 9,
    name: "Solo Queso",
    price: 15000,
    image: pizza_solo_queso,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 10,
    name: "Peperroni",
    price: 10990,
    image: pizza_pepperoni,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 11,
    name: "Pollo y Tomate",
    price: 12990,
    image: pizza_chicken_tomato,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 12,
    name: "Jamón Supreme",
    price: 15990,
    image: pizza_jamon_supreme,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "pizzas",
  },
  {
    id: 13,
    name: "Coca Cola",
    price: 2000,
    image: cocacola,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "bebestibles",
  },
  {
    id: 14,
    name: "Pepsi",
    price: 2000,
    image: pepsi,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "bebestibles",
  },
  {
    id: 15,
    name: "Sprite",
    price: 2000,
    image: sprite,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "bebestibles",
  },
  {
    id: 16,
    name: "Jugo",
    price: 2000,
    image: jugo,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "bebestibles",
  },
  {
    id: 17,
    name: "Agua",
    price: 2000,
    image: agua,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "bebestibles",
  },
  {
    id: 18,
    name: "Salsa Garlic",
    price: 1000,
    image: salsa_garlic,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "salsas",
  },
  {
    id: 19,
    name: "Salsa de Tomate",
    price: 1000,
    image: salsa_tomate,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "salsas",
  },
  {
    id: 20,
    name: "Salsa BBQ",
    price: 1000,
    image: salsa_bbq,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "salsas",
  },
  {
    id: 21,
    name: "Salsa Picante",
    price: 1000,
    image: salsa_picante,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
    category: "salsas",
  },
];

export default products;
