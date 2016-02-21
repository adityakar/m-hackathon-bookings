/**
 * HotelAmenities.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    guestID: {
      type: 'string',
      required: true
    },
    amenity: {
      type: 'string',
      required: true
    }
  },

  validationMessages: {
    guestID: {
      required: 'Providing Guest ID is mandatory!'
    },
    amenity: {
      required: 'Amenity is mandatory.'
    }
  }
};

