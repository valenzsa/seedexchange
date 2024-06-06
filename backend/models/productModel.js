import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    additionalInformation: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewsSchema],
    numberOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfSeedsPerPack: {
      type: Number,
      required: true,
      default: 0,
    },
    seedCount: {
      type: Number,
      required: true,
      default: 0,
    },
    typeOfPlant: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
