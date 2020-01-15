'use strict'
class UmblerResponse{

    /**
     * 
     * @param {Boolean} success 
     * @param {String} message 
     * @param {Object} data 
     */
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

module.exports = UmblerResponse;