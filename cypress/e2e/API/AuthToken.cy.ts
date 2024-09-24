describe('Reqres API Token Retrieval', () => {

    // Test for 200 OK (valid credentials
    it('should obtain an authorization token with valid credentials', () => {
      const validCredentials = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login', 
        body: validCredentials,
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(200);  
        const token = response.body.token;
        expect(token).to.exist; 
        cy.log('Authorization Token:', token);
      });
    });
  
    // Test for 400 Bad Request (invalid credentials)
    it('should return 400 Unauthorized with invalid credentials', () => {
      const invalidCredentials = {
        email: 'wrong.email@reqres.in', 
        password: 'wrongpassword'  
      };
  
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: invalidCredentials,
        failOnStatusCode: false  
      }).then((response) => {
        expect(response.status).to.eq(400); 
        cy.log('400 Bad Request:', response.body.error); 
        expect(response.body.error).to.exist;
      });
    });

  
    // Test for 404 Not Found (invalid endpoint)
    it('should return 404 Not Found when requesting an invalid endpoint', () => {
      const validCredentials = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/',  
        body: validCredentials,
        failOnStatusCode: false  
      }).then((response) => {
        expect(response.status).to.eq(404); 
        cy.log('404 Not Found Error:', response.statusText);
      });
    });

    
  
    // Test for 500 Internal Server Error (simulate server failure)
    it('should handle a 500 Internal Server Error (simulated)', () => {
      const invalidPayload = {
        invalidField: 'invalidValue' 
      };
  
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: invalidPayload,
        failOnStatusCode: false
      }).then((response) => {
        if (response.status === 500) {
          cy.log('500 Internal Server Error:', response.statusText);
        } else {
          cy.log('Server did not return 500, but response status is', response.status);
        }
      });
    });
  });
  

let authToken: string;

describe('Authenticated API Requests', () => {
  it('should obtain an authorization token', () => {
    const loginDetails = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: loginDetails,
    }).then((response) => {
      authToken = response.body.token;
      expect(authToken).to.exist;
    });
  });

  it('should perform an authenticated request', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

 
  it('should perform an authenticated request to list all users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2',
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('200 OK:', response.body.data); 
    });
  });
});
