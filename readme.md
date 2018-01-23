[![Build Status](https://travis-ci.org/dave-nicholas/peoplehr-api.svg?branch=master)](https://travis-ci.org/dave-nicholas/peoplehr-api)

# peoplehr-api

A small library for use with the peoplehr api.

## Installation

```
yarn add peoplehr-api 
```

or

```
npm install peoplehr-api
```

## Usage

You can pass in the api key in the constructor.

```javascript
const PeopleHRAPI = require('peoplehr-api');
//or ES6
import PeopleHRAPI from 'peoplehr-api';

const phr = new PeopleHRAPI('api key.....'); //or configure set process.env

phr.query(
  'Employee', //The endpoint to query 
  'GetAllEmployeeDetail', //The method to call
  { IncludeLeavers: false } //The payload
  )
  .then(jsonResponse => console.log(jsonResponse));
```

A list of the availabel endpoints can be found at [here](http://apidocs.peoplehr.com/).

## Configuration

You can also use the following environmet variables to set the api key

```
process.env.PEOPLEHR_API_KEY = 'api key ...';
```

or if you use [create-react-app](https://github.com/facebookincubator/create-react-app) you can create a `.env` file in your directory and add the following line.

```
REACT_APP_PEOPLEHR_API_KEY=your_api_key
```