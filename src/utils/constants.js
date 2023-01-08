import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "To bring you great foot ware at an exceptional price",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To be your one stop shoe shop",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Sneaker heads coming together from the ground up",
  },
];

export const products_url = "/.netlify/functions/products";
export const single_product_url = `/.netlify/functions/single-product?id=`;
