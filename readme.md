### What is node.js
Node js is a javascript runtime build on google V8 javscript engine.

### Why and when use node.js
- Single threaded, based on event driven, non-blocking I/O model (Which make node.js light weight and efficient)
- Perfect for building fast and scalable and data intensive apps.
- Netflix, Uber, Paypal, Ebay user node.js in production.
- Javascript across the entire stak which make it faster and efficient development.
- Availability of huge library of open-source packages for free (NPM).
- Very active developer community.
- Don't use node.js for building the application which requires heavy CPU-intensive server-side processing (Image manipulation, video conversion, file compression).

### Asyncronous nature of node.js
**Synchronouse (Blocking)** Read code line by line. Each line of code wait for the result of previous line and block the execution of reset of the code. Synchronouse code also knows as blocking code.

**Asynchronouse (Non-blocking)** We upload heavy work code to worked on in the background and then once the work is done a callback function that we registered before is called to handel the result. And during all that time rest of the code can still be executing without being blocked by heavy task. Which is now runing in the background.

**why do we use call back so many time in node.js** Node.js is single threaded (Basically thread is where our code is actually executed in a machine's processor). For each application there is only one thread. All the users accessing your application are all using the same thread. Whenever they are interacting with the application the code that is run for each user will be executed all in the same thread at the same place in the computer runing the application. Programming language like PHP one new thread for each new user.

We use callback that doesn't mean automatically make it asynchronous. It only works this way for some functions in the node API. Callback != Asynchonous.

### Basic Js
**Array.map()** Take an array and apply some procedure to its elements so that you get a new array with modified elements.

```JavaScript
  let arr = [3, 4, 5, 6];

  let modifiedArr = arr.map(function(element){
      return element *3;
  });

  console.log(modifiedArr); // [9, 12, 15, 18]
```

**Destructuring assignment** Unpack values from arrays, or properties from objects, into distinct variables.
