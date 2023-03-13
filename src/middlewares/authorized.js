import handleResponse from "../helpers/response.helpers.js";
import commentService from "../services/comment.service.js";

export const isCommenter = async (req, res, next) => {
  try {
    const user = req.user;
    const { id: commentId } = req.params;

    const comment = await commentService.findById(commentId);

    if (!comment) {
      return handleResponse(404, "comment not found", {}, res);
    }
    console.log(String(comment.user), String(user?._id));
    console.log(String(comment.user) !== String(user?._id));

    if (String(comment.user) !== String(user?._id)) {
      return handleResponse(400, "Access denied", {}, res);
    }

    next();
  } catch (error) {
    return next(error);
  }
};
