# devguina/site-portifolio

<p align="center">
  <a href="https://hub.docker.com/r/devguina/site-portifolio"><img src="https://img.shields.io/docker/pulls/devguina/site-portifolio?style=for-the-badge&logo=docker&logoColor=white&color=2496ED" alt="Docker Pulls" /></a>
  <a href="https://hub.docker.com/r/devguina/site-portifolio"><img src="https://img.shields.io/docker/stars/devguina/site-portifolio?style=for-the-badge&logo=docker&logoColor=white&color=2496ED" alt="Docker Stars" /></a>
  <a href="https://hub.docker.com/r/devguina/site-portifolio"><img src="https://img.shields.io/docker/image-size/devguina/site-portifolio/latest?style=for-the-badge&logo=docker&logoColor=white&color=10B981" alt="Docker Image Size" /></a>
  <a href="https://github.com/guilermiii/site-portifolio/actions/workflows/ci-cd.yml"><img src="https://img.shields.io/github/actions/workflow/status/guilermiii/site-portifolio/ci-cd.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white" alt="CI/CD Status" /></a>
  <img src="https://img.shields.io/badge/Platforms-linux%2Famd64%20%7C%20linux%2Farm64-informational?style=for-the-badge&logo=arm" alt="Multi-Arch Support" />
  <img src="https://img.shields.io/badge/Runtime-Nginx%201.27%20Alpine-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Runtime Nginx" />
</p>

---

## ⚡ Quick Reference

