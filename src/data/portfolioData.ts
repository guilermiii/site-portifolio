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

export type CredentialType = 'certification' | 'skill_badge';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  date: string;
  validity?: string;
  badgeUrl?: string;
  credlyUrl: string;
  skills: string[];
  type: CredentialType;
  badgeLevel?: string;
}

export interface PromotionStep {
  role: string;
  period: string;
  badge: string;
  badgeType: 'promotion' | 'initial';
  summary: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlight: string;
  promotions?: PromotionStep[];
  achievements?: string[];
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

export interface HomelabInfo {
  server: string;
  cpu: string;
  ram: string;
  motherboard: string;
  hypervisor: string;
  network: string;
  workloads: string[];
  purpose: string;
}

export interface EngineeringPillar {
  id: string;
  icon: 'shield' | 'cloud' | 'terminal' | 'server';
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Guilherme de Souza',
    fullName: 'Guilherme de Souza Mizael de Morais',
    handle: 'guilermiii',
    title: 'DevOps Engineer & SRE | Infraestrutura Crítica & On-Premise',
    headline: 'Confiabilidade, Automação IaC e Arquiteturas Híbridas & Cloud Native',
    location: 'Campo Belo – MG (Disponível para atuação presencial ou remota • Mudança e início imediato)',
    status: 'Operational',
    statusText: 'Disponível: Presencial ou Remoto • Início Imediato',
    email: 'guisouzaskill@gmail.com',
    linkedin: 'https://www.linkedin.com/in/guilherme--desouza/',
    github: 'https://github.com/guilermiii',
    credly: 'https://www.credly.com/users/guilherme-souza.97d0f101',
    resumePdf: '/docs/curriculo-guilherme.pdf',
    bio: 'Olá, sou o Guilherme de Souza. Estudante de Sistemas de Informação (indo para o último período), entusiasta e especialista prático em DevOps e SRE com sólida experiência em ambientes críticos de infraestrutura On-Premise e telecomunicações. Possuo alta proficiência técnica em infraestrutura, redes e automação, com solidez garantida por estudos contínuos e um poderoso homelab bare-metal Xeon X99 com 64 GB RAM. Estou preparado tanto para sustentar o legado quanto para arquitetar a infraestrutura moderna Cloud Native, com histórico comprovado de atuação sob pressão em operações ininterruptas 24/7.',
  },

  homelab: {
    server: 'Servidor Bare-Metal Enterprise Homelab',
    motherboard: 'Placa-Mãe X99 Enterprise',
    cpu: 'Intel Xeon E5-2682 v4 (16 Cores / 32 Threads)',
    ram: '64 GB DDR4 ECC Registered',
    hypervisor: 'Proxmox VE 8 (KVM & LXC)',
    network: 'MikroTik RouterOS Virtualizado + UniFi APs',
    workloads: [
      'Clusters Kubernetes (K3s / Kind)',
      'Laboratório de Chaos Engineering & Resiliência',
      'Testes de Carga & Alta Concorrência',
      'Pipelines Locais CI/CD & Automação Ansible',
      'Stack Observabilidade (Prometheus + Grafana)',
    ],
    purpose: 'Hobby e laboratório avançado de engenharia de confiabilidade, testes práticos sob estresse e validação de arquiteturas antes de deploy em nuvem.',
  } as HomelabInfo,

  telemetry: [
    { label: 'SLA Alvo Produção', value: '99.99%', sub: 'Alta disponibilidade contínua' },
    { label: 'Redução de RPO', value: '24h ➔ 10m', sub: 'Ambiente hospitalar crítico' },
    { label: 'Provedores Hospitalares', value: '140+', sub: 'Sustentação e governança 24/7' },
    { label: 'Cobertura IaC Declarativa', value: '100%', sub: 'Zero manual drift via Terraform' },
  ],

