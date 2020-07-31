# Ledger Scheduling System

## Table of contents
- [Ledger Scheduling System](#ledger-scheduling-system)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Status](#status)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Unit Testcases](#unit-testcases)
  - [Acceptance Testcases](#acceptance-testcases)
  - [Testing Suite Operation](#testing-suite-operation)
  - [UML Class Diagram](#uml-class-diagram)
  - [System Statechart Diagrams](#system-statechart-diagrams)
  - [Description of System Structure](#description-of-system-structure)
    - [More on the Algorithms](#more-on-the-algorithms)
  - [API Documentation](#api-documentation)
  - [Contact](#contact)

## Features
List of features ready and TODOs for future development

## Status
[comment]: <> (Project is: _in progress_, _finished_, _no longer continue_ and why?)

## Screenshots
![screenshot of the front page](https://i.ibb.co/kG58S1f/Ledger-Screen-Shot.png)

## Technologies
* Python >= 3.7
* React >= 16.13
* Redux >= 4.0 
* Django REST framework >= 3.11.0
* Django >= 3.0.8
* Djoser >= 2.0.3

## Setup
In order to execute this application you must first download the source code.
You can do so by either selecting the green code button on our github repository,
or just click [here](https://github.com/CS4398-Capstone-Project/Ledger/archive/master.zip)
to download the zip file of the project. Or, you can use git to clone the project.
To do so, use the following code in your terminal emulator:

    git clone https://github.com/CS4398-Capstone-Project/Ledger.git

After you have downloaded and extracted the project, simply run the included
build script located in the top directory of the project. This script will only
work on unix based operating systems in a terminal emulator using bash.

    ./build.sh

If you are on a Windows or other operating system or would like to build the
project yourself please refer to the [setup](#setup) section. It's super easy.

Otherwise, you are all set and you can start the servers for both the frontend
and backend with the following:

    ./runServers.sh

---add more about execution here---

## Unit Testcases


## Acceptance Testcases


## Testing Suite Operation


## UML Class Diagram


## System Statechart Diagrams


## Description of System Structure
```
.
├── backend
│   ├── api
│   └── env
└── frontend
    ├── node_modules
    ├── public
    └── src
```
The system is structured as a fullstack environment with a server for the frontend user interfaces and a server for the backend calculations and database. This design decision was made in order to allow users of this system to host and/or store their information locally or remotely. Because the system uses react as the frontend, it can easily be customized and hosted remotely and can be upgraded, scaled, and migrated to different hosts without effecting business and  the user would still have access to their data locally. 

The essential algorithms to the operation of the Ledger Scheduling System include an initial "first come, first serve" queue for assigning appointments to available time slots and then a hashing of the available employees to these appointments. There can be multiple assignments to the same time slot **Only if there are enough available employees** (i.e.: three customers can have have an appointment at 8 iff there are three employees available at that time) if there aren't enough employees available then the time slot is not available for a customer to select.

After the customer has selected a time slot and the appointment is set, their appointment will be added to the database and the schedules of the employee's will be updated. The two groups of 'appointments' and 'employees' creates a bipartite graph which we then map the appointment to an employee but these connections in this graph must be one-to-one, that is, an employee should only have one appointment at any given time. There may be special cases in which their may be a walk-in customer or a customer would prefer a specific employee. For the consideration of these instances and to maximize employee time the Ledger system has implemented several other algorithms to include: priority queueing of customers who are in urgent need, co-operative multi-appointment scheduling for appointments with customers that exceed a specified time slot, and an implementation of the auction algorithm to calculate the best mapping between appointments and employees.

### More on the Algorithms
The auction algorithm Ledger uses takes in priority as a weight upon the edges of the mapping of appointments to employees this weight could reflect the level of skill required by an enployee to perform the task required to complete the appointment with the customer or it could reflect urgency as in an medical facility or emergency response. When Ledger generates the employees' schedules it will put them up for 'bid' and the highest 'bider' is the employee with the highest skill level. The auction algorithm is used to solve the assignment problem that would occur in this automated schedule generating process.


## API Documentation
The backend API has documentation generated using Swagger UI, These documents are generated by the backend server so in order to view them you must first run startServers.sh and then go to the documentation website found at this link http://127.0.0.1:8000/docs/, there you will find the Django-REST framworks interfacing request endpoints with which you can make GET POST PATCH and DELETE requests to the backend in order to communicate with the backend and the database.

## Contact
Created by Texas State University Students contact us at:
* Aaron Carrasco: adc129@txstate.edu
* Eduardo Dominguez: e_d2@txstate.edu
* Trevor Chaney: t_c296@txstate.edu
* Keondre Credit: kdc117@txstate.edu
