import page from "../assets/servicesSoftwareStepsIcons/Vector.svg";
import idea from "../assets/servicesSoftwareStepsIcons/planning.svg";
import design from "../assets/servicesSoftwareStepsIcons/Design.svg";
import development from "../assets/servicesSoftwareStepsIcons/Deployment.svg";
import testing from "../assets/servicesSoftwareStepsIcons/Testing 2.svg";
import deployment from "../assets/servicesSoftwareStepsIcons/Deployment.svg";
import maintenance from "../assets/servicesSoftwareStepsIcons/Maintenance.svg";
import update from "../assets/servicesSoftwareStepsIcons/Update & improvement 2.svg";

import pageWhite from "../assets/services software icon White/Vector.svg";
import ideaWhite from "../assets/services software icon White/planning.svg";
import designWhite from "../assets/services software icon White/Design.svg";
import developmentWhite from "../assets/services software icon White/Deployment.svg";
import testingWhite from "../assets/services software icon White/Testing.svg";
import deploymentWhite from "../assets/services software icon White/Deployment.svg";
import maintenanceWhite from "../assets/services software icon White/Maintenance.svg";
import updateWhite from "../assets/services software icon White/Update & improvement.svg";

export const servicesSoftwareSteps = [
  {
    id: 1,
    title: "Requirements Gathering",
    icon: page,
    whiteIcon: pageWhite,
    description:
      "The team collects and documents all necessary information about the project's features, functionalities, and user experience in this step.",
  },
  {
    id: 2,
    title: "Planning",
    icon: idea,
    whiteIcon: ideaWhite,
    description:
      "This step involves defining project goals and objectives, analyzing requirements, and creating a roadmap to guide development.",
  },
  {
    id: 3,
    title: "Design",
    icon: design,
    whiteIcon: designWhite,
    description:
      "THere, the team visually represents the software, including wireframes, mockups, and prototypes.",
  },
  {
    id: 4,
    title: "Development",
    icon: development,
    whiteIcon: developmentWhite,
    description:
      "This step involves writing code and developing software applications based on the design specifications.",
  },
  {
    id: 5,
    title: "Testing",
    icon: testing,
    whiteIcon: testingWhite,
    description:
      "The software is thoroughly tested to ensure it is free of bugs, errors, and glitches.",
  },
  {
    id: 6,
    title: "Deployment",
    icon: deployment,
    whiteIcon: deploymentWhite,
    description:
      "In this step, the software is released into production and made available to users.",
  },
  {
    id: 7,
    title: "Maintenance",
    icon: maintenance,
    whiteIcon: maintenanceWhite,
    description:
      "After deployment, the team provides ongoing support and maintenance to ensure that the software functions properly and meets the user's needs.",
  },
  {
    id: 8,
    title: "Updates and Improvements",
    icon: update,
    whiteIcon: updateWhite,
    description:
      "Finally, the software is updated and improved to add new features, functionalities, and enhancements based on user feedback and evolving business needs.",
  },
];
