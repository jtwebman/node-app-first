# Todo App written functionally with data and business logic first

So many times we think ok I have this idea I want to build it but then we start thinking I am going to use this framework. I am going to use this database. I am going to build some awesome "insert framework" frontend with some great "insert framework or tool" backend. What that does though is makes us solve the problem with those constraints. If we are going to store stuff in a database we might start thinking about the database domain and it's constraints and data model instead of using a data model that makes sense for our app.

Don't take this the wrong way frameworks and databases are amazing things but what if you write programs with the data model and business logic first and then add those other things later. Making sure your business logic and data mobel will work without all that first. Maybe even get things running first as a MVP without a database or framework at all? 

What do you think will happen?

FYI this was inspired by a book I read a few years ago when I was learning more about other languages like Elixir and Erlang OTP called [Functional Web Development with Elixir, OTP, and Phoenix](https://pragprog.com/titles/lhelph/functional-web-development-with-elixir-otp-and-phoenix/) but I use Node.js and Javascript for my day job. So can I take what I learned from that and build a web app that built the same way and are there advatages to it?

This is my journey.

## Progression based on branches

* [1-setup](https://github.com/jtwebman/node-app-first/tree/1-setup) - New application one test that tests nothing as we will build using tests instead of a REPL as Node's REPL is not as good as Elixir's. The tests run in github actions as well.