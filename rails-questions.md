# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?


rails new new_app -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'


get - this is telling the page /library/:id to get a function from the controller named 'book' that will render things on the page.
library - this will be the directory within the url you need to type in to get to this specific page.
:id - this is the argument that needs to be passed in alongside the library directory to get a specific result.
book - book is the name of the specific controller file we want to look in.
show - show is the specific function within the book controller file that we want to run.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.


Go to app/models and search for the files you want to create the association between.  
There should be a parent and a child.
The child should hold a variable titled parent_id and it should be of type integer.


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?


rails generate model Person shirt:string pants:string shoes:string


5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?


rails generate model (table name) (variable1 name):(variable1 type) (variable2 name):(variable2 type)
The table name should be capitilized.
