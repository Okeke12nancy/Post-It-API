import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new mongoose.Schema(
  {
    //post that is being commented on
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Posts",
    },
    // body of the comments
    body: {
      type: String,
      default: "",
    },
    // files to be uploaded
    file: {
      id: {
        type: String,
        default: "",
      },
    },
    // users that commented
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },

    // to know whether comments has been deleted or not, default: false
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

commentSchema.set("toJSON", {
  versionKey: false,

  transform(doc, ret) {
    delete ret.__v;
  },
});

// userSchema.plugin(paginate);
// userSchema.plugin(aggregatePaginate);

const Comment = mongoose.model("Comments", commentSchema);

export default Comment;
