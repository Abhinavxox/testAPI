# **Memory For Shell**

<!-- techstack used -->

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## **Features**

- Store shell commands using a simple POST API.
- Search command history by keyword using a GET API with additional details feature.
- Dockerized for easy setup.

---

## **Prerequisites**

- [Docker](https://www.docker.com/) installed on your system.
- Basic use of `curl` or API tools like Postman.

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
3. Setup environment variables:
   ```bash
   cp .env.example .env
   ```
4. Build the Docker image:
   ```bash
   docker-compose build
   ```
5. Start the Docker container:
   ```bash
   docker-compose up
   ```
6. The server will be running on `http://localhost:{port}/api/v1/`.

---

## **API Endpoints**

### **1. Add a new command**

```bash
curl -X POST "http://localhost:8080/api/v1/commands/" -d "command=ls -l"
```

### **2. Search command history**

```bash
curl -X GET "http://localhost:8080/api/v1/commands/?keyword=ls&details=true"
```

#### Query Parameters

- `keyword`: search keyword
- `details`: (optional) set to `true` to get additional details of the command

---

## Samples:

### Bash Shell

<img width="682" alt="bash" src="https://github.com/user-attachments/assets/ed1d6c61-0350-435e-81fb-72e4fb4ffb76" />

### Fish Shell

<img width="830" alt="fish" src="https://github.com/user-attachments/assets/d4ee34fa-f4a2-4ca9-b6fa-882677da2d35" />

### PowerShell

![windows](https://github.com/user-attachments/assets/3f57ab4f-2f5b-4513-89e8-4f4b26460ea8)
![windows2](https://github.com/user-attachments/assets/74f49c48-1411-4b0f-9f36-b23f4ecbef73)
