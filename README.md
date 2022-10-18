# API Challenge
 
- [API Challenge](#api-challenge)
  - [Overview](#overview)
  - [Endpoints](#endpoints)
    - [**GET /findNames**](#get-findnames)
    - [**GET /findByResistance**](#get-findbyresistance)
    - [**GET /findNamesByResistance**](#get-findnamesbyresistance)
    - [**GET /avgMaxCP**](#get-avgmaxcp)
    - [**GET /countedWeaknesses**](#get-countedweaknesses)
  - [Architecture](#architecture)
    - [REST API](#rest-api)
  - [Deployment](#deployment)
    - [Running Locally](#running-locally)
    - [Render](#render)


## Overview

This is a Coding Challenge that requires the user to create an API using `NodeJS` have the following functions:

- [ ] `findNames`: Returns an array of all the names of Pokemon in the data set.
- [ ] `findByResistance`: Returns all Pokemon that are resistant to the type of attack supplied as an argument.
- [ ] `findNamesByResistance`: Return an array of names only of Pokemon resistant to the type of attack provided.
- [ ] `avgMaxCP`: Returns the average maximum CP (combat points) of all Pokemon
- [ ] `countedWeaknesses`: Returns an object that contains an array of each mentioned type of weakness and a count of how many Pokemon have that weakness.

Please note that this project has been deployed on `Render` on https://pokedexchallenge.onrender.com/api/.

## Endpoints

### **GET /findNames**

- GET endpoint that returns an array of Pokemon names in the dataset

```
# request
curl 'localhost:8000/api/findNames' 

# return
[String]
```

### **GET /findByResistance**

- GET endpoint that returns an array of Pokemon in the dataset that are resistant to an attack

```
# request
curl 'localhost:8000/api/findByResistance?attack=Ember'

# return
[String]
```

### **GET /findNamesByResistance**

- GET endpoint that returns an array of Pokemon names in the dataset that are resistant to a given attack

```
# request
curl 'localhost:8000/api/findNamesByResistance?attack=Ember'

# return
[String]
```
### **GET /avgMaxCP**

- GET endpoint returns the average maximum CP in the dataset

```
# request
curl 'localhost:8000/api/avgMaxCP'

# return
Number
```

### **GET /countedWeaknesses**

- GET endpoint that returns an array of objects that contain the listed weaknesses and the number of Pokemon that have that weakness

```
# request
curl 'localhost:8000/api/avgMaxCP'

# return
[{"weakness":String, "count": int}, ...]
```

## Architecture 

### REST API
This REST API was build using `express` with five endpoints (GET) 

## Deployment

### Running Locally

To run the project on a local machine, run `npx nodemon dev` on the local machine

### Render

To deploy this project to Render, use the following steps:

  1. Fork this repository to your Github Account
  2. Create a new Web Service
  3. Connect the forked repository to Render
  4. Initialize the Web Service with the following values
     1. Environment : Node
     2. Branch : main
     3. Build Command : `npm i`
     4. Start Command : `node app.js`
