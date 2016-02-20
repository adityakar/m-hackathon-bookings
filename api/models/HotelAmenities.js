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
    pillow: {
      type: 'integer'
    },
    towels: {
      type: 'integer'
    },
    dentalKit: {
      type: 'integer'
    },
    shavingKit: {
      type: 'integer'
    }
  },
  
  validationMessages: {
    guestID: {
      required: 'Providing Guest ID is mandatory!'
    }
  }
};

