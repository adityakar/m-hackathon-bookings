/**
 * RestaurantReservation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    restaurantName: {
      type: 'string',
      required: true
    },

    numOfGuests: {
      type: 'integer',
      required: true
    },

    guestID: {
      type: 'string',
      required: true
    },

    guestName: {
      type: 'string',
      required: true
    },

    reservationDate: {
      type: 'datetime',
      required: true
    }
  },
  validationMessages: {
    restaurantName: {
      required: 'Restaurant Name is required'
    },

    numOfGuests: {
      required: 'Please specify the number of guests'
    },

    guestID: {
      required: 'Please specify the Guest ID'
    },

    guestName: {
      required: 'Please mention the Guest Name'
    },

    reservationDate: {
      required: 'Please provide the reservation date'
    }
  }
};