  engineeringPillars: [
    {
      id: 'sre-resilience',
      icon: 'shield',
      badge: 'SRE & RESILIÊNCIA',
      title: 'Alta Confiabilidade 24/7',
      description: 'Sustentação ininterrupta de missão crítica, failover e redução de RPO de 24h para 10 min.',
      tags: ['SLA 99.99%', 'RPO 10m', 'Chaos Eng'],
    },
    {
      id: 'cloud-k8s',
      icon: 'cloud',
      badge: 'CLOUD NATIVE & K8S',
      title: 'Multi-Cloud & Clusters',
      description: 'Arquiteturas resilientes na OCI, AWS e GCP com Kubernetes (ARM64 Ampere & GKE) e Docker Multi-Arch.',
      tags: ['OCI', 'AWS', 'GCP', 'K8s ARM64'],
    },
    {
      id: 'iac-automation',
      icon: 'terminal',
      badge: 'GITOPS & AUTOMAÇÃO',
      title: '100% IaC Declarativo',
      description: 'Infraestrutura automatizada de ponta a ponta via Terraform e CI/CD, eliminando qualquer drift manual.',
      tags: ['Terraform', 'CI/CD', 'GitOps'],
    },
    {
      id: 'baremetal-homelab',
      icon: 'server',
      badge: 'HOMELAB ENTERPRISE',
      title: 'Xeon 32T • 64GB ECC',
      description: 'Servidor bare-metal próprio com Proxmox VE 8, MikroTik e laboratório para validação sob estresse.',
      tags: ['Proxmox VE', 'MikroTik', 'VLANs'],
    },
  ] as EngineeringPillar[],

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
      title: 'LFCA: Linux Foundation Certified IT Associate',
      issuer: 'The Linux Foundation',
      code: 'LF-2026',
      date: '10/2026',
      validity: 'Válido até 07/10/2028',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Linux Kernel & CLI', 'System Administration', 'Network Architecture', 'Storage & Security', 'Cloud Fundamentals'],
      type: 'certification',
      badgeLevel: 'Exame Oficial Proctored',
    },
    {
      id: 'oci-foundations',
      title: 'Oracle Cloud Infrastructure Certified Foundations Associate',
      issuer: 'Oracle',
      code: 'OCI-FA-2024',
      date: '2024',
      validity: 'Credencial Oficial Ativa',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['OCI Core Services', 'VCN & Networking', 'IAM & Security', 'Autonomous Database', 'Storage & Compute'],
      type: 'certification',
      badgeLevel: 'Certificação Oficial Associate',
    },
    {
      id: 'oci-ai',
      title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
      issuer: 'Oracle',
      code: 'OCI-AI-2024',
      date: '2024',
      validity: 'Credencial Oficial Ativa',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['AI & ML Foundations', 'OCI AI Services', 'Generative AI Concepts', 'Data Science Workflows'],
      type: 'certification',
      badgeLevel: 'Certificação Oficial Associate',
    },
    {
      id: 'oracle-agentic-ai',
      title: 'Oracle Agentic AI Foundations Associate',
      issuer: 'Oracle',
      code: 'AGENTIC-AI-2024',
      date: '2024',
      validity: 'Credencial Oficial Ativa',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Autonomous Agents', 'LLM Orchestration', 'Multi-Agent Workflows', 'Tool Integration'],
      type: 'certification',
      badgeLevel: 'Certificação Oficial Associate',
    },
    {
      id: 'gcp-k8s-deploy',
      title: 'Deploy Kubernetes Applications on Google Cloud',
      issuer: 'Google Cloud',
      code: 'GCP-K8S-DEP',
      date: '11/2026',
      validity: 'Selo Oficial Conquistado',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Google Kubernetes Engine (GKE)', 'Docker Containers', 'Kubectl CLI', 'Continuous Delivery', 'Microservices'],
      type: 'skill_badge',
      badgeLevel: 'Skill Badge Hands-On (GKE)',
    },
    {
      id: 'gcp-k8s-manage',
      title: 'Manage Kubernetes in Google Cloud',
      issuer: 'Google Cloud',
      code: 'GCP-K8S-MNG',
      date: '11/2026',
      validity: 'Selo Oficial Conquistado',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['GKE Multi-Cluster', 'Workload Optimization', 'Cluster Autoscaling', 'Observability'],
      type: 'skill_badge',
      badgeLevel: 'Skill Badge Hands-On (GKE)',
    },
    {
      id: 'gcp-secure-net',
      title: 'Build a Secure Google Cloud Network',
      issuer: 'Google Cloud',
      code: 'GCP-NET-SEC',
      date: '10/2026',
      validity: 'Selo Oficial Conquistado',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Cloud VPC', 'Firewall Rules', 'Private Google Access', 'Cloud Armor', 'Zero-Trust Network'],
      type: 'skill_badge',
      badgeLevel: 'Skill Badge Hands-On (VPC)',
    },
    {
      id: 'gcp-load-balancing',
      title: 'Implement Load Balancing on Compute Engine',
      issuer: 'Google Cloud',
      code: 'GCP-LB',
      date: '10/2026',
      validity: 'Selo Oficial Conquistado',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['HTTP(S) Load Balancer', 'High Availability', 'Traffic Distribution', 'Compute Engine'],
      type: 'skill_badge',
      badgeLevel: 'Skill Badge Hands-On (Traffic)',
    },
    {
      id: 'cisco-cyber',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      code: 'CISCO-SEC',
      date: '08/2026',
      validity: 'Selo Oficial Conquistado',
      credlyUrl: 'https://www.credly.com/users/guilherme-souza.97d0f101',
      skills: ['Threat Detection', 'Network Defense', 'Data Privacy', 'Security Compliance'],
      type: 'skill_badge',
      badgeLevel: 'Academy Digital Badge',
    },
  ] as Certification[],

  experience: [
    {
      company: 'Unimed Cooperativa de Trabalho Médico – Campo Belo/MG',
      role: 'Analista de TI (Trajetória com 2 Promoções Consecutivas)',
      period: '02/2025 – 25/08/2026 • 1 ano 7 meses',
      location: 'Campo Belo – MG',
      highlight: 'Crescimento acelerado na maior cooperativa médica da região: 2 promoções consecutivas por mérito técnico, liderança na sustentação 24/7 e entregas de missão crítica.',
      promotions: [
        {
          role: 'Analista de TI',
          period: '04/2026 – 25/08/2026',
          badge: '2ª Promoção por Mérito (Abril)',
          badgeType: 'promotion',
          summary: 'Telemetria avançada, otimização de computação em servidores, gestão de ativos/fornecedores e governança.',
          highlights: [
            'Implantação e customização da stack de monitoramento Zabbix 7 LTS para telemetria em tempo real de servidores, switches e serviços críticos.',
            'Otimização avançada de máquinas virtuais e alocação dinâmica de recursos computacionais nos clusters de virtualização.',
            'Auditoria técnica, conformidade e otimização de licenciamento Microsoft em escala corporativa.',
            'Planejamento, homologação e liderança técnica no projeto de renovação de 70% de todo o parque de microcomputadores da Unimed.',
            'Gerenciamento técnico de parceiros estratégicos, fornecedores de tecnologia e controle de contratos de SLA.',
            'Apoio técnico consultivo à DPO da empresa nas exigências de arquitetura e conformidade com a LGPD.',
            'Sustentação ininterrupta 24/7 de sistemas hospitalares e APIs on-premises para mais de 140 hospitais, clínicas, laboratórios e médicos credenciados.',
          ],
        },
        {
          role: 'Analista de Infraestrutura de Redes',
          period: '04/2025 – 03/2026',
          badge: '1ª Promoção por Mérito',
          badgeType: 'promotion',
          summary: 'Virtualização Proxmox/Hyper-V, Veeam Backup RPO 10m, engenharia de redes corporativas e perímetro.',
          highlights: [
            'Redução histórica do RPO (Recovery Point Objective) de 24 horas para 10 minutos em sistemas vitais de autorização e gestão médica.',
            'Implantação e gestão corporativa do Veeam Backup & Replication em todos os servidores críticos com testes semanais de restore e runbooks.',
            'Migração e modernização de servidores legados VMware para clusters virtualizados Proxmox VE e Hyper-V de alta disponibilidade.',
            'Projeto, especificação e execução completa de cabeamento estruturado e redes do novo Centro Médico Unimed.',
            'Reestruturação de rede lógica com switches gerenciados L2/L3 e segmentação de tráfego crítico via VLANs.',
            'Dimensionamento e implantação de rede Wi-Fi corporativa de alta densidade com Pontos de Acesso UniFi Gerenciados.',
            'Criação e administração de túneis VPN IPsec site-to-site e client-to-site com MikroTik RouterOS interligando filiais e parceiros.',
            'Implantação de Proxy Reverso Nginx e proteção cibernética de endpoints com agentes EDR/XDR corporativos.',
            'Sustentação ininterrupta 24/7 de sistemas hospitalares e APIs on-premises para mais de 140 hospitais, clínicas, laboratórios e médicos credenciados.',
          ],
        },
        {
          role: 'Auxiliar de TI',
          period: '02/2025 – 03/2025',
          badge: 'Ingresso na Empresa (2 meses)',
          badgeType: 'initial',
          summary: 'Suporte técnico aos cooperados, auditoria de inventário, implantação do GLPI e governança ITIL.',
          highlights: [
            'Atendimento ágil a chamados de suporte técnico para usuários internos e prestadores externos da cooperativa.',
            'Inventário minucioso de ativos de hardware e licenças de software, identificando gargalos e oportunidades de melhoria.',
            'Implantação e parametrização completa da plataforma GLPI.',
            'Governança operacional estruturada com framework ITIL na plataforma GLPI, definindo catálogos e SLAs rígidos.',
            'Sustentação ininterrupta 24/7 de sistemas hospitalares e APIs on-premises para mais de 140 hospitais, clínicas, laboratórios e médicos credenciados.',
          ],
        },
      ],
      techStack: [
        'Zabbix 7 LTS',
        'Proxmox VE',
        'VMware ESXi',
        'Hyper-V',
        'Veeam Backup & Replication',
        'MikroTik RouterOS',
        'UniFi Enterprise',
        'Switches L2/L3 Gerenciados',
        'VLANs',
        'Proxy Reverso Nginx',
        'GLPI / ITIL',
        'Microsoft 365',
        'EDR/XDR',
        'Linux Server',
        'LGPD',
      ],
    },
    {
      company: 'Stratus Telecomunicações – Campo Belo/MG',
      role: 'Analista de Telecomunicações Interno',
      period: '03/2023 – 12/2024 • 1 ano 10 meses',
      location: 'Campo Belo – MG',
      highlight: 'Suporte corporativo L2/L3 para redes de transporte metropolitano e infraestrutura óptica de alta densidade.',
      achievements: [
        'Suporte técnico corporativo avançado L2/L3 para redes metropolitanas, corporativas e domésticas em conexões de fibra óptica e rádio.',
        'Suporte consultivo e diagnóstico a equipes externas de campo em redes EPON e GPON, tratamento de looping de rede, atenuação óptica, expansão de sinal e hotspots.',
        'Atuação direta em contingência e incidentes críticos de infraestrutura óptica (rompimentos de enlaces e falhas de transmissão), garantindo cumprimento de SLAs contratuais de transporte de dados.',
      ],
      techStack: ['Redes EPON / GPON', 'Switches L2/L3', 'Roteamento IP', 'Fibra Óptica', 'QoS & SLA', 'Diagnóstico L2/L3', 'Telecom'],
    },
  ] as Experience[],

  education: [
    {
      id: 'unopar',
      institution: 'Universidade Norte do Paraná (UNOPAR)',
      degree: 'Bacharelado em Sistemas de Informação',
      period: '2024 – 1º Semestre de 2027 (Previsão)',
      status: 'Cursando (Previsão no 1º Semestre de 2027 • Cursará o Último Período)',
      details: 'Formação superior com ênfase em Engenharia de Software, Arquitetura de Sistemas Distribuídos, Redes, Governança de TI e Banco de Dados.',
    },
    {
      id: 'cefet',
      institution: 'Centro Federal de Educação Tecnológica (CEFET)',
      degree: 'Curso Técnico em Informática',
      period: '2023 – 2024',
      status: 'Concluído',
      details: 'Formação técnica sólida em Redes de Computadores, Sistemas Operacionais, Arquitetura de Hardware e Manutenção de Infraestrutura. Carga Horária: 1.320 horas.',
    },
  ] as Education[],

  skills: [
    {
      category: 'Cloud & Virtualização',
      items: ['Oracle Cloud (OCI)', 'Amazon Web Services (AWS)', 'Google Cloud (GCP)', 'Proxmox VE', 'VMware ESXi', 'Hyper-V'],
    },
    {
      category: 'Contêineres & Orquestração',
      items: ['Kubernetes (GKE/K3s/Kind)', 'Docker', 'Docker Compose', 'Podman', 'Helm'],
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
      items: ['MikroTik RouterOS', 'UniFi Enterprise', 'VPN IPsec / WireGuard', 'VLAN & Subnetting', 'Nginx Reverse Proxy', 'EDR/XDR', 'Zero-Trust'],
    },
    {
      category: 'Bare-Metal & Governança',
      items: ['Servidores Xeon X99 Bare-Metal', 'Veeam Backup & Replication', 'Governança ITIL', 'GLPI Service Desk', 'Microsoft 365', 'LGPD'],
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
