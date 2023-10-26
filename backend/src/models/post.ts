import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    userId :{
        type: Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    image:{
        type: String,
        required : true
    },
    video :{
        type : String,
        required: true
    },
    description :{
        type : String,
        maxlength : 100,
        required : true
    },
    likes:{
        type:[
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        default : []
    },
    saved: {
        type: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
        default: [],
      },
      deleted: {
        type: Boolean,
        default: false,
      },

})

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;