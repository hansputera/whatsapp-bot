const request = require('superagent');

class API {
  constructor(url, query) {
    this.url = url;
    this.query = '';
    if (!query) this.query += '';
    let space_q = query.split('|');
    if (space_q.length > 1) space_q[0] = '?' + space_q[0];
    for (let i = 0; i < space_q.length; ++i) {
      space_q[i] = '&' + space_q[i];
    }
    this.query = space_q.join('');
  }
  
  async takeBody() {
    let result;
    // try-to-catch
    try {
      const { body } = await request.get(this.url + this.query === '' ? '/' : this.query);
      return result = body;
    } catch (e) {
      throw Error(e.stack);
    }
    return result; // return the result of the request processed.
  }
  
  async takeCode() {
    let result;
    // try-to-catch
    try {
      const prediction_property = await request.get(this.url + this.query === '' ? '/' : this.query);
      return result = prediction_property.status ? prediction_property.status : prediction_property.statusCode;
    } catch (e) {
      throw Error(e.stack);
    }
    
    return result; // return the result of the request processed.
  }
  
}

module.exports = API;
