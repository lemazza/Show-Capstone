'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



/*=================================================
  SHOWS
==================================================*/

const showSchema = mongoose.Schema({
  creator: Objectid,
  canEdit: Objectid,
  showName: {type: String, required: true},
  showType: String,
  description: String,
  date: {type: Date, required: true},
  time: {type: String, required: true},
  venue: {type: Objectid, required: true},
  performers: [{type: Objectid, required: true}],
  website: {type: String, required: true},
  photo: String,
  priceRange: {
    lowPrice: Number,
    highPrice: Number
  },
  ticketAvailability: String
});

showSchema.methods.serialize = function() {
  return {
    id: this._id,
    showName: this.showName,
    showType: this.showType,
    description: this.description
    date: this.date,
    time: this.time,
    venue: this.venue,
    perfomers: this.performers,
    website: this.website,
    photo: this.photo
    priceRange: this.priceRange,
    ticketAvailability: this.ticketAvailability
  };
};



/*=================================================
  VENUES
==================================================*/

const venueSchema = mongoose.Schema({
  creator: Objectid,
  canEdit: Objectid,
  venueName: {type: String, required: true},
  location: {
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true}
  }
  website: String,
  photo: String
  alcohol: Boolean,
  ageMin: Number,
});

venueSchema.methods.serialize = function() {
  return {
    id: this._id,
    venueName: this.venueName,
    location: this.location,
    website: this.website,
    photo: this.photo,
    photo: this.ticketAvailability,
    alcohol: this.alcohol,
    ageMin: this.ageMin
  };
};



/*=================================================
  USERS
==================================================*/

const userSchema = mongoose.Schema({
  userType: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  userName: {type: String, required: true},
  name: {
    firstName: String,
    lastName: String
  }
  description: String,
  twitter: {type: String, required: true},
  website: {type: String, required: true},
  photo: String,
});

userSchema.methods.serialize = function() {
  return {
    id: this._id,
    userType: this.userType,
    userName: this.userName
    name: this.name,
    description: this.description,
    twitter: this.twitter,
    website: this.website,
    photo: this.photo
  };
};



/*=================================================
  EXPORTS
==================================================*/

const Show = mongoose.model('Show', showSchema);
const Venue = mongoose.model('Venue', venueSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Show, Venue, User};
