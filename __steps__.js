/**
 * JWT: secure your api
 * -----------------------
 *          Create Token
 * ------------------------
 * 1.client: After user login send user basic info to create token
 * 
 * 2. in the server site : install npm i jsonwebtoken\
 * 3. import jsonwebtoken
 * 4. JWT.sign(payload, secret, {expires})
 * 5. return token to the client site
 * 
 * 6. after receiving the token store it either httpOnly cookies or local storage (local storage is the second best) 
 * 
 * 7. use a general space onAuthStateChange > AuthProvider
 * 
 * 
 * ---------------------------
 *   SEND TOKEN TO SERVER
 * --------------------------
 * 1. for sensitive api call () send authorization headers{authorization: 'Bearer Token'}
 * 
 * 
 * 
 * -------------------------------------
 *      VERIFY TOKEN
 * -------------------------------------------
 * 1. Create a function called verifyJWT(middleware)
 * 2. This function have three parameters: req, res, next
 * 3. First check whether the authorization headers exits
 * 4. if not send 401
 * 5, get the token out of the authorization headers
 * 6. call jwt.verify(token, secret, (error decoded))
 * 7. if error send 401
 * 8. set decoded to the req object so that we can retrieve later
 * 9. call the next( ) to go to next function
 * 
 * --------------------------------------------
 * 1. check wether token has the email that matches with the request email 
*/