# StarFleet Project

## Description

StarFleet Project is an open-source framework designed for building monitoring and management systems for various information systems. The architecture and technology choices prioritize a low entry barrier for new developers, ensuring ease of onboarding. To achieve high reliability and scalability, the project leverages well-established technologies such as Node.js, Next.js, React.js, Docker, and Nginx.

## Installation

To install dependencies and set up the project, follow these steps:

```sh
# Install dependencies
yarn install
```

## Running the Project

To start the project in development mode, use:

```sh
yarn dev
```

Once started, the platform will be available at [http://localhost:3000](http://localhost:3000).

For production build:

```sh
yarn build
```

## Technologies

- **Next.js** – Primary framework
- **Webpack Module Federation** – Microfrontend architecture
- **Lerna** – Monorepository management
- **Docker** – Containerization
- **Nginx** – Reverse proxy and load balancing

## Project Structure

```
/root
│── core/               # Main UI folder
│── plugins/            # Independent plugins folder
│── scripts/            # Global scripts
│── lerna.json          # Monorepository configuration
│── Dockerfile          # Docker container setup
│── docker-compose.yml  # Docker services configuration
│── package.json        # Project dependencies and scripts
│── README.md           # Project documentation
```

## Documentation

After starting the project, for detailed documentation, go to the FAQ page: [http://localhost:3000/faq](http://localhost:3000/faq).
