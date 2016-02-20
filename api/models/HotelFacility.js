/**
 * HotelFacility.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    hotelName: {
      type: 'string',
      required: true
    },
    facility: {
      type: 'string',
      required: true
    },
    openingHours: {
      type: 'datetime',
      required: true
    },
    closingHours: {
      type: 'datetime',
      required: true
    }
  },
  validationMessages: {
    hotelName: {
      required: 'Hotel Name missing'
    },
    facility: {
      required: 'Please provide facility name'
    },
    openingHours: {
      required: 'Please specify the opening hours for the facility'
    },
    closingHours: {
      required: 'Please specify the closing hours for the facility'
    }
  }
};

