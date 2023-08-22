import web from "../assets/SC Icons SVG/Web & Mobile Development.svg";
import mob from "../assets/SC Icons SVG/Mobile App Development.svg";
import UIUX from "../assets/SC Icons SVG/User Experience & Design.svg";
import dm from "../assets/SC Icons SVG/Digital Marketing.svg";
import cloud from "../assets/SC Icons SVG/Clouds Devops.svg";
import cs from "../assets/SC Icons SVG/cyber Security-01.svg";
import testimonial from "../assets/Images/testimonial-1.png";

import webWhite from "../assets/SC White Icons/Web App DevelopmentW.svg";
import mobWhite from "../assets/SC White Icons/Mobile App DevelopmentW.svg";
import UIUXWhite from "../assets/SC White Icons/UI UXW.svg";
import dmWhite from "../assets/SC White Icons/Digital MarketingW.svg";
import cloudWhite from "../assets/SC White Icons/Clouds(Devops)W.svg";
import csWhite from "../assets/SC White Icons/Cyber SecurityW.svg";

import se from "../assets/Services/servicesCatalog/Services 1.svg";
import t1 from "../assets/Services/servicesCatalog/Technologies 1.svg";
import so from "../assets/Services/servicesCatalog/Solution 1.svg";
import p from "../assets/Services/servicesCatalog/Platforms 1.svg";
import t2 from "../assets/Services/servicesCatalog/Team Expansion 1.svg";

import Dropdown from "../assets/icons/chevron-down1.svg";
import image1 from "../assets/Services/WhyChooseSC/image1.svg";
import image2 from "../assets/Services/WhyChooseSC/image2.svg";
import image3 from "../assets/Services/WhyChooseSC/image3.svg";
import image4 from "../assets/Services/WhyChooseSC/image4.svg";

import kia from "../assets/Images/ourClients/appointpal-01.svg";
import tesla from "../assets/Images/ourClients/FBO Schedule.svg";
import Amazon from "../assets/Images/ourClients/stable forecast-01.svg";
import cocaCola from "../assets/Images/ourClients/UPLIT-02.svg";
// import kia from "../assets/Images/Kia_Motors-Logo.wine 1.svg";
// import tesla from "../assets/Images/Tesla,_Inc.-Logo.wine 1.svg";
// import Amazon from "../assets/Images/Amazone.svg";
// import cocaCola from "../assets/Images/coca-cola-logo-svgrepo-com 1.svg";
import fb from "../assets/icons/fb.svg";
import twitter from "../assets/icons/twiter.svg";
import insta from "../assets/icons/insta.svg";
import skype from "../assets/icons/skype.svg";
import linkedin from "../assets/icons/linkedin.svg";
import Medium from "../assets/icons/medium-icon-svgrepo-com 1.svg";
export const socialMediaLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/syncclouds",
    icon: twitter,
    alt: "Twitter",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/syncclouds",
    icon: fb,
    alt: "Facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/syncclouds/",
    icon: insta,
    alt: "Instagram",
  },
  {
    name: "Skype",
    url: "https://join.skype.com/invite/x12P8vdREjqJ",
    icon: skype,
    alt: "Skype",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/syncclouds/mycompany/",
    icon: linkedin,
    alt: "LinkedIn",
  },
  {
    name: "Medium",
    url: "https://medium.com/@synccloudstechnologies",
    icon: Medium,
    alt: "Medium",
  },
];

export const clientLogos = [
  { id: 1, src: kia },
  { id: 2, src: tesla },
  { id: 3, src: Amazon },
  { id: 4, src: cocaCola },
  { id: 5, src: kia },
  { id: 6, src: tesla },
  { id: 7, src: Amazon },
  { id: 8, src: cocaCola },
];

export const TestimonialData = [
  {
    profileImage: testimonial,
    summary:
      "SyncClouds has an excellent team  and an elite professional. They are great at what they do and easy to communicate with. They were able to gather requirements and expectations and deliver effective solutions. I enjoyed working with them and would work with him again in the future when the opportunity presents itself.",
    name: " Adnan",
    rating: 5,
  },
  {
    profileImage: testimonial,
    summary:
      "The team was outstanding in every sense of the word. They have excellent communication skills, meet deadlines and expectations, and provide overall quality with their expertise. It was a great experience working with Azhar and his team. I believe it is a huge asset for any company to have him on their project. Can’t say enough good things other than the fact that we’re very happy that we had the opportunity to meet and work with them!",
    name: "Mohammad Shafique",
    rating: 5,
  },
  {
    profileImage: testimonial,
    summary:
      "Syncclouds listens and produces results exactly how you want things. Always fast and professional. We have used them twice now and are so happy with the results. The team is wonderful to work with.",
    name: "Rebecca Lora",
    rating: 5,
  },
  {
    profileImage: testimonial,
    summary:
      "Wouldn't hesitate to use Syncclouds again, everyone on their team was amazing, with exceptional quality provided!",
    name: "William Borgen",
    rating: 5,
  },
  {
    profileImage: testimonial,
    summary:
      "I highly recommend Syncclouds, and I cannot say that enough - I worked with him on a large Django project. The team went above and beyond to deliver the best possible result. Furthermore they made a complex project extremely simple with how he was able to break down each aspect of the project into simple, tangible parts. The quality of communication was the best I have received to this day when working on projects. The intricate details on the scope of work was thoughtfully strategized by Azhar and his team to ensure that no detail went without scrutiny in making the end product great. He is very easy to talk with, and certainly worth any investment, from a professional and friendly aspect. Thanks again Azhar!",
    name: "Ian Luhm , CEO@StableForecast",
    rating: 5,
  },
];

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
    id: 1,
    title: "Services",
    content:
      "Sync Clouds is equipped with the tools, technology, and domain knowledge necessary to produce various professional software development services. We assist our clients in creating and capturing value and enhancing company outcomes by eliminating the operational inefficiencies that impede growth.",
    img: se,
  },
  {
    id: 2,
    title: "Technologies",
    content:
      "We create adaptable, scalable software development solutions for our clients to help them become more creative and practical, which speeds up the description process.",
    img: t1,
  },
  {
    id: 3,
    title: "Solutions",
    content:
      "We are a software development services company offering a comprehensive range of engineering services to Fortune 1000 firms and international organizations, whether a consumer-focused app or a revolutionary enterprise-class solution.",
    img: so,
  },
  {
    id: 4,
    title: "Platforms",
    content:
      "Are you prepared to prevent dangers, quicken transformation, and ignite revenue growth? Put, go digital. We utilize the most recent tools, technologies, and platforms to accelerate our transformation initiatives and enhance your business outcomes.",
    img: p,
  },
  {
    id: 5,
    title: "Team Expansion",
    content:
      "Our culture values finding software developers with the appropriate knowledge and intense levels of commitment quickly. Team extension is an improved, contemporary iteration of the committed team strategy.",
    img: t2,
  },
];
