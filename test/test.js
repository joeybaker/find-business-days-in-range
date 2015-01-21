'use strict';

var test = require('prova')
  , findBusinessDatesInRange = require('../').calc
  , tuesMorning = (new Date('Tue Apr 22 2014 9:00:00 GMT-0700 (PDT)')).valueOf()
  , thursMorning = (new Date('Thu Apr 24 2014 09:00:00 GMT-0700 (PDT)')).valueOf()
  , friNightGMT = (new Date('Fri Apr 25 2014 01:00:00 GMT')).valueOf()
  , satMorning = (new Date('Sat May 31 2014 07:46:12 GMT-0700 (PDT)')).valueOf()
  , nextMonMorning = (new Date('Mon Apr 28 2014 9:00:00 GMT-0700 (PDT)')).valueOf()

test('find-business-days-in-range#calc', function findBusinessDatesInRangeTest(t){
  t.plan(5)

  t.equal(
    findBusinessDatesInRange(tuesMorning).length
    , 1
    , 'returns just one date for only a start date'
  )

  t.equal(
    findBusinessDatesInRange(satMorning).length
    , 0
    , 'returns nothing only a weekend start date'
  )

  t.equal(
    findBusinessDatesInRange(tuesMorning, thursMorning).length
    , 3
    , 'returns the correct count for days in the same week'
  )

  t.equal(
    findBusinessDatesInRange(tuesMorning, nextMonMorning).length
    , 5
    , 'returns the correct count for days in different weeks'
  )

  t.equal(
    findBusinessDatesInRange(tuesMorning, friNightGMT, 'America/Los_Angeles').length
    , 3
    , 'returns the correct count for days in a timezone'
  )
})
