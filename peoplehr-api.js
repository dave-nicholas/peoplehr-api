'use strict';

const fetch = require('node-fetch');

const url = 'https://api.peoplehr.net';

let userApiKey = '';

class PeopleHR {
  /**
   * Create an instance
   *
   * @param {string} apiKey apikey obtained from the peoplehr web admin
   */
  constructor(apiKey) {
    if (apiKey && typeof apiKey === 'string') {
      userApiKey = apiKey;
    } else if (process.env.hasOwnProperty('PEOPLEHR_API_KEY')) {
      userApiKey = process.env.PEOPLEHR_API_KEY;
    } else if (process.env.hasOwnProperty('REACT_APP_PEOPLEHR_API_KEY')) {
      userApiKey = process.env.REACT_APP_PEOPLEHR_API_KEY;
    } else {
      throw new Error('No apiKey set, see readme.');
    }
  }

  /**
   * Returns a JSON response
   *
   * @param {string} endpoint
   * @param {string} action
   * @param {Object} params
   */
  get(endpoint, action, params) {}

  /**
   * Returns a
   *
   * @param {string} endpoint
   * @param {string} action
   * @param {Object} payload
   */
  post(endpoint, action, payload) {}
}

module.exports = PeopleHR;
module.exports.default = module.exports;
