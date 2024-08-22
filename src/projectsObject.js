/*
SUMMARY
Name:
High level details:
Details link:
github link:
icon:
{id: , name: "", summary: "", detailsLink:"", githubLink:"", icon: }
*/
import groceryIcon from "./icons/easy-grocery-store-drawing.png";
import pinParkIcon from "./icons/pinthepark.png";
import joblyIcon from "./icons/iconJobly.png";

const projectsSummary = [
  {
    id: 1,
    name: "Pin the Park",
    type: "Capstone project, Full Stack App",
    stack: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "SQL",
      "Postresql",
      "REST",
      "Redux",
      "HTML",
      "CSS",
      "Material UI",
    ],
    summary: "Allows user to explore and plan the trips to visit US parks",
    details:
      "The landing page displays all US parks on the map. They can be filtered based on state, park type, and activity. The users can click on any park marker on the map to get more details about the park, save a note, mark the park as visited, or add a park to their planned route. They can create and view/delete/edit saved routes which can include any point on the map and/or US park.",
    githubLink: "https://github.com/ykays/Capstone-Two",
    icon: pinParkIcon,
    video: "XJHdq4Y0WwQ",
  },
  {
    id: 2,
    name: "Easy Grocery App",
    type: "Capstone project, Full Stack App",
    stack: [
      "Python",
      "Flask",
      "JavaScript",
      "SQLAlchemy",
      "Postresql",
      "REST",
      "Jinja",
      "WTForms",
      "HTML",
      "CSS",
    ],
    summary:
      "Makes grocery shopping more efficient by combining API-driven product information and past purchases with analytics and visualization",
    details:
      "The users can create a grocery list template which will be used for every grocery list creation. They can also create a reminder list with the products which can be added to the specific date grocery list. Finally, they can create a grocery list for a date, add additional products, edit/delete existing ones, mark them as 'checked' and update the total price of the groceries. The Analytics sections gives the user insights of the past purchases.",
    githubLink: "https://github.com/ykays/Capstone_Project_One",
    icon: groceryIcon,
    video: "chWS8L25Eiw",
  },

  {
    id: 3,
    name: "Job Board",
    type: "Springboard project - Full Stack App",
    stack: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "SQL",
      "Postresql",
      "REST",
      "HTML",
      "CSS",
    ],
    summary: "Allows user to explore companies and job offers",
    details:
      "The users can view the list of all of the companies and open positions. They can filter the companies, jobs and apply for a role.  ",
    githubLink: "https://github.com/ykays/React-Jobly",
    icon: joblyIcon,
    video: "nO0WTamnBl4",
  },
];
/*
DETAILS:
Description:
Step:
Picture:

*/

export { projectsSummary };
