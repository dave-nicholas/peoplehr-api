'use strict';

const url = 'https://api.peoplehr.net';

let APIKey = '';
let fetch;

class PeopleHR {
  /**
   * Create an instance
   *
   * @param {string} apiKey - obtained from the peoplehr web admin
   * @param {(function|Object)} _fetch - optional use to override fetch
   */
  constructor(apiKey, _fetch = null) {
    if (apiKey && typeof apiKey === 'string') {
      APIKey = apiKey;
    } else if (process.env.hasOwnProperty('PEOPLEHR_API_KEY')) {
      APIKey = process.env.PEOPLEHR_API_KEY;
    } else if (process.env.hasOwnProperty('REACT_APP_PEOPLEHR_API_KEY')) {
      APIKey = process.env.REACT_APP_PEOPLEHR_API_KEY;
    } else {
      throw new Error('No apiKey set, see readme.');
    }

    fetch =
      _fetch && typeof _fetch === 'function' ? _fetch : require('node-fetch');
  }

  /**
   * Returns a Promise
   *
   * @param {string} endpoint
   * @param {string} action
   * @param {Object} params
   * @returns {Promise} JSON object
   */
  async query(endpoint, action, params = {}) {
    try {
      const response = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify({
          ...params,
          Action: action,
          APIKey
        })
      });
      const json = await response.json();
      return json;
    } catch (error) {
      return error;
    }
  }
}

module.exports = PeopleHR;
module.exports.default = module.exports;
