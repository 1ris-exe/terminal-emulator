import request from "request";

module.exports = {
  /*
  ** This method returns a promise
  ** which gets resolved or rejected based
  ** on the result from the API
  */
  make_API_call : function(url, apiKey){
      return new Promise((resolve, reject) => {
          request(url, apiKey, { json: true }, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
          });
      })
  }
}