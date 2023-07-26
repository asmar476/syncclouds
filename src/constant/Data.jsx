import web from "../assets/SC Icons SVG/Web & Mobile Development.svg";
import mob from "../assets/SC Icons SVG/Mobile App Development.svg";
import UIUX from "../assets/SC Icons SVG/User Experience & Design.svg";
import dm from "../assets/SC Icons SVG/Digital Marketing.svg";
import cloud from "../assets/SC Icons SVG/Clouds Devops.svg";
import cs from "../assets/SC Icons SVG/cyber Security-01.svg";
import webWhite from "../assets/SC White Icons/Web App DevelopmentW.svg";
import mobWhite from "../assets/SC White Icons/Mobile App DevelopmentW.svg";
import UIUXWhite from "../assets/SC White Icons/UI UXW.svg";
import dmWhite from "../assets/SC White Icons/Digital MarketingW.svg";
import cloudWhite from "../assets/SC White Icons/Clouds(Devops)W.svg";
import csWhite from "../assets/SC White Icons/Cyber SecurityW.svg";
import img from "../assets/Services/catalogServices.svg";
import Dropdown from "../assets/icons/chevron-down1.svg";
import image1 from "../assets/Services/WhyChooseSC/image1.svg";
import image2 from "../assets/Services/WhyChooseSC/image2.svg";
import image3 from "../assets/Services/WhyChooseSC/image3.svg";
import image4 from "../assets/Services/WhyChooseSC/image4.svg";

export const features = [
  {
    image: image1,
    alt: "Industry Experts",
    text: "100+ Industry Experts",
  },
  {
    image: image2,
    alt: "Supportive Staff Augmentation",
    text: "Supportive Staff Augmentation",
  },
  {
    image: image3,
    alt: "5X Cost-Effective Solutions",
    text: "5X Cost-Effective Solutions",
  },
  {
    image: image4,
    alt: "Best Offers & Discounts",
    text: "Best Offers & Discounts",
  },
];

export const menuItems = [
  {
    label: "Services",
    link: "/services",
    subMenuIcon: Dropdown,
  },
  {
    label: "Portfolio",
    link: "/",
  },
  {
    label: "Technologies",
    link: "/",
  },
  {
    label: "Industry",
    link: "/",
  },
  {
    label: "Company",
    link: "/about",
    subMenuIcon: Dropdown,
  },
  {
    label: "Book my call",
    link: "/contact",
  },
];

export const offerData = [
  {
    id: "1",
    icon: web,
    iconWhite: webWhite,
    title: "Web App Development",
    description:
      "Secure and scalable website is the need of the hour in this digital era. So, take active steps today to get future-ready solutions with web app development services.",
  },
  {
    id: "2",
    iconWhite: mobWhite,
    icon: mob,
    title: "Mobile App Development",
    description:
      "Like a website, a mobile app is crucial to level up your business. Leverage your digital presence with a seamless user experience with our mobile application development services.",
  },
  {
    id: "3",
    iconWhite: UIUXWhite,
    icon: UIUX,
    title: "UX/UI Design",
    description:
      "Great design can speak to your users in thousands of ways that you can't. Get magnetic UX/UI design followed by a robust UX strategy to grab your user’s attention instantly.",
  },
  {
    id: "4",
    iconWhite: dmWhite,
    icon: dm,
    title: "Digital Marketing",
    description:
      "Build your online presence and enjoy market expansion at a fraction of the cost. Discover how to boost your revenue with strategic and result-driven digital marketing tidbits!",
  },
  {
    id: "5",
    iconWhite: cloudWhite,
    icon: cloud,
    title: "Clouds (DevOps)",
    description:
      "Leverage the Cloud DevOps solutions to get real-time monitoring and immediate feedback between developers and your operation team to handle complex conducts more smoothly.",
  },
  {
    id: "6",
    iconWhite: csWhite,
    icon: cs,
    title: "Cyber security",
    description: `No technology that's connected to the internet is invulnerable. So secure your personal or professional assets with our cyber security services and kick off the vulnerabilities immediately.`,
  },
];

export const servicesCatalog = [
  {
    title: "Services",
    content:
      "Sync Clouds is equipped with the tools, technology, and domain knowledge necessary to produce various professional software development services. We assist our clients in creating and capturing value and enhancing company outcomes by eliminating the operational inefficiencies that impede growth.",
    img: img,
  },
  {
    title: "Technologies",
    content:
      "We create adaptable, scalable software development solutions for our clients to help them become more creative and practical, which speeds up the description process.",
    img: img,
  },
  {
    title: "Solutions",
    content:
      "We are a software development services company offering a comprehensive range of engineering services to Fortune 1000 firms and international organizations, whether a consumer-focused app or a revolutionary enterprise-class solution.",
    img: img,
  },
  {
    title: "Platforms",
    content:
      "Are you prepared to prevent dangers, quicken transformation, and ignite revenue growth? Put, go digital. We utilize the most recent tools, technologies, and platforms to accelerate our transformation initiatives and enhance your business outcomes.",
    img: img,
  },
  {
    title: "Team Expansion",
    content:
      "Our culture values finding software developers with the appropriate knowledge and intense levels of commitment quickly. Team extension is an improved, contemporary iteration of the committed team strategy.",
    img: img,
  },
];
