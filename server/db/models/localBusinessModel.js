const { Collection } = require("../mongoose");
const mongoose = require("../mongoose");

const { Schema, model } = mongoose;

const localBusinessSchema = new Schema({
  placeUrl: { type: String, unique: true },
  title: String,
  rating: Number,
  reviewCount: Number,
  category: String,
  attributes: String,
  address: String,
  plusCode: String,
  website: String,
  phoneNumber: String,
  imgUrl: String,
  longitude: String,
  latitude: String,
  quadrant: String,
  licenseTypes: String,
  neighbourhood: String,
  jobStatus: String,
  jobCreated: String,
  headCategory: String
});

// const autoBusinesses = mongoose.model("auto", localBusinessSchema);
// const cafeBusinesses = mongoose.model("coffeshop", localBusinessSchema);
// const beautyBusinesses = mongoose.model("beauty", localBusinessSchema);
// const clothingBusinesses = mongoose.model("clothing", localBusinessSchema);
// const fastFoodBusinesses = mongoose.model("fastfood", localBusinessSchema);
// const groceriesBusinesses = mongoose.model("groceries", localBusinessSchema);
// const petsBusinesses = mongoose.model("pets", localBusinessSchema);
// const recreationBusinesses = mongoose.model("recreation", localBusinessSchema);
// const restaurantBusinesses = mongoose.model("restaurant", localBusinessSchema);
const localBusinesses = mongoose.model("business", localBusinessSchema);

const createLocalBusiness = async (data, name) => {
  const newLocalBusiness = await name.create(data);
// console.log('created new local business:', newLocalBusiness)
  return newLocalBusiness;
};

const findAllLocalBusiness = async (name) => {
  const findCategory = await name.find();
  return findCategory;
};


const filterData = async (data) => {
  data.filter(data.id
}
module.exports = {
  createLocalBusiness,
  findAllLocalBusiness,
  localBusinesses
};

