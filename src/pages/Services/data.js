import servicesShape1 from "../../assets/servicesShape1.svg";
import servicesShape2 from "../../assets/servicesShape2.svg";
import servicesShape3 from "../../assets/servicesShape3.svg";
import { BsLightning as standard, BsAlarm as seo } from "react-icons/bs";
import { BiCartAlt as cart } from "react-icons/bi";

export const pricing = [
  {
    title: "cheapest",
    image: servicesShape1,
    icon: standard,
    styleName: "icon",
    delay: 0,
    modalText:
      "This plan is a single page website that contains 5 sections howver more sections can be added at a fixed price. This basic plan acts as a directory for your business online",
    description:
      "Standard option includes single page website with 5 sections. Perfect for providing customer information about your business",
  },

  {
    title: "Recommended",
    icon: standard,
    image: servicesShape2,
    styleName: "icon",
    delay: 0.4,
    modalText:
      "Search Optimization plan allows customers to easily find you. A well-optimized website can help your business rank well for a variety of search terms and attract a steady stream of new customers.",
    description:
      "SEO option includes single page website with 5 sections and SEO which makes it easier for peope to find you.",
  },
  {
    title: "Best Value",
    icon: standard,
    image: servicesShape3,
    styleName: "icon",
    delay: 0.8,
    modalText:
      "This is the best plan for businesses that want to sell online. Website includes 12 pages however more can be added. Price for more pages will depend on specifications",
    description: `E-commerce option allows you to compete with big established brands and it makes it easeir to reach your target a niche.`,
  },
];
