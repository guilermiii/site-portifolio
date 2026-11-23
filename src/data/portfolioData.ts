export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'observability' | 'distributed' | 'all';
  categoryLabel: string;
  description: string;
  metrics?: string;
  architecture: string[];
  tags: string[];
  githubUrl: string;
  status: 'Production' | 'Active Lab' | 'Complete';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  date: string;
  badgeUrl?: string;
  credlyUrl: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlight: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Guilherme de Souza',
    fullName: 'Guilherme de Souza Mizael de Morais',
    handle: 'guilermiii',
    title: 'DevOps Engineer & SRE | Infraestrutura Crítica & On-Premise',
    headline: 'Confiabilidade, Automação IaC e Arquiteturas Híbridas & Cloud Native',
    location: 'Campo Belo – MG (Disponibilidade para Mudança e Remoto)',
    status: 'Operational',
    statusText: 'Disponível para Projetos Críticos & Oportunidades',
    email: 'guisouzaskill@gmail.com',
    linkedin: 'https://www.linkedin.com/in/guilherme--desouza/',
    github: 'https://github.com/guilermiii',
    credly: 'https://www.credly.com/users/guilherme-souza.97d0f101',
    resumePdf: '/docs/curriculo-guilherme.pdf',
    bio: 'Profissional de Tecnologia com sólida atuação em ambientes de missão crítica de alta complexidade (24/7), especializado na gestão, segurança e modernização de infraestrutura on-premises e em nuvem. Experiência comprovada na redução de RPO de 24h para 10 min, backup corporativo com Veeam, virtualização bare-metal (Proxmox VE, VMware, Hyper-V), redes gerenciadas multi-vendor (MikroTik, UniFi, switches L2/L3), governança operacional ITIL com GLPI, automação declarativa com Terraform, conteinerização Docker/Kubernetes e nuvem OCI/AWS.',
  },

  telemetry: [
    { label: 'SLA Alvo Produção', value: '99.99%', sub: 'Alta disponibilidade contínua' },
    { label: 'Redução de RPO', value: '24h ➔ 10m', sub: 'Ambiente hospitalar crítico' },
    { label: 'Provedores Hospitalares', value: '140+', sub: 'Sustentação e governança 24/7' },
    { label: 'Cobertura IaC Declarativa', value: '100%', sub: 'Zero manual drift via Terraform' },
  ],

  projects: [
    {
      id: 'monitoring-always-free-oci',
      title: 'Monitoring Always Free OCI',
      category: 'observability',
      categoryLabel: 'Observabilidade & Cloud',
      description: 'Dashboard conteinerizado para auditoria contínua, governança e monitoramento dos limites da Oracle Cloud Always Free. Detecção de instâncias órfãs, telemetria em tempo real e resposta em cache volátil ultra-rápida.',
      metrics: 'Resposta em cache < 3ms | 100% conteinerizado',
      architecture: ['Oracle Cloud OCI', 'FastAPI', 'React 18', 'Redis 7', 'Nginx', 'Docker Compose', 'Prometheus'],
      tags: ['OCI', 'Redis', 'Docker', 'FastAPI', 'Observability', 'Prometheus'],
      githubUrl: 'https://github.com/guilermiii/monitoring-always-free-oci',
      status: 'Production',
    },
    {
      id: 'nsse-iac',
      title: 'NSSE IaC - AWS Architecture Multi-AZ',
      category: 'cloud',
      categoryLabel: 'Cloud & IaC',
      description: 'Provisionamento automatizado de infraestrutura resiliente na AWS utilizando Terraform. Isolamento Multi-AZ com subnets públicas e privadas, Auto Scaling Groups (ASG), acesso Zero-Trust via AWS Systems Manager (SSM) sem IPs públicos nas instâncias e S3 State Locking com use_lockfile.',
      metrics: 'Zero-Trust Bastionless | S3 State Lock nativo',
      architecture: ['AWS Multi-AZ', 'Terraform', 'Auto Scaling', 'AWS SSM', 'VPC Peering', 'S3 + DynamoDB'],
      tags: ['AWS', 'Terraform', 'Zero-Trust', 'Security', 'IaC', 'ASG'],
      githubUrl: 'https://github.com/guilermiii/nsse-iac',
      status: 'Production',
    },
    {
      id: 'iac-oci',
      title: 'IaC OCI - Kubernetes ARM Ampere A1',
      category: 'cloud',
      categoryLabel: 'Cloud & IaC',
      description: 'Arquitetura completa de cluster Kubernetes em processadores ARM Ampere A1 (4 OCPUs, 24 GB RAM) na Oracle Cloud. Subnet privada isolada, NAT Gateway, OCI Bastion Service gerenciado e balanceamento de carga totalmente provisionados via código.',
      metrics: '4 OCPUs ARM64 | 24GB RAM | 100% Terraform',
      architecture: ['Oracle Cloud OCI', 'Terraform', 'Kubernetes', 'ARM64 Ampere', 'OCI Bastion', 'VCN'],
      tags: ['OCI', 'Kubernetes', 'ARM64', 'Terraform', 'Bastion', 'DevOps'],
      githubUrl: 'https://github.com/guilermiii/iac-oci',
      status: 'Production',
    },
    {
      id: 'flash-sale-chaos-lab-cap',
      title: 'Flash Sale Chaos Lab (CAP Theorem)',
      category: 'distributed',
      categoryLabel: 'Sistemas Distribuídos & SRE',
      description: 'Laboratório prático de Chaos Engineering simulando cenários extremos de flash sale e partição de rede. Avaliação prática do Teorema CAP, tolerância a partições (Network Partitioning) e degradação controlada de serviços.',
      metrics: 'Chaos Engineering | Simulação de Partição de Rede',
      architecture: ['Docker', 'Chaos Engineering', 'Distributed Systems', 'CAP Theorem', 'Python', 'Redis'],
      tags: ['Chaos Engineering', 'SRE', 'CAP Theorem', 'Resilience', 'High Concurrency'],
      githubUrl: 'https://github.com/guilermiii/flash-sale-chaos-lab-cap',
      status: 'Active Lab',
    },
    {
      id: 'cold-chain-guard-pacelc',
      title: 'Cold Chain Guard (PACELC Protocol)',
      category: 'distributed',
      categoryLabel: 'Sistemas Distribuídos & SRE',
      description: 'Simulação e implementação de sistema distribuído de monitoramento de cadeia fria de medicamentos aplicando o Teorema PACELC. Equilíbrio entre latência e consistência estrita durante falhas de conectividade e recuperação de estado.',
      metrics: 'PACELC Compliance | Event Sourcing & Offline Sync',
      architecture: ['Distributed Systems', 'PACELC', 'Reliability', 'Python', 'MQTT/Queue', 'Resilience'],
      tags: ['Distributed Systems', 'PACELC', 'SRE', 'Architecture', 'Consistency'],
      githubUrl: 'https://github.com/guilermiii/cold-chain-guard-pacelc',
      status: 'Active Lab',
    },
  ] as Project[],

  certifications: [
    {
      id: 'lfca',
      title: 'Linux Foundation Certified IT Associate (LFCA)',
      issuer: 'The Linux Foundation',
      code: 'LFCA-2024',
      date: '2024',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Linux Kernel & CLI', 'System Administration', 'Security Fundamentals', 'Networking', 'Cloud Basics'],
    },
    {
      id: 'oci-foundations',
      title: 'Oracle Cloud Infrastructure Certified Foundations Associate',
      issuer: 'Oracle',
      code: 'OCI-FA-2024',
      date: '2024',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['OCI Core Services', 'VCN & Networking', 'IAM & Security', 'Autonomous Database', 'Storage & Compute'],
    },
    {
      id: 'oci-ai',
      title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
      issuer: 'Oracle',
      code: 'OCI-AI-2024',
      date: '2024',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['AI & ML Foundations', 'OCI AI Services', 'Generative AI Concepts', 'Data Science Workflows'],
    },
    {
      id: 'oracle-agentic-ai',
      title: 'Oracle Agentic AI Foundations Associate',
      issuer: 'Oracle',
      code: 'AGENTIC-AI-2024',
      date: '2024',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Autonomous Agents', 'LLM Orchestration', 'Multi-Agent Workflows', 'Tool Integration'],
    },
  ] as Certification[],

  experience: [
    {
      company: 'Unimed Cooperativa de Trabalho Médico – Campo Belo/MG',
      role: 'Auxiliar de TI → Analista de Infraestrutura de Redes → Analista de TI',
      period: '02/2025 – 06/2026',
      location: 'Campo Belo – MG',
      highlight: 'Sustentação contínua 24/7 de ecossistema hospitalar de saúde, governança ITIL e modernização de infraestrutura on-premises para mais de 140 hospitais e prestadores credenciados.',
      achievements: [
        'Redução drástica do RPO (Recovery Point Objective) de 24 horas para apenas 10 minutos em sistemas de saúde vitais.',
        'Implantação completa do Veeam Backup & Replication em todos os servidores críticos on-premises, com testes semanais de restauração e runbooks técnicos padronizados.',
        'Migração e modernização de servidores legados VMware para clusters virtualizados Proxmox VE e Hyper-V com alta disponibilidade.',
        'Implantação da plataforma GLPI para gestão de incidentes, catálogo de serviços e SLAs contratuais alinhados ao framework ITIL.',
        'Projeto e execução de cabeamento estruturado e infraestrutura de rede completa para o novo Centro Médico Unimed.',
        'Reestruturação de rede lógica com switches gerenciados, segmentação de VLANs e pontos de acesso UniFi corporativos.',
        'Criação e gerenciamento de túneis VPN IPsec site-to-site e client-to-site com MikroTik RouterOS interligando unidades e parceiros.',
        'Auditoria e otimização de licenciamento Microsoft 365 e Windows Server, além da elaboração de políticas de segurança da informação e POPs operacionais.',
        'Implantação de Proxy Reverso Nginx e proteção cibernética corporativa com agentes EDR/XDR.',
        'Sustentação crítica 24/7 de sistemas de autorização hospitalar, gestão e APIs on-premises para mais de 140 hospitais, clínicas, laboratórios e prestadores credenciados, atuando como apoio técnico à DPO na LGPD.',
      ],
      techStack: ['Proxmox VE', 'VMware ESXi', 'Hyper-V', 'Veeam Backup & Replication', 'MikroTik RouterOS', 'UniFi Enterprise', 'Switches Gerenciados', 'VLANs', 'Proxy Reverso Nginx', 'ITIL / GLPI', 'Microsoft 365', 'EDR/XDR', 'Linux Server', 'LGPD'],
    },
    {
      company: 'Stratus Telecomunicações – Campo Belo/MG',
      role: 'Analista de Telecomunicações Interno',
      period: '03/2023 – 12/2024',
      location: 'Campo Belo – MG',
      highlight: 'Suporte avançado L2/L3 para redes de transporte metropolitano e infraestrutura óptica de alta densidade.',
      achievements: [
        'Suporte técnico corporativo avançado L2/L3 para redes metropolitanas, corporativas e domésticas em conexões de fibra óptica e rádio.',
        'Suporte consultivo e diagnóstico a equipes externas de campo em redes EPON e GPON, tratamento de looping de rede, atenuação óptica, expansão de sinal e hotspots.',
        'Atuação direta em contingência e incidentes críticos de infraestrutura óptica (rompimentos de fibras e falhas de transmissão), garantindo cumprimento de SLAs contratuais de transporte de dados.',
      ],
      techStack: ['Redes EPON / GPON', 'Switches L2/L3', 'Roteamento IP', 'Fibra Óptica', 'QoS & SLA', 'Diagnóstico L2/L3', 'Telecom'],
    },
  ] as Experience[],

  education: [
    {
      id: 'unopar',
      institution: 'Universidade Norte do Paraná (UNOPAR)',
      degree: 'Bacharelado em Sistemas de Informação',
      period: '2024 – 2027 (Previsão de Conclusão)',
      status: 'Cursando (6º Semestre)',
      details: 'Formação superior com ênfase em Engenharia de Software, Arquitetura de Sistemas Distribuídos, Redes, Governança de TI e Banco de Dados.',
    },
    {
      id: 'cefet',
      institution: 'Centro Federal de Educação Tecnológica (CEFET)',
      degree: 'Curso Técnico em Informática',
      period: '2023 – 2024',
      status: 'Concluído',
      details: 'Formação técnica sólida em Redes de Computadores, Sistemas Operacionais, Arquitetura de Hardware e Manutenção de Infraestrutura.',
    },
  ] as Education[],

  skills: [
    {
      category: 'Cloud & Virtualização',
      items: ['Oracle Cloud (OCI)', 'Amazon Web Services (AWS)', 'Proxmox VE', 'VMware ESXi', 'Hyper-V'],
    },
    {
      category: 'Contêineres & Orquestração',
      items: ['Kubernetes (K8s)', 'Docker', 'Docker Compose', 'Podman', 'K3s / Kind', 'Helm'],
    },
    {
      category: 'IaC & Automação CI/CD',
      items: ['Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI', 'Shell Script / Bash', 'Python'],
    },
    {
      category: 'Observabilidade & Confiabilidade',
      items: ['Prometheus', 'Grafana', 'Redis Exporter', 'Chaos Engineering', 'SLO / SLA / SLI', 'Post-Mortem'],
    },
    {
      category: 'Redes & Segurança',
      items: ['MikroTik RouterOS', 'UniFi Enterprise', 'VPN IPsec / WireGuard', 'VLAN & Subnetting', 'Nginx Reverse Proxy', 'Zero-Trust'],
    },
    {
      category: 'Sistemas Operacionais & Governança',
      items: ['Linux (Debian/Ubuntu/RHEL/Alpine)', 'Governança ITIL', 'GLPI Service Desk', 'Active Directory', 'EDR/XDR'],
    },
  ],

  pipelineSteps: [
    {
      id: 1,
      name: 'Git Commit',
      phase: 'Source',
      tool: 'Git / Conventional Commits',
      description: 'Desenvolvimento padronizado com branches protegidas e commits semânticos.',
    },
    {
      id: 2,
      name: 'Lint & Security Scan',
      phase: 'CI Validate',
      tool: 'GitHub Actions + Trivy',
      description: 'Validação estática de código, auditoria de vulnerabilidades em dependências e IaC linting.',
    },
    {
      id: 3,
      name: 'Multi-Arch Build',
      phase: 'Package',
      tool: 'Docker Multi-Stage (Buildx)',
      description: 'Compilação otimizada para arquiteturas x86_64 e ARM64 Ampere com imagem final < 30MB.',
    },
    {
      id: 4,
      name: 'Container Registry',
      phase: 'Artifact',
      tool: 'OCI Registry / GHCR',
      description: 'Armazenamento de imagens assinadas e escaneadas com tags imutáveis.',
    },
    {
      id: 5,
      name: 'IaC & GitOps CD',
      phase: 'Delivery',
      tool: 'Terraform & ArgoCD',
      description: 'Provisionamento automatizado de recursos OCI e sincronização declarativa contínua.',
    },
    {
      id: 6,
      name: 'K8s ARM Production',
      phase: 'Runtime',
      tool: 'Kubernetes OCI Ampere A1',
      description: 'Execução de workloads isolados em subnets privadas com balanceador de carga gerenciado.',
    },
    {
      id: 7,
      name: 'Observability & SLA',
      phase: 'Telemetry',
      tool: 'Prometheus + Grafana',
      description: 'Métricas em tempo real, alertas de saturação de recursos e validação contínua de SLO.',
    },
  ],
};
