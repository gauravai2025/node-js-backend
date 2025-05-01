import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, // cloudinary
      required: [true, "videoFile is required"],
    },

    thumbnail: {
      // cloudinary
      type: String,
      required: [true, "thumbnail is required"],
    },

    title: {
      type: String,
      required: [true, "title is required"],
    },

    description: {
      type: String,
      required: [true, "description is required"],
    },

    duration: {
      type: Number, // extract from cloudinary url
      required: [true, "duration is required"],
    },

    views: {
      type: Number,
      default: 0,
    },

    isPublished:{
      type: Boolean,
       default:true
    },

    ownwer: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
    },

  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
