# 🐳 Simple Docker App – kalkivartha/docker_sample_code

This repository demonstrates a basic Dockerized full-stack application with separate frontend, backend, and MongoDB database services. It’s ideal for learning full-stack development and Docker container orchestration using Docker Compose.

---

## 📁 Repository Structure

```

docker\_sample\_code/
├── backend/               # Backend service code (e.g., Flask, Node.js)
├── frontend/              # Frontend service code (e.g., React, HTML/CSS)
├── docker-compose.yml     # Multi-container orchestration file
├── .DS\_Store              # System file (can be ignored or deleted)
└── README.md              # Project documentation

````

---

## 📦 Docker Compose Setup

This project uses Docker Compose to run three services:

- **Backend** (e.g., Flask or Node.js)
- **Frontend** (e.g., React or simple HTML)
- **MongoDB** (NoSQL database for storing application data)

### 🧾 `docker-compose.yml`

```yaml
version: '3'
services:
  backend:
    image: your_dockerhub_username/simple-docker-app-backend:latest
    ports:
      - "5000:5000"
    depends_on:
      - mongo

  frontend:
    image: your_dockerhub_username/simple-docker-app-frontend:latest
    ports:
      - "3000:3000"

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongodb:/data/db

volumes:
  mongodb:
````

> ✅ Replace `your_dockerhub_username` with your actual Docker Hub username.

---

## 🚀 How to Run the Project

### 🐋 Step-by-Step

1. **Clone the repository**

   ```bash
   git clone https://github.com/kalkivartha/docker_sample_code.git
   cd docker_sample_code
   ```

2. **Ensure Docker & Docker Compose are installed**

   * [Install Docker](https://docs.docker.com/get-docker/)
   * [Install Docker Compose](https://docs.docker.com/compose/install/)

3. **Run all services**

   ```bash
   docker-compose up
   ```

4. **Access the app**

   * **Frontend**: [http://localhost:3000](http://localhost:3000)
   * **Backend**: [http://localhost:5000](http://localhost:5000)
   * **MongoDB**: Accessible at `mongodb://localhost:27017` (use in backend config)

---

## 🛠️ Notes

* The backend must be configured to connect to MongoDB using the host name `mongo` (Docker Compose internal DNS).
* For local development outside of Docker, connect to MongoDB at `localhost:27017`.

---

## 🤝 Contributions

You’re welcome to fork this repo, suggest improvements, or submit pull requests. Happy coding!

---

## 📜 License

This project is open-source and free to use for educational and personal projects.

