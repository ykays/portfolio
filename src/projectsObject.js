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
    summary: "Allows users to explore and plan trips to US parks",
    details:
      "An app that will let you explore all the parks in the US and plan trips to see them all! One place where the parks visitors not only can view all the parks and their location on a map, but also explore parks by state, type, and activity (like hiking, biking, etc),  find out more about an individual park, save their personal notes about parks, and mark parks as visited so they can keep track of what else they still need to see. Once they start planning their next trip, they can add the parks to their trip and the map will display the best route to visit them all. They can later view, edit, delete, or export the route to Google Maps once they’re ready to take a trip.",
    githubLink: "https://github.com/ykays/Capstone-Two",
    icon: pinParkIcon,
    video: "XJHdq4Y0WwQ",
  },
  {
    id: 2,
    name: "Easy Grocery",
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
      "Do you usually buy the same things at your grocery store, but end up forgetting something anyway? This application allows you to create your own grocery shopping template which will be used to pre-populate a grocery list for a specific date. After you register in the app, you can search for any product in the internal Easy Grocery DB. Each product has an assigned category (which becomes helpful to find a specific store aisle/section while shopping). The Easy Grocery app also contains a 'Don't forget' section, where you can quickly add items you don't want to forget next time doing groceries. While creating a grocery list, you can add these products and/or any product you didn't have on either template or don't forget list! The template, grocery, and don't forget lists can be viewed/modified at any time. Finally, you can use the Easy Grocery list while shopping to keep track of the items you've already purchased. After the shopping is completed, you can input the total price of each grocery (under each grocery list) and then view several analytics charts to analyze your spending, number of items bought, etc.",
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
      "A place where a job seeker can explore the companies and their open positions. Once they find a perfect match, they can apply for a position and keep track of the jobs they've applied for.",
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
