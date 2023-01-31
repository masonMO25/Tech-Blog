const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I didn't know about controllers.",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text: "Wow I am learning so much from this blog.",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text: "That is interesting.",
    post_id: 2,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
