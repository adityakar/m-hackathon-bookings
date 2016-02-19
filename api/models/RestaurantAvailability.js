/**
 * RestaurantAvailability.js
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
    availableSeats: {
      type: 'integer',
      required: true
    }
  },
  validationMessages: {
    restaurantName: {
      required: 'Please provide the Restaurant name'
    },
    availableSeats: {
      required: 'Please provide the available seats in the restaurant'
    }
  }
};

