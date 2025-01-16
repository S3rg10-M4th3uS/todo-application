
# To-do List


A simple and efficient to-do application designed to manage tasks with ease. Built using modern web technologies and containerized for seamless deployment.
## Features

- Create, read, update, and delete tasks.
- Mark tasks as complete or incomplete.
- Persistent task storage.
- Responsive design for mobile and desktop use.
- Easy deployment with Docker.


## Tech Stack

**Client:** React, Javascript, HTML, CSS

**Server:** Docker, Java, Spring Boot


## Installation

### Prerequisites

Ensure you have the following installed:

- Docker
- npm

### Steps
Clone the repository:
```bash
  git clone https://github.com/S3rg10-M4th3uS/todo-application
  cd todo-application
```
Build and run the application using Docker:
```bash
docker compose up
```
Wait the command finish its processes, and in another terminal tab, initate the npm:
```bash
cd app
npm start
```
If you get any errors during the npm start, do this:
```bash
npm install react-scripts --save
```
And the run npm start again:
```bash
npm start
```
## Folder Structure

- app/ - Contains the React frontend code.

- src/ - Contains the Spring Boot backend code.

- docker-compose.yml - Docker Compose configuration file.

## API Endpoints

- GET /tasks: Fetches a list of tasks created by the user, presented in a paginated format with the help of the Pageable object. If successful, it returns a 200 OK status.

- GET /tasks/{id}: Retrieves details of a specific task by its ID, as long as the provided ID exists in the database. If successful, it returns a 200 OK status.

- GET /tasks/find: Allows searching for one or more tasks using a keyword in the task title. The keyword should be passed as a String parameter in the URL. Regardless of the result, the endpoint returns a 200 OK status.

- POST /tasks/create: Creates a new task. The ID is automatically generated, so it is not required during creation. If successful, it returns a 200 OK status.

- PUT /tasks/update: Updates an existing task when the provided ID exists in the database. If the ID does not exist, a new task is created instead. On success, it returns a 204 NO CONTENT status.

- DELETE /tasks/{id}: Removes a specific task using its ID, provided that the ID exists in the database. If successful, it returns a 200 OK status.
