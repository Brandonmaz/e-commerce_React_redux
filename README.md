# e-commerce_React_redux
# The-Store-ECommerce-App
This app is an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).
Visit creators Portfolio: http://www.brandonmaz.com/
1. Website Template
   1. Create app and templet folders
   2. Create index.html and add default HTML code syntax
   3. Create header, main and footer "use grid in css"
   4. Style elements " use rem vs pixel for a better responsive design"
2. Display Products
   1. Create products div tag
   2. Add link, image, name, price and attributes to products
3. Create React App
   1. Run npx create-react-app frontend in terminal
   2. Run npm start in the frontend route in your terminal
   3. Copy index.html content to App.js and style.css content to index.css
   4. Replace class with className "this is needed with the switch from HTML to a React.js file"
4. Share Code On Github
   1. Signin to Github or Create Github account & create a new repo
   2. Initialize a git repository
   3. Commit changes " make sure to commit often" 
   4. Connect local repo to github repo
   5. Push changes to Github
5. Create Rating and Product Component
   1. Create components/Rating.js
   2. Create Product component
   3. Style in CSS
6. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Create ProductScreen.js
   5. Add new Route from product details to App.js
7. Create Node.JS Server
   1. Run npm init in root folder
   2. Run npm install express
   3. Create server.js
   4. Create route for /api/products
8. Load Products From Backend
    1. Create useEffect
    2. Define async fetchData and call it
    3. Install axios
    4. Get data from /api/products
9. Install ESlint For Code Linting
    1. Install VSCode eslint extension
    2. RUn npm install -D eslint
    3. run ./node_modules/.bin/eslint --init
    4. Create ./frontend/.env
10. Add Redux to Home Screen
    1. Run npm install redux react-redux
    2. Create store.js
    3. Add store to index.js
11. Add Redux to Product Screen
    1. Create product details constants, actions and reducers
    2. Add reducer to store.js
    3. Add /api/product/:id to backend api
12. Build Cart Screen
    1. Create 2 columns for cart items and cart action
    2. Show item image, name, qty and price
    3. Proceed to Checkout button
    4. Implement remove from cart action
13. Create Sample Users In MongoDB
    1. Run npm install mongoose
    2. Connect to mongodb
    3. Create config.js
    4. Run npm install dotenv
    5. Export MONGODB_URL
    6. Create models/userModel.js and include a userSchema and userModel
    8. Create userRoute
    9. Seed sample data
14. Create Sign-in Backend
    1. Create /signin api
    2. Check email and password
    3. Generate token
    4. Install json web token
    5. Install dotenv
    6. Test it using postman
15. Create SignIn Screen
    1. Create SigninScreen
    2. Render email and password fields
    3. Create signin constants, actions and reducers
    4. Update Header based on user login
16. Create Register Screen
    1. Create API for /api/users/register
    2. Insert new user to database
    3. Return user info and token
    4. Create RegisterScreen
    5. Add fields
    6. Style fields
    7. Add screen to App.js
    8. Create register action and reducer
    9. Check validation and create user
17. Create Shipping Screen
    1. create CheckoutSteps.js component
    2. create shipping fields
    3. implement shipping constant, actions and reducers
18. Create Payment Screen
    1. create payment fields
    2. implement shipping constant, actions and reducers
19. Create Place Order API
    1. Create Order api
    2. Create orderModel, orderRouter, and post order route
20. Create Order Screen
    1. Build order api for /api/orders/:id
    2. Create OrderScreen.js
    3. Dispatch order details action in useEffect
    4. Show data like place order screen
    5. Create order details constant, action and reducer
21. Add PayPal Button/ Function
    1. Get client id from paypal
    2. Set it in .env file
    3. Create route form /api/paypal/clientId
    4. Create getPaypalClientID in api.js
    5. Add paypal checkout script in OrderScreen.js
    6. Create paypal button
22.5 Implement Order Payment
    1. Update order after payment
    2. Create payOrder in api.js
    3. Create route for /:id/pay in orderRouter.js