| Item | Details |
| :--- | :--- |
| **Maintained by** | [Guilherme de Souza](https://github.com/guilermiii) ([@devguina](https://hub.docker.com/u/devguina)) |
| **Source Code** | [github.com/guilermiii/site-portifolio](https://github.com/guilermiii/site-portifolio) |
| **Issue Tracker** | [github.com/guilermiii/site-portifolio/issues](https://github.com/guilermiii/site-portifolio/issues) |
| **Supported Platforms** | `linux/amd64`, `linux/arm64` (Native Oracle Cloud Ampere A1 & x86_64) |
| **Runtime Base** | `nginx:1.27-alpine` (Minimal footprint, ~21 MB compressed) |
| **Exposed Port** | `80/tcp` |
| **Healthcheck Endpoint**| `GET http://127.0.0.1:80/healthz` (HTTP 200 OK) |
| **Release Cadence** | Continuous Delivery via GitHub Actions (tagged releases & `latest` on `main`) |

---

## 📖 Overview

**`devguina/site-portifolio`** is an enterprise-grade, high-performance containerized portfolio for **DevOps & Site Reliability Engineers (SRE)**. 

Engineered with a **cloud-native, security-hardened mindset**, it packages a modern Single Page Application (React 18, TypeScript, Tailwind CSS, Vite) served by a heavily optimized, minimal **Nginx 1.27 Alpine** reverse proxy.

### 🌟 Key Highlights
- **Ultra-Lightweight Footprint:** Built using a multi-stage Dockerfile (`node:20-alpine` for asset compilation $\rightarrow$ `nginx:1.27-alpine` for delivery), shedding all build dependencies and package managers to produce a final image size of only **~21.2 MB**.
- **Multi-Architecture Support:** Natively compiled for both **`linux/amd64`** and **`linux/arm64`**, ensuring zero-emulation execution on ARM64 nodes (such as Oracle Cloud Ampere A1 4 OCPU / 24 GB RAM Always-Free instances, AWS Graviton, and Apple Silicon) as well as conventional AMD64 compute.
- **Hardened Security & Headers:** Pre-configured with OWASP-aligned security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Content-Security-Policy`).
- **Cloud-Native Ingress & Real IP Preservation:** Ready for Ingress NGINX Controller and Cloud Load Balancers (OCI Load Balancer, AWS ALB) with automated CIDR-trusted Real-IP parsing (`X-Forwarded-For`).
- **Built-in Health Probe:** Dedicated, zero-log `/healthz` endpoint specifically tuned for Kubernetes Liveness/Readiness probes and Docker daemon health checking.

---

## 🏷️ Supported Tags

- **`latest`**: Tracks the latest validated build on branch `main`.
- **`v*.*.*`** (e.g., `v1.0.0`): Semantic version releases corresponding to GitHub release tags.
- **`<git-sha>`** (e.g., `sha-99dccf6`): Immutable commit hash builds, perfect for GitOps controllers (ArgoCD, FluxCD).

---

## 🚀 How to Use This Image

### 1. Quick Run with Docker CLI

Start the container instantly in detached mode:

```bash
docker run -d \
  --name portfolio \
  --restart unless-stopped \
  -p 8080:80 \
  devguina/site-portifolio:latest
```

Verify the deployment and health status:

```bash
# Check container health status
docker inspect --format='{{json .State.Health.Status}}' portfolio

# Query the internal health probe
curl -I http://localhost:8080/healthz
```

Open your browser at **`http://localhost:8080`**.

---

### 2. Docker Compose (Production-Ready)

Create a `docker-compose.yml` file:

```yaml
services:
  portfolio:
    image: devguina/site-portifolio:latest
    container_name: oci-site-portifolio
    restart: unless-stopped
    ports:
      - "8080:80"
    environment:
      - TZ=America/Sao_Paulo
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://127.0.0.1:80/healthz"]
      interval: 30s
      timeout: 5s
      start_period: 5s
      retries: 3
    deploy:
      resources:
        limits:
          cpus: "0.50"
          memory: 128M
        reservations:
          cpus: "0.10"
          memory: 32M
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

Start the service:

```bash
docker compose up -d
```

---

### 3. Kubernetes Deployment (Cloud Native / OCI OKE / Kubeadm)

Deploy onto Kubernetes with production-grade probes and security contexts:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: site-portifolio
  labels:
    app.kubernetes.io/name: site-portifolio
    app.kubernetes.io/part-of: personal-infra
spec:
  replicas: 2
  selector:
    matchLabels:
      app: site-portifolio
  template:
    metadata:
      labels:
        app: site-portifolio
    spec:
      containers:
        - name: site-portifolio
          image: devguina/site-portifolio:latest
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 80
              name: http
          resources:
            requests:
              cpu: 50m
              memory: 32Mi
            limits:
              cpu: 200m
              memory: 128Mi
          livenessProbe:
            httpGet:
              path: /healthz
              port: http
            initialDelaySeconds: 5
            periodSeconds: 15
            timeoutSeconds: 3
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /healthz
              port: http
            initialDelaySeconds: 2
            periodSeconds: 10
            timeoutSeconds: 2
            failureThreshold: 2
          securityContext:
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
---
apiVersion: v1
kind: Service
metadata:
  name: site-portifolio-svc
spec:
  type: ClusterIP
  selector:
    app: site-portifolio
  ports:
    - name: http
      port: 80
      targetPort: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: site-portifolio-ingress
  annotations:
    kubernetes.io/ingress.class: "nginx"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/proxy-body-size: "20m"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
spec:
  tls:
    - hosts:
        - portfolio.example.com
      secretName: site-portifolio-tls
  rules:
    - host: portfolio.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: site-portifolio-svc
                port:
                  number: 80
```

---

## ⚙️ Architecture & Engineering Design

```
+---------------------------------------------------------------------------------+
|                               BUILD STAGE (Node 20 Alpine)                      |
|  - Source Code (React 18 + TS + Vite + Tailwind)                                |
|  - npm ci -> npm run build -> Compiled static output in /dist                  |
+---------------------------------------------------------------------------------+
                                       │ (COPY --from=builder /app/dist)
                                       ▼
+---------------------------------------------------------------------------------+
|                            RUNTIME STAGE (Nginx 1.27 Alpine)                    |
|  - Pure web server layer (~21 MB)                                               |
|  - Real IP handling (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)                 |
|  - Gzip compression on CSS, JS, JSON, SVGs                                      |
|  - Long-term caching headers on hashed assets (/assets/ -> 1y immutable)        |
|  - SPA Routing Fallback (try_files $uri $uri/ /index.html)                      |
|  - Dedicated probe endpoint: /healthz (access_log off)                          |
+---------------------------------------------------------------------------------+
```

### 🔒 Nginx Security Hardening Included
The internal Nginx configuration has been tuned to provide maximum security out of the box:
```nginx
# Security Headers Base
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';" always;

# Real IP Extraction behind Load Balancers
set_real_ip_from 10.0.0.0/8;
set_real_ip_from 172.16.0.0/12;
set_real_ip_from 192.168.0.0/16;
real_ip_header X-Forwarded-For;
real_ip_recursive on;
```

---

## 🔧 Environment Variables & Volume Customization

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `TZ` | `America/Sao_Paulo` | Configures the system timezone inside the container. |

### Mounting Custom Configuration
To inject your own Nginx virtual host configuration:

```bash
docker run -d \
  -p 8080:80 \
  -v /path/to/custom-nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  devguina/site-portifolio:latest
```

---

## 🛡️ Security & Vulnerability Scanning

- **Base Image:** Built on upstream official `nginx:1.27-alpine` containing only minimal OS packages.
- **CVE Mitigation:** Regular multi-arch builds incorporate the latest security patches from Alpine Linux.
- **Vulnerability Audits:** Scanned with **Aqua Security Trivy** prior to deployment.
- **Zero SUID/Root Daemons:** Nginx worker processes run under unprivileged standard process segregation.

---

## 🔄 CI/CD Pipeline Automation

Every commit pushed to the `main` branch or Git tag (`v*`) triggers an automated pipeline via **GitHub Actions**:
1. **Automated Unit Testing:** Runs Vitest test suite (`npm test`) on Node.js 20.
2. **Bundle Verification:** Typechecks and builds production assets (`npm run build`).
3. **Multi-Arch Compilation:** Builds using `docker/setup-qemu-action` and `docker/setup-buildx-action` for `linux/amd64` and `linux/arm64`.
4. **Registry Push:** Pushes to Docker Hub with GitHub Actions layer caching (`type=gha,mode=max`).
5. **Documentation Sync:** Automatically updates this Docker Hub repository Overview via `peter-evans/dockerhub-description`.

---

## 👨‍💻 Author & Professional Verification

**Guilherme de Souza** — DevOps & SRE Engineer  
Specialized in critical infrastructure, Linux systems, Kubernetes, Cloud Architecture (OCI & AWS), and declarative automation (Terraform).

- 🌐 **Online Portfolio:** [https://github.com/guilermiii/site-portifolio](https://github.com/guilermiii/site-portifolio)
- 💼 **LinkedIn:** [linkedin.com/in/guilherme--desouza](https://www.linkedin.com/in/guilherme--desouza/)
- 📜 **Official Certifications (Credly):** [credly.com/users/guilherme-souza.97d0f101](https://www.credly.com/users/guilherme-souza.97d0f101)
  - **LFCA:** *Linux Foundation Certified IT Associate* (The Linux Foundation)
  - **OCI Foundations:** *Oracle Cloud Infrastructure Certified Foundations Associate* (Oracle)
  - **OCI AI Foundations:** *Oracle Cloud Infrastructure Certified AI Foundations Associate* (Oracle)
  - **Agentic AI Foundations:** *Oracle Agentic AI Foundations Associate* (Oracle)
- ✉️ **Contact:** [guisouzaskill@gmail.com](mailto:guisouzaskill@gmail.com)

---

## 📄 License

This container distribution and source code are open-sourced under the [MIT License](https://github.com/guilermiii/site-portifolio/blob/main/LICENSE).
