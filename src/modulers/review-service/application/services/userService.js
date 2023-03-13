const Listing = require('../models/listing');

async function getTotalPrice(listingId) {
  const result = await Listing.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(listingId)
      }
    },
    {
      $project: {
        totalPrice: {
          $sum: ['$price', '$cleaning_fee', '$service_fee', '$taxes']
        }
      }
    }
  ]);

  return result[0].totalPrice;
}