23. Display Orders History
    1. Create customer orders api
    2. Create api for getMyOrders
    3. Show orders in profile screen
24. Display User Profile Info
    1. create user details api
    2. show user information
25. Update User Profile
    1. Create user update api
    2. Update user info
26. Create Admin View
    1. Create Admin Menu
    2. Create Admin Middleware in Backend
    3. Create Admin Route in Frontend
27. List Products
    1. Create Product List Screen
    2. Add reducer to store
    3. Show products on the screen
28. Create full CRUD for Product
    1. C. Create Product
        1. Build create product api
        2. Create edit screen
        3. Define state
        4. Create fields
    1. R. List Orders
        1. create order list api
        2. create Order List Screen
        3. Add reducer to store
        4. show products on the screen
    1. U. Update Product
        1. Define update api
        2. Define product update constant, action and reducer
        3. Use action in Product Edit Screen
    1. D. Delete Product
        1.  Create delete api in backend
        2.  Create delete constants, action and reducer
        3.  Use it in product list screen
29. Upload Product Image
    1. Run npm install multer
    7. Define upload router
    8. Create uploads folder 
    9. Handle frontend
30. Delete Order
    2. Create delete order action and reducer
    3. Add order delete action to order list
31. Deliver Order
    1. Create constant, actions and reducers for deliver order
    2. Add order deliver action to order details screen
32.Create full CRUD for Users 
    2. C. Create Users
        1. Step 18 did this step.
    2. R. List Users
        1. Build api for list users
        2. Create UserList Screen
        3. Create order details constant, action and reducer
    2. U. Edit User
        1. Build api for update users
        2. Create edit screen UI
    2. D. Delete Users
        1. build api for delete users
        2. create order details constant, action and reducer
        3. Use action in UserListScreen
33. Implement Seller View
    1. Add seller menu
    2. Create seller route
    3. List products for seller
    4. List orders for seller
    5. Add Seller to Product List and Details Screen
34. Create Seller Page
    1. create seller page
    2. update product component and product screen
    3. update product routes
35. Add Top Seller Carousel
    1. Install react carousel
    2. Implement actions and reducers for top sellers
    3. Use react carousel with data in Home Screen
36. Create Search Box and Search Screen
    1. Create search bar in Header.js
    2. Update product list api for search by name
37. Add Advanced Search Filter
    1. Filter by category, price range, average rating, price and rating
    2. Sort by price, rating, ...
38. Rate and Review Products
    1. Rate products
    2. Create actions and reducers
39. Choose Address On Google Map
    1. Create google map credentials
    2. Update .env file with Google Api Key
    3. Create api to send google api to frontend
    4. Create map screen
    5. Fetch google api
    6. GetUserLocation
    7. Install @react-google-maps/api
    8. Apply map to the checkout screen
40. Implement Pagination
     1. Add pagination to product router in backend
     2. Apply page number to actions and reducers in frontend
     3. Show page numbers in search screen
41. Email order receipt by mailgun
     1. Create mailgun account
     2. Add and verify your domain to mailgun
     3. Install mailgun-js
     4. Set api key in env file
     5. Change pay order in orderRouter
     6. Send email the 
42. Create Dashboard Screen
     1. Create chart data in backend
     2. Build Chart screen
43. Implement Live Chat With Customers
     1. Use socket io to create backend
     2. Create chat box component and support screen
44. Publish To Heroku
    1. Create git repository
    2. Create heroku account
    3. Install Heroku CLI
    4. Run heroku login into the Terminal
    5. Create Procfile
    6. Create mongodb atlas database
    7. Set database connection in heroku env variables
    8. Commit and push
Lastly I want to shout out to Basir. 
I used his walkthrough in building out this app. He was able to teach me many new tips and tricks in React and has allowed me to build my first fully built out application. His Git repo is https://github.com/basir/amazona and Udemy course is Build Ecommerce Website Like Amazon [React & Node & MongoDB]