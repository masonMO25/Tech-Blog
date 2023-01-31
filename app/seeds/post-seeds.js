const { Post } = require("../models");

const postData = [
  {
    title: "Model-View-Controller (MVC)",
    post_text:
      "MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the separation of concerns.",
    user_id: 1,
  },
  {
    title: "View layer",
    post_text:
      "We can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application.",
    user_id: 2,
  },
  {
    title: "Model",
    post_text:
      "The data layer of the application. It is concerned with the structure of the database and the logic used to retrieve that data. We'll implement Sequelize as the ORM for querying the database.",
    user_id: 2,
  },
  {
    title: "Controller",
    post_text:
      "The intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update, or delete data, and then returns the results of that query to the user via the View layer.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
