'use strict'
const axios = require('axios').default
const UmblerResponse = require('./UmblerResponse')
/**
 * 
 */
class Umbler{

    constructor(token){
        this.headers ={'Authorization':`Basic ${this.token}` }
    }

    /**
     * Create a Domain Registration
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
    async createDomain(data){
        return await axios.post('https://api.umbler.com/v1/websites',data,{ headers: this.headers })
        .then(function(response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function(error){
            return new UmblerResponse(false,'FAIL', error);
        });
    }


    /**
     * Gets a list of registered domains
     * @returns {UmblerResponse} 
     */
    async getDomainRegistrations(){
        return axios.get('https://api.umbler.com/v1/domain-registrations',{ headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {
            return new UmblerResponse(false,'FAIL', error);
        });
    }

    /**
     * Returns a specific DomainRegistration linked with your user
     * @param {String} domain
     * @returns {UmblerResponse}
     */ 
    async getDomainRegistration(domain){
        return axios.get(`https://api.umbler.com//v1/domain-registrations/${domain}`,{ headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {
            return new UmblerResponse(false,'FAIL', error);
        });
    }

    /**
     * @returns {UmblerResponse} 
     */
    async getWebsites(){
        return axios.get('https://api.umbler.com/v1/websites',{ headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {
            return new UmblerResponse(false,'FAIL', error);
        });
    }

    /**
     * get a specific website status through domain
     * @param {String} name
     * @returns {UmblerResponse} 
     */
    getWebsite(name){
       return axios.get(`https://api.umbler.com/v1/websites/${name}`,{ headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    /**
     * 
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
    async createWebsite(data){
        return await axios.post('https://api.umbler.com/v1/websites',data,{ headers: this.headers })
        .then(function(response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function(error){
            return new UmblerResponse(false,'FAIL', error);
        });
    }
    /**
     * Returns a list of Users linked with your user
     * @returns {UmblerResponse}
     */
    async getUsers(){
        return axios.get('https://api.umbler.com/v1/users',{ headers: this.headers })
         .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
    }

    /**
     * Create a User
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
     async createUser(data){
        return axios.post('https://api.umbler.com/v1/emails', data, { headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {
            return new UmblerResponse(false,'FAIL', error);
        });
    }

    /**
     * Returns a specific User linked with your user
     * @param {String} email
     * @returns {UmblerResponse} 
     */
    async getUser(email){
        return axios.get(`https://api.umbler.com/v1/users/${email}`,{ headers: this.headers })
         .then(function (response) {
             return response.data
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
    }

    /**
     * Returns a list of Email Domains linked with your user
     * @returns {UmblerResponse}
     */
    async getEmailsDomain(){
        return axios.get('https://api.umbler.com/v1/emails',{ headers: this.headers })
         .then(function (response) {
             return response.data
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
     }

    /**
     * Returns a list of Email Domains linked with your user
     * @param {String} domain
     * @returns {UmblerResponse} 
     */
    async getEmailsDomain(domain){
        return axios.get(`https://api.umbler.com/v1/emails/${domain}`,{ headers: this.headers })
         .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
    }

    
    /**
     * Update a specific Email Domain
     * @param {String} domain 
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
    async updateEmailsDomain(domain, data){
        return axios.put(`https://api.umbler.com/v1/emails/${domain}`,data,{ headers: this.headers })
         .then(function (response) {
             return response.data
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
     }

     
    /**
     * Returns a list of Email Accounts from an Email Domain linked with your user
     * @param {String} domain
     * @returns {UmblerResponse} 
     */
     async getEmailsAccounts(domain){
        return axios.get(`https://api.umbler.com/v1/emails/${domain}/accounts`,{ headers: this.headers })
         .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
         })
         .catch(function (error) {
             return new UmblerResponse(false,'FAIL', error);
         });
     }

    /**
     * Returns a list of Email Accounts from an Email Domain linked with your user
     * @param {String} domain 
     * @param {String} email
     * @returns {UmblerResponse} 
     */ 
    async getEmailAccount(domain,email){
        return axios.get(`https://api.umbler.com/v1/emails/${domain}/accounts/${email}`,{ headers: this.headers })
        .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function (error) {console.log(error)
            return new UmblerResponse(false,'FAIL', error);
        });
    }

    /**
     * Create a new Email Account
     * @param {String} domain 
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
    async createEmailAccount(domain,data){
        return axios.post(`https://api.umbler.com/v1/emails/${domain}/accounts`,data,{ headers: this.headers })
        .then(function(response){
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function(error){
            return new UmblerResponse(false,'FAIL', error);
        })
    }

    /**
     * 
     * @param {String} domain 
     * @param {String} email 
     * @param {Object} data
     * @returns {UmblerResponse} 
     */
    async updateEmailAccount(domain,email, data){
        return axios.put(`https://api.umbler.com/v1/emails/${domain}/accounts/${email}`,data,{ headers: this.headers })
         .then(function (response) {
            return new UmblerResponse(true,'OK', response.data);
         })
         .catch(function (error) {
            console.log(error)
            return new UmblerResponse(false,'FAIL', error);
         });
     }

    /**
     * Delete an Email Account from a Email Domain
     * @param {String} domain 
     * @param {String} email
     * @returns {UmblerResponse} 
     */
    async deleteEmailAccount(domain, email){
        return axios.delete(`https://api.umbler.com/v1/emails/${domain}/accounts/${email}/`,{ headers: this.headers })
        .then(function(response){
            return new UmblerResponse(true,'OK', response.data);
        })
        .catch(function(error){
            return new UmblerResponse(true,'OK', response.data);
        });
    } 
}

module.exports = Umbler;
