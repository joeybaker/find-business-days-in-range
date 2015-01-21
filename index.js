'use strict';

var oneDay = 1000 * 60 * 60 * 24
  , isBusinessDay = require('is-business-day').get
  , _ = {
    isDate: require('lodash.isdate')
  }

exports.calc = function findBusinessDatesInRange(start, end, tz){
  var startDate = _.isDate(start) ? start.valueOf() : start
    , endDate = _.isDate(end) ? end.valueOf() : (end || start)
    // ensure at least one day
    // add one millisecond to ensure that exact values don't cancel out a day
    , days = Math.ceil(((endDate + 1) - startDate) / oneDay) || 1
    , out = []
    , currentDay = startDate
    , date

  for (var i = 1; i <= days; i++){
    date = new Date(currentDay)
    if (isBusinessDay(date, tz)) out.push(date)
    currentDay += oneDay
  }

  return out
}
