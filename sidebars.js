module.exports = {
  tutorialSidebar: {
    Tutorial: [
      "tutorial/configuracao",
      "tutorial/escritaPublicacaoBlueprint",
      "tutorial/execucaoProcesso",
      "tutorial/fundamentos",
      "tutorial/pizza",
      "tutorial/visualizacaoProcesso",
    ],
    Intro: ["intro"],
  },
  resourcesSidebar: [
    {
      type: 'doc',
      label: 'API',
      id: "resources/api"
    },
    {
      type: 'category',
      label: 'Entendendo blueprints',
      items: [
        {
          type: 'doc',
          label: 'Introdução & Estrutura',
          id: "resources/blueprints",
        },
        {
          type: 'category',
          label: 'Node Types',
          items: [
            'resources/nodes/startNode',
            'resources/nodes/finishNode',
            'resources/nodes/flowNode',
            {
              type: 'doc',
              label: 'UserTask',
              id: 'resources/nodes/userTaskNode',
            },
            {
              type: 'doc',
              label: 'SystemTask',
              id: 'resources/nodes/systemTaskNode',
            },
            'resources/nodes/scriptNode',
            'resources/nodes/subprocessNode',
          ]
        },
        {
          type: 'doc',
          label: 'Comandos $',
          id: "resources/comandos",
        },
        {
          type: 'category',
          label: 'Exemplos',
          items: [
            "resources/examples",
            "resources/examples/matricula"
          ]
        },
        "resources/jsonSchema",
        "resources/references",
      ]
    }
  ],
  documentationSidebar: [
    {
      type: "category",
      label: "🏁 Começando",
      items: [
        "documentation/instalacao",
        {
          type: "doc",
          label: "Gerando tokens",
          id: "documentation/tokenizacao",
        },
      ],
    },
    {
      type: "category",
      label: "📓 Conceitos",
      items: [
        {
          type: "doc",
          label: "Processos",
          id: "documentation/processos",
        },
        "documentation/bpmn",
      ],
    },
    {
      type: "category",
      label: '👩🏼‍💻 Development',
      items: [
        "documentation/cicloDeVidaDeAtividade",
        "documentation/cicloDeVidaDeProcesso",
        "documentation/listenersApi",
        "documentation/logging",
        {
          type: 'category',
          label: '💾 Models',
          items: [
            "documentation/modeloDeDados",
            "documentation/models/workflow"
          ]
        },
        "documentation/testes",
      ]
    },
    {
      type: "doc",
      label: "🙋 FAQ",
      id: "documentation/faq",
    },
    {
      type: 'doc',
      label: '🛰️ Contribuindo',
      id: "documentation/contribuindo",
    }
  ],
};
