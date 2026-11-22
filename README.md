# 🚀 Guilherme de Souza — Portfólio de Infraestrutura, DevOps & SRE

Landing page profissional moderna, de alta performance e responsiva, desenvolvida em **React + TypeScript + Tailwind CSS** e empacotada em contêiner de produção com **Dockerfile Multi-Stage e Nginx Alpine**.

Projetada estrategicamente com foco em **Engenharia de DevOps, Site Reliability Engineering (SRE) e Análise de Infraestrutura Crítica**.

---

## ⚡ Destaques e Funcionalidades

- **CLI / Terminal Interativo ao Vivo:**
  - Emulador interativo com Starship prompt (`guilherme@oci-bastion:~$`).
  - Suporte a comandos e histórico: `fastfetch`, `kubectl get nodes`, `kubectl get pods`, `docker ps`, `terraform plan`, `projects`, `skills`, `certifications`, `cat cv`, `help` e `clear`.
  - Botões de ações rápidas para mobile e recrutadores executarem comandos com 1 clique.
- **Visualizador de Esteira DevSecOps & GitOps:**
  - Fluxo visual interativo das 7 etapas: *Git Commit ➔ Lint & Security Scan ➔ Multi-Arch Build ➔ OCI Registry ➔ IaC & GitOps CD ➔ K8s ARM Production ➔ Observability & SLA*.
- **Telemetria de Confiabilidade & Métricas de Impacto:**
  - SLA Alvo 99.99%, redução de RPO de 24h para 10 minutos (área hospitalar crítica), sustentação 24/7 para 140+ prestadores e 100% de cobertura IaC declarativa.
- **Vitrine de Projetos IaC & Laboratórios:**
  - Filtro interativo por categoria (Cloud & IaC, Observabilidade, Sistemas Distribuídos).
  - Destaques arquiteturais para `monitoring-always-free-oci`, `nsse-iac`, `iac-oci`, `flash-sale-chaos-lab-cap` e `cold-chain-guard-pacelc`.
- **Certificações Oficiais Credly:**
  - Validação pública das credenciais LFCA (Linux Foundation), OCI Foundations, OCI AI e Oracle Agentic AI.
- **Design System Futurista / Cloud Native:**
  - Suporte a Modo Claro e Escuro (Dark/Light Mode), contrastes acessíveis, tipografia mono para código e layout ultra-responsivo.
- **RH-First & Ações Rápidas:**
  - Download com 1 clique do currículo oficial em PDF (`/docs/curriculo-guilherme.pdf`).
  - Cópia instantânea de e-mail com feedback visual via Toast.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Frontend Core** | React 18, TypeScript, Vite |
| **Estilização** | Tailwind CSS, Lucide React Icons |
| **Conteinerização** | Docker (Multi-stage build) |
| **Servidor Web** | Nginx 1.27 Alpine (Gzip, Headers de Segurança, SPA fallback) |
| **Orquestração Local** | Docker Compose |

---

## 🐳 Executando com Docker (Recomendado)

O projeto já inclui um `docker-compose.yml` pré-configurado na porta **8080**.

### 1. Iniciar o contêiner:
```bash
docker compose up -d --build
```

### 2. Acessar a aplicação:
Abra seu navegador em:
```
http://localhost:8080
```

### 3. Verificar status e healthcheck:
```bash
docker ps -f name=oci-site-portifolio
curl -I http://localhost:8080/healthz
```

### 4. Parar o contêiner:
```bash
docker compose down
```

---

## 💻 Desenvolvimento Local (Sem Docker)

Se preferir rodar em ambiente local via Node.js:

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (Vite HMR)
npm run dev

# Compilar para produção e checar tipos TypeScript
npm run build

# Pré-visualizar o build estático
npm run preview
```

---

## 📦 Arquitetura do Dockerfile

O Dockerfile utiliza compilação em múltiplos estágios para gerar uma imagem final enxuta (**~21 MB compactada**):

1. **Stage 1 (Builder):** Imagem `node:20-alpine` executa a instalação limpa (`npm ci`) e compilação do bundle estático (`npm run build`).
2. **Stage 2 (Production):** Imagem `nginx:1.27-alpine` recebe apenas os artefatos estáticos da pasta `/dist` e o arquivo customizado `nginx.conf`.
3. **Segurança & Otimizações:**
   - Headers: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Content-Security-Policy`.
   - Compressão Gzip para HTML, CSS, JavaScript, JSON e SVG.
   - Cache com expiração de 1 ano para arquivos estáticos (`/assets/*`).
   - Endpoint dedicado de healthcheck em `/healthz`.

---

## 📜 Histórico de Commits

O repositório foi construído seguindo a convenção de commits semânticos atômicos:
- `chore: inicializar repositorio e configurar react com vite, typescript e tailwind`
- `feat: implementar componentes do portifolio, terminal interativo e pipeline cicd`
- `feat: empacotar aplicacao com dockerfile multi-stage e nginx`
- `docs: adicionar documentacao completa de execucao e deploy`

---

## 📬 Contato

- **Nome:** Guilherme de Souza
- **E-mail:** [guisouzaskill@gmail.com](mailto:guisouzaskill@gmail.com)
- **LinkedIn:** [linkedin.com/in/guilherme--desouza](https://www.linkedin.com/in/guilherme--desouza/)
- **GitHub:** [github.com/guilermiii](https://github.com/guilermiii)
- **Credly:** [credly.com/users/guilherme-souza.97d0f101](https://www.credly.com/users/guilherme-souza.97d0f101)
