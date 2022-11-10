import React from 'react';

const Blog = () => {
    return (
        <div>


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">



      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Databases</span>
          <span className="mt-1 text-gray-500 text-sm">12 Aug 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">1. Difference between SQL and NoSQL ?</h2>
          <p className="leading-relaxed">When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
          <p>The Main Differences: </p>
          <h1>1.Type –</h1>
          <p>SQL databases are primarily called as Relational Databases RDBMS; whereas NoSQL database are primarily called as non-relational or distributed database. </p>
          <h1>2.Language – </h1>
          <p>SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
          A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
             <h1>3.Scalability –</h1>
              <p>In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. </p>
              <h1>4.Structure – </h1>
              <p>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
          
        </div>
      </div>



      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">JSON</span>
          <span className="mt-1 text-gray-500 text-sm">22 Aug 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">2. What is JWT, and how does it work ?</h2>
          <p className="leading-relaxed">JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

          JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.

          JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.</p>
          <p>
          When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. 

            By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
            <br />

            User sign-in using username and password.
            <br />
           The authentication server verifies the credentials and issues a JWT signed using a private key.
             <br />
             Moving forward, the client will use the JWT to access protected resources by passing the JWT in the HTTP Authorization header.
              <br />
              The resource server then verifies the authenticity of the token using the public key.
              <br />


          </p>
          <p>
          The Identity Provider generates a JWT certifying user identity, and the resource server decodes and verifies the authenticity of the token using the public key.

           Since the tokens are used for authorization and authentication in future requests and API calls great care must be taken to prevent security issues. These tokens shouldn’t be stored in publicly accessible areas like the browser’s local storage or cookies. In case there are no other choices, then the payload should be encrypted.
          </p>
         
        </div>
      </div>




      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Javascript and NodeJS</span>
          <span className="text-sm text-gray-500">12 Sep 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">3. What is the difference between javascript and NodeJS ?</h2>
          <p className="leading-relaxed">JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
            In this post, we will walk you through what JavaScript and Node.js are, and then we will demonstrate the differences between JavaScript and Node.js.</p>
            <h1>JavaScript</h1>
            <p>JavaScript’s first version was launched in 1995 and it was developed by Brendan Eich of Netscape (then called LiveScript). As discussed earlier, JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.</p>
            <h1>Node.js</h1>
            <p>Node.js was first introduced in 2009 developed by Ryan Dahl and is a runtime environment for JavaScript built on Google’s v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser. The nicest part about Node.js is that it never blocks I/O, is event-driven, and can be used to create highly scalable apps. In Node.js everything is a module and using these modules developers make use of Node.js in creating web APIs, Rest API servers, command-line applications, and real-time chat applications.</p>
            <h1>Difference between JavaScript and Node.js</h1>
            <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.
                <br />

             JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
             <br />

              JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
              <br />

                JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development
                <br />

             JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
             <br />

              JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
        
        
        </div>
      </div>


      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">NodeJS</span>
          <span className="text-sm text-gray-500">12 Oct 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">4. How does NodeJS handle multiple requests at the same time ?</h2>
          <p className="leading-relaxed">Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.
<br />
Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
<br />
The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.
<br />
NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
<br />
How is NodeJS better than traditional multithreaded request response model?
With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.</p>
        
        </div>
      </div>




    </div>
  </div>
</section>
            




        </div>
    );
};

export default Blog;