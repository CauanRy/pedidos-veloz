📦 Pedidos Veloz

Sistema de microserviços desenvolvido para demonstrar conceitos modernos de arquitetura de software e práticas DevOps, utilizando:

Docker

Docker Compose

Kubernetes

CI/CD

HPA (Horizontal Pod Autoscaler)

📌 Objetivo do Projeto

Este projeto tem como finalidade demonstrar:

Containerização de aplicações

Arquitetura baseada em microserviços

Orquestração com Kubernetes

Escalabilidade automática

Integração contínua e entrega contínua (CI/CD)

Mesmo sendo uma aplicação simples, ela simula a estrutura utilizada em sistemas reais de empresas modernas.

🏗 Arquitetura do Sistema

O sistema foi dividido em quatro microserviços:

Gateway → Responsável por centralizar as requisições

Pedidos → Gerencia os pedidos

Pagamentos → Processa pagamentos

Estoque → Controla o estoque

Cada serviço é independente e roda em seu próprio container.

Essa abordagem facilita:

Manutenção

Escalabilidade

Organização do código

Atualizações isoladas

🐳 Docker

Cada microserviço possui um Dockerfile responsável por:

Definir a imagem base (Node.js 20 Alpine)

Copiar arquivos do projeto

Instalar dependências

Definir o comando de execução

Subindo o projeto com Docker Compose
docker compose up --build


Esse comando:

Constrói as imagens

Cria os containers

Inicia todos os serviços simultaneamente

☸ Kubernetes

Após a etapa com Docker, o sistema foi preparado para rodar em Kubernetes.

Foram criados:

Deployments

Services

Namespace

HPA

Aplicando os manifests
kubectl apply -f k8s/

Verificando pods
kubectl get pods

📈 HPA — Horizontal Pod Autoscaler

O HPA permite que a aplicação escale automaticamente com base no uso de CPU.

Se a demanda aumentar:

→ O Kubernetes cria novos pods automaticamente.

Se a demanda diminuir:

→ O número de pods é reduzido.

Isso garante:

Melhor performance

Uso eficiente de recursos

Escalabilidade automática

🔁 CI/CD

O projeto utiliza GitHub Actions para automação.

A cada push no repositório:

O pipeline é executado

O build é validado

As etapas configuradas são rodadas automaticamente

Isso simula um ambiente profissional de integração contínua.

📊 Monitoramento (Opcional)

Pode ser integrado com:

Prometheus

Grafana

Para visualização de métricas como:

Uso de CPU

Uso de memória

Status dos pods

🚀 Tecnologias Utilizadas

Node.js

Docker

Docker Compose

Kubernetes

GitHub Actions

Minikube

🎯 Conceitos Demonstrados

Microserviços

Containerização

Orquestração

Escalabilidade horizontal

Automação de pipeline

Infraestrutura como código

📚 Estrutura do Projeto
pedidos-veloz/
│
├── gateway/
├── pedidos/
├── pagamentos/
├── estoque/
│
├── k8s/
│   ├── pedidos.yaml
│   ├── pagamentos.yaml
│   ├── estoque.yaml
│   ├── gateway.yaml
│
├── docker-compose.yml
└── README.md

🏁 Conclusão

Este projeto demonstra a aplicação prática de conceitos fundamentais de DevOps e arquitetura moderna de software.

Ele simula como aplicações reais são estruturadas em ambientes corporativos, utilizando containers, orquestração e automação de deploy.
