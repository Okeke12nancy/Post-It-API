import express from "express";
const userOnlyRouter = express.Router();
import { isAuthorized } from "../middlewares/authorize.middleware.js";
import userOnlyController from "../controllers/usersOnlycontrollers.js";

// Check this
userOnlyRouter.get("/users/:id/posts", userOnlyController.findUserPostsById);
userOnlyRouter.get(
  "/users/:userId/posts/:postId",
  userOnlyController.findOneUserPostById
);

userOnlyRouter.get(
  "/users/:userId/comments/:commentId/posts/:postId",
  userOnlyController.findOneUserComments
);

userOnlyRouter.get(
  "/users/:userId/posts/:postId/comments",
  userOnlyController.findUserCommentById
);

userOnlyRouter.get(
  "/users/@:userName",
  userOnlyController.findUserByUserByUsername
);

userOnlyRouter.get(
  "/users/posts/@:userName",
  userOnlyController.findPostsByUserByUsername
);

export default userOnlyRouter;
