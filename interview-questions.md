# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model view controller.

  Researched answer:
  - Models handle data and business logic.
  - Controllers handle user interface and application
  - Views handle graphical user interface objects and presentation.


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: It has Create - Read - Update - Destroy.  It basically means the user can interact with elements on the page.

  Researched answer: In computer programming, create, read, update, and delete are the four basic functions of persistent storage.



3. What is a migration? Why would you use one?

  Your answer: Migrations are basically changes to the structure of data tables.

  Researched answer: Migrations are a convenient way for you to alter your database in a structured and organized manner.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person has many computers.  I believe the foreign key should go with the computer, and the primary key with the person.

  Researched answer: The computer belongs to the person, and as such the computer should hold the foreign key.



5. What is object-relational mapping?

  Your answer: I don't know.

  Researched answer: Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.
- JSON - JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.
- API - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.
- Endpoints - An API endpoint is a point at which an application program interface (API) -- the code that allows two software programs to communicate with each other -- connects with the software program. APIs work by sending requests for information from a web application or web server and receiving a response.
- Strong params - It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
