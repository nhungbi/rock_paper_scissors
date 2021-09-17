# Rock Paper Scissors

We are going to create a simple applicaton that allows users to play quick games of [Rock, Scissors, Paper](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors). Our schema for this one will be fairly simple. A User can have many Games, and a Game belongs to a User. 

## Release -1: (Stretch goal) Authentication, Multiplayer

Authentication is easier done in the beginning.

We authenticated before using full-stack Django, but using separate front-ends and back-ends communicating through an API becomes a much lengthier process. [This tutorial](https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a) may help you.

Keep in mind, multi-player rock paper scissors shouldn't follow what we've written below for single-player, so feel free to make your own design choices. Luckily, this isn't the most complicated game; keep it simple, you can do it!

## Release 0: Setup 
- Create a `venv` and install Django. 
- Start a new Django project `django-admin startproject rock_scissors_paper`. 
- Setup your postgresql database using `psycopg2`. 
- Create an app for our game `py manage.py startapp game`

## Release 1: Models
We'll handle the game logic on the front end, so all our backend will have to do is save completed Games. Your Game model should: 
- Belong to a user. 
- Have a win status. (Won or Lost). This can be a string or a bool. What makes more sense? 
- User Throw - a string with what the user played, either rock, scissors, or paper. 
- Computer Throw 

## Release 2: User Profile
Use `create-react-app` to create a new front end for our rock, scissors, paper game. The main page should have the following: 
- Their username 
- The number of games they've won so far
- The number of games they've lost so far 
- A button/link to play a new game. 

## Release 3: Game Logic 
When a user clicks the link to play a new game, it takes them to a new game page. The user can select a throw (rock, scissors, or paper). After that the computer should randomly select its own throw. You'll have to write some game logic to determine the winner. You'll then need to send the new game info to your back end to save the game. 
- Rock beats scissors
- Paper beats rock
- Scissors beats paper
