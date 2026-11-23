#!/usr/bin/env bash
# ==============================================================================
# Script: build-multiarch.sh
# Finalidade: Compilar imagem Docker multi-arquitetura (ARM64 e AMD64)
# Alvo: Cluster Kubeadm ARM64 (Oracle Cloud Ampere A1) e nós AMD64
# ==============================================================================

set -euo pipefail

IMAGE_NAME="${1:-oci-site-portifolio}"
IMAGE_TAG="${2:-latest}"
FULL_IMAGE="${IMAGE_NAME}:${IMAGE_TAG}"

echo "=========================================================="
echo " 🚀 Iniciando Build Multi-Arquitetura: linux/amd64,linux/arm64"
echo " 📦 Imagem: ${FULL_IMAGE}"
echo "=========================================================="

# 1. Executar testes automatizados antes do build
echo "🧪 [1/4] Executando suíte de testes automatizados..."
npm test

# 2. Verificar suporte a buildx e criar builder com driver docker-container se necessário
BUILDER_NAME="multiarch-builder"

if ! docker buildx inspect "${BUILDER_NAME}" >/dev/null 2>&1; then
    echo "🔧 [2/4] Criando instância de builder Buildx com suporte multi-arch (${BUILDER_NAME})..."
    docker buildx create --name "${BUILDER_NAME}" --driver docker-container --bootstrap --use
else
    echo "✅ [2/4] Utilizando builder existente: ${BUILDER_NAME}"
    docker buildx use "${BUILDER_NAME}"
fi

# 3. Compilar imagem multi-arquitetura
echo "🏗️ [3/4] Compilando para plataformas linux/amd64 e linux/arm64..."
docker buildx build \
    --platform linux/amd64,linux/arm64 \
    --tag "${FULL_IMAGE}" \
    .

echo "=========================================================="
echo " ✅ Build Multi-Arch concluído com sucesso!"
echo " 💡 Para publicar em um registry (ex: GHCR ou Docker Hub):"
echo "    docker buildx build --platform linux/amd64,linux/arm64 -t <registry>/<user>/${FULL_IMAGE} --push ."
echo "=========================================================="
