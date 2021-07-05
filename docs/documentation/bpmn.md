---
sidebar_position: 1
---

# BPMN

## Objetivo

Estabelecer uma linguagem gráfica padrão para especificação de processos que 
possa ser utilizada por gestores de negócio e, ao mesmo tempo, permitir ser traduzida em 
componentes de execução de software. 

## Sobre o BPMN

A linguagem utiliza símbolos para ilustrar os elementos dos processos e uma estrutura XML para 
armazenar tal informação. De um ponto de vista do alto nível, é interessante utilizar a 
BPMN em processos de negócios que visam melhorar sua compreensão através de uma representação gráfica das etapas que serão seguidas.

Ela também proporciona para as pessoas arquitetas do processo, detalhes que irão auxiliar uma implementação mais precisa. Sua linguagem padrão
é comum para quem estiver integrado no processo, independente de seu grau técnico. Com base nisso, não importa se você é analista de negócios, participante do processo, gerente e desenvolvedor técnico, bem como integrante de equipes e consultores externos. Ela é feita para a compreensão de todos.

De uma maneira mais objetiva, a linguagem consegue mesclar intenção e implementação de processos, sempre mantendo a clareza em seus detalhes.

O BPMN contém 5 tipos de elementos

1. Elementos de fluxo → Tarefas, eventos, gateways;
2. Elementos de dados → Objetos, inputs, outputs, stores;
3. Elementos de conexão → Sequencia, mensagem, associação, associação de 
dados;
4. Swinlanes → Lanes, pools;
5. Artefatos → Grupos, anotações.

## Elementos da BPMN

**Tarefas**: É um termo genérico para o trabalho que é executado em um 
processo. Uma tarefa pode ser atômica ou composta e são representadas por 
retângulos com cantos arredondados.

**Eventos**: é algo que acontece durante um processo. Eventos afetam o 
andamento do fluxo e podem disparar algo ou causar algum impacto.
Eventos são representados por círculos e podem ser eventos de início de 
fluxo, término de fluxo ou intermediários. 

**Gateways**: são utilizados para controlar a direção do fluxo (divergência ou 
convergência). 

**Swimlane**: é a representação gráfica de um participante.

## Flowbuild e BPMN

O Flowbuild executa processos descritos em BPMN?
**Não**, o flowbuild é inspirado no BPMN, mas com algumas diferenças:
1. Descreve os processos em formato JSON ao invés de XML.

2. Implementa 7 tipos principais de elementos BPMN:
    - Events: Start (1), Finish (2);
    - Gateway: Flow (3);
    - Task: SystemTask (4), UserTask (5), SubProcess (6) ;
    - Lane (7);
    - 