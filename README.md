# 🌐 Guilherme de Souza — Portfolio

Portfólio profissional de **DevOps & SRE**, focado em engenharia de confiabilidade, infraestrutura crítica, ambientes on-premise, cloud native e automação IaC.

[![CI/CD Pipeline](https://github.com/guilermiii/site-portifolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/guilermiii/site-portifolio/actions/workflows/ci-cd.yml)
[![Docker Image](https://img.shields.io/badge/docker-devguina%2Fsite--portifolio-blue?logo=docker&logoColor=white)](https://hub.docker.com/r/devguina/site-portifolio)

---

## 🚀 Execução

### Docker (Recomendado)
```bash
docker compose up -d --build
```
Acesse em `http://localhost:8080` (healthcheck em `/healthz`).

### Desenvolvimento Local
```bash
npm install
npm run dev
```

### Testes Automatizados
```bash
npm test
```

---

## 🛠️ Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Testes:** Vitest, React Testing Library, Happy-DOM
- **Runtime:** Nginx 1.27 Alpine (SPA Fallback, Real IP, Gzip, Security Headers)
- **CI/CD:** GitHub Actions (Build multi-arch `linux/amd64` e `linux/arm64` publicado no Docker Hub)

---

## 📬 Contato

- **LinkedIn:** [guilherme--desouza](https://www.linkedin.com/in/guilherme--desouza/)
- **Credly:** [guilherme-souza](https://www.credly.com/users/guilherme-souza.97d0f101)
- **E-mail:** [guisouzaskill@gmail.com](mailto:guisouzaskill@gmail.com)
