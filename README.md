# find-business-days-in-range [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Given two dates, return the business days between them.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
  - [Requirements](#requirements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S find-business-days-in-range
```


## Usage

```js
var findBusinessDaysInRange = require('find-business-days-in-range').calc

findBusinessDaysInRange(new Date(2015, 1, 1), new Date(2015, 1, 5), 'America/Los_Angeles')
// 3
```

## Methods
### calc `(<Date> start, <Date> end[, <String> timezone])`
Pass in a start and end date, and get back the count of business days in between. Optionally, you can pass in a timezone in Olson TZID format (e.g. `America/Los_Angeles`) to coerce the dates to that timezone. Otherwise, the calculation is done using the system time.

## Tests
Tests are [prova](https://github.com/azer/prova), based on [tape](https://github.com/substack/tape). They can be run with `npm test`.

Tests can be run in a loop with `npm run tdd`

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com)


[npm-url]: https://npmjs.org/package/find-business-days-in-range
[npm-image]: https://badge.fury.io/js/find-business-days-in-range.svg
[travis-url]: https://travis-ci.org/joeybaker/find-business-days-in-range
[travis-image]: https://travis-ci.org/joeybaker/find-business-days-in-range.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/find-business-days-in-range.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/find-business-days-in-range
