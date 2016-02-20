/**
 * HotelCheckout.js
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

    guestName: {
      type: 'string',
      required: true
    },

    checkoutDate: {
      type: 'datetime',
      required: true
    }
  },
  
  validationMessages: {
    guestID: {
      required: 'Guest ID is not present'
    },

    guestName: {
      required: 'Please provide the guest name'
    },

    checkoutDate: {
      required: 'Please specify your checkout date'
    }
  }
};

