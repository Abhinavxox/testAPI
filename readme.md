# **Memory in the Shell**

Memory in the Shell is a Node.js-based API that stores and retrieves shell commands across multiple systems, using MongoDB as the database.

## **Features**

- Store shell commands using a simple POST API.
- Search command history by keyword using a GET API.
- Dockerized for easy setup with MongoDB.

---

## **Prerequisites**

- [Docker](https://www.docker.com/) installed on your system.
- Basic knowledge of using `curl` or API tools like Postman.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone
   ```
2. Navigate to the project directory:
   ```bash
   cd memory-in-the-shell
   ```
3. Build the Docker image:
   ```bash
   docker build -t memory-in-the-shell .
   ```
4. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 memory-in-the-shell
   ```
5. Access the API at `http://localhost:3000`.

---
