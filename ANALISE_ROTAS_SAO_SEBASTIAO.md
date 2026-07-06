# Análise de Rotas - São Sebastião do Passé x Fábrica
**Mapeamento de Serviço de Transporte - Orçamento**

---

## 📊 RESUMO EXECUTIVO

| Métrica | Detalhes |
|---------|----------|
| **Localidade** | São Sebastião do Passé, BA |
| **Tipo de Serviço** | Transporte de funcionários (Fábrica) |
| **Turnos** | 3 turnos (A, B, C) |
| **Tipos de Veículos** | Ônibus + Micro-ônibus |
| **Data de Análise** | Julho 2026 |

---

## 🚌 ESTRUTURA DE TURNOS

### **TURNO A**
- **Horário:** 13:10h (saída da Fábrica)
- **Veículo:** Ônibus
- **Rota:** Fábrica → Padaria do Penão → Rototária Urbis → Ponto Agostinho Amaral → INSS → Real Calçados (Centro) → Posto Larco → Ponto do Cemitério na BR-110
- **Tipo:** Chegada/Ida

### **TURNO B**
- **Horário:** 00:00h (saída da Fábrica)
- **Veículo:** Ônibus
- **Rota:** Fábrica → Padaria do Penão → Rototária Urbis → Alegre → Quarta Etapa → Ponto Agostinho Amaral → INSS → Real Calçados (Centro) → Jangada → Posto Larco → Araçatiba
- **Tipo:** Chegada/Ida

### **TURNO C**
- **Horário:** 07:10h (saída da Fábrica)
- **Veículo:** Ônibus
- **Rota:** Fábrica → Padaria do Penão → Rototária Urbis → Ponto Agostinho Amaral → INSS → Real Calçados (Centro) → Posto Larco → Ponto do Cemitério na BR-110
- **Tipo:** Chegada/Ida

---

## 🚐 MICRO-ÔNIBUS - TURNOS A, B e C

### **Saída das 13:10h**
- **Rota:** Fábrica → BR-110 → Padaria do Penão → Rototária Urbis → INSS → Praça da Prefeitura → Real Calçados (Centro) → Brasília → Araçatiba
- **Observações:** Saída dos aprendizes

### **Saída das 15:00h**
- **Tipo:** Apenas segunda-feira (tempo de expedição)
- **Rota Parcial**

### **Saída das 17:00h**
- **Turno A:** Fábrica → BR-110 → Padaria do Penão → Rototária Urbis → INSS → Praça da Prefeitura → Real Calçados (Centro) → Brasília → Araçatiba

### **Saída das 18:00h**
- **Turno B:** Fábrica → BR-110 → Padaria do Penão → Rototária Urbis → INSS → Praça da Prefeitura → Real Calçados (Centro) → Brasília → Araçatiba
- **Jovem Aprendiz e Administrativo**

---

## 🔄 MICRO-ÔNIBUS - RETORNO (Chegada)

### **Chegada às 05:20h / 06:20h**
- **Rota:** Araçatiba → Avenida Ernani de Oliveira Rocha → Praça 12 de Outubro → Praça da Prefeitura → INSS → Ginásio da Terceira Etapa → Padaria do Penão → BR-110 → Fábrica
- **Observações:** Micro-ônibus roda com duas pessoas

### **Chegada às 07:30h**
- **Rota:** Avenida Ernani de Oliveira Rocha → Praça 12 de Outubro → Praça da Prefeitura → INSS → Ginásio da Terceira Etapa → Padaria do Penão → BR-110 → Fábrica
- **Tempo administrativo:** Apenas 2 minutos

### **Chegada às 12:20h**
- **Rota:** Araçatiba → Avenida Ernani de Oliveira Rocha → Praça 12 de Outubro → Praça da Prefeitura → INSS → Ginásio da Terceira Etapa → Padaria do Penão → BR-110
- **Observações:** Turno A (parcial)

### **Chegada às 21:20h**
- **Rota:** Araçatiba → Avenida Ernani de Oliveira Rocha → Praça 12 de Outubro → Praça da Prefeitura → INSS → Ginásio da Terceira Etapa → Padaria do Penão → BR-110 → Fábrica

### **Chegada às 04:30h - TURNO ESPECIAL**
⚠️ **Este turno é utilizado APENAS NAS SEGUNDAS-FEIRAS**
- **Rota:** Araçatiba → Avenida Ernani de Oliveira Rocha → Praça 12 de Outubro → Praça da Prefeitura → INSS → Ginásio da Terceira Etapa → Padaria do Penão → BR-110 → Fábrica (até 06:20h)

---

## 📍 PONTOS DE PARADA PRINCIPAIS

| Ponto | CEP | Município | UF | Estado |
|-------|-----|-----------|----|----|
| São Sebastião do Passé | 43850-000 | São Sebastião do Passé | BA | Operacional |
| Humildes | 43850-000 | São Sebastião do Passé | BA | Operacional |
| Centro | 43850-000 | São Sebastião do Passé | BA | Operacional |
| Araçatiba | Variável | Araçatiba | BA | Destino Final |
| Brasília | Variável | São Sebastião do Passé | BA | Operacional |

---

## 📈 INFORMAÇÕES PARA ORÇAMENTO

### **Total de Turnos Diários**
- **Ônibus:** 3 turnos completos (A, B, C) = **3 veículos** ou **1 veículo com 3 viagens**
- **Micro-ônibus:** 5 saídas diferentes + 5 retornos = **Mínimo 2 micro-ônibus** ou **1 com operação contínua**

### **Quilometragem Estimada por Rota**
⚠️ **INFORMAÇÃO AUSENTE NA PLANILHA** - Necessário:
- [ ] Distância total Fábrica ↔ Araçatiba
- [ ] Distância em cada rota/ponto de parada
- [ ] Tempo médio de percurso por turno

### **Frequência Semanal**
- **Segunda a Sexta:** Rotas padrão (A, B, C)
- **Segundas-feiras:** Turno especial às 04:30h (expedição)
- **Observações:** Turno de 15:00h apenas às segundas-feiras

---

## 🎯 PRÓXIMAS ETAPAS

1. **Distância das Rotas** - Precisamos de:
   - Quilometragem total por turno
   - Tempo de ciclo por rota
   - Consumo de combustível estimado

2. **Custo Operacional** - Necessário:
   - Valor de combustível/KM
   - Manutenção dos veículos
   - Custo de pessoal (motoristas)

3. **Validação** - Confirmar:
   - Se os horários estão atualizados
   - Quantidade de funcionários por turno
   - Capacidade dos veículos vs. demanda

---

## 📝 NOTAS IMPORTANTES

- ✅ Estrutura de rotas bem definida
- ✅ Horários claros e organizados
- ✅ Destaque para turno especial de segundas-feiras
- ⚠️ Quilometragem não informada na planilha
- ⚠️ Necessário confirmar consumo de combustível
- ⚠️ Validar se há rotas adicionais não listadas

---

**Documento gerado:** 6 de julho de 2026  
**Status:** Análise Preliminar - Aguardando dados de quilometragem  
**Responsável:** Análise de Rotas MIX

