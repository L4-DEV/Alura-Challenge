# 📊 Projeto de Análise de Churn – TelecomX

Este repositório contém meu projeto realizado durante o desafio da **Alura**. O objetivo principal foi analisar a evasão de clientes (churn) da empresa fictícia **TelecomX**, identificando padrões de comportamento e gerando insights estratégicos para redução do churn.

---

## 📁 Estrutura do Projeto

- `notebooks/` – Contém os notebooks Jupyter utilizados na análise
- `imagens/` – Contém as imagens estáticas dos gráficos gerados
- `README.md` – Este arquivo com as informações do projeto

---

## 🔍 Objetivo

A **TelecomX** enfrenta um alto índice de cancelamento de clientes sem entender claramente os motivos. Este projeto realizou:

- Extração, Transformação e Carga (ETL) da base de dados
- Análise Exploratória de Dados (EDA)
- Geração de insights sobre o perfil dos clientes que evadem
- Recomendações de retenção com base nos achados

---

## 🔧 Tecnologias Utilizadas

- Python 3.11+
- Pandas
- NumPy
- Plotly
- Seaborn
- Matplotlib
- Jupyter Notebook

---

## 📊 Principais Análises Realizadas

- **Churn por tempo de contrato:** contratos mensais apresentam os maiores índices de churn.
- **Perfil demográfico:** idosos, clientes sem parceiro ou dependentes têm maior chance de evadir.
- **Serviços adicionais:** ausência de serviços como backup ou segurança está relacionada a maior churn.
- **Método de pagamento:** "Electronic check" e "Paperless billing" possuem maior churn. Métodos automáticos como cartão ou débito reduzem churn.
- **Tenure:** clientes tendem a sair principalmente nos 11 primeiros meses.

---

## 🧠 Principais Conclusões

- Clientes com contratos mensais e sem serviços adicionais apresentam maior risco de churn.
- Idosos pagam mais e enfrentam mais dificuldades com os serviços, justificando churn elevado.
- Clientes com parceiros ou dependentes têm churn consideravelmente menor.
- Incentivos para fidelização (descontos em combos, contratos longos) podem reduzir significativamente a evasão.

---

## 💡 Recomendações

- Criar planos familiares com benefícios para dependentes e parceiros.
- Oferecer **descontos para contratos anuais** e **combos de serviços adicionais**.
- Desenvolver planos com suporte e valor reduzido para **clientes idosos**.
- Promover incentivos para **pagamentos automáticos**.
- Realizar campanhas de retenção focadas nos primeiros 12 meses de contrato.
- Implantar programas de **indique e ganhe** para atrair familiares e amigos.

---

## 📎 Fonte de Dados

- Os dados foram obtidos a partir do repositório oficial do desafio da Alura:
  [https://raw.githubusercontent.com/alura-cursos/challenge2-data-science/refs/heads/main/TelecomX_Data.json](https://raw.githubusercontent.com/alura-cursos/challenge2-data-science/refs/heads/main/TelecomX_Data.json)

---

## 📸 Observação

Como gráficos interativos Plotly não são exibidos corretamente no GitHub, **optamos por salvar versões estáticas** (PNG) dos gráficos mais relevantes na pasta `/imagens`.

---

## ✍️ Autor

Projeto desenvolvido por Lucas Wendel Neves Silva como parte do desafio da Alura Data Science.

---

