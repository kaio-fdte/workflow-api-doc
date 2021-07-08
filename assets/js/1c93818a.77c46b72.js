(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[5490],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return r.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},l=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(t),d=o,f=l["".concat(u,".").concat(d)]||l[d]||p[d]||n;return t?r.createElement(f,i(i({ref:a},m),{},{components:t})):r.createElement(f,i({ref:a},m))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=l;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4011:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return l}});var r=t(2122),o=t(9756),n=(t(7294),t(3905)),i=["components"],s={},u="UserTaskNode",c={unversionedId:"resources/nodes/userTaskNode",id:"resources/nodes/userTaskNode",isDocsHomePage:!1,title:"UserTaskNode",description:"N\xf3 de usu\xe1rio.",source:"@site/docs/resources/nodes/userTaskNode.md",sourceDirName:"resources/nodes",slug:"/resources/nodes/userTaskNode",permalink:"/workflow-api-doc/docs/resources/nodes/userTaskNode",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/nodes/userTaskNode.md",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"FlowNode",permalink:"/workflow-api-doc/docs/resources/nodes/flowNode"},next:{title:"systemTaskNode",permalink:"/workflow-api-doc/docs/resources/nodes/systemTaskNode"}},m=[{value:"Par\xe2metros",id:"par\xe2metros",children:[{value:"Action &amp; Input",id:"action--input",children:[]},{value:"Timeout",id:"timeout",children:[]},{value:"Activity Manager",id:"activity-manager",children:[]},{value:"Activity Schema",id:"activity-schema",children:[]},{value:"Result Schema",id:"result-schema",children:[]}]},{value:"Exemplo",id:"exemplo",children:[]}],p={toc:m};function l(e){var a=e.components,t=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usertasknode"},"UserTaskNode"),(0,n.kt)("p",null,"N\xf3 de usu\xe1rio. "),(0,n.kt)("p",null,"Este tipo de n\xf3 descreve uma intera\xe7\xe3o com um canal, que normalmente \xe9 uma interface com um humano."),(0,n.kt)("p",null,"O processo ao atingir um n\xf3 de userTask, realiza uma pr\xe9-execu\xe7\xe3o, que avaliar\xe1 os par\xe2metros de entrada da tarefa e enviar\xe1 tais par\xe2metros para o\ngerenciador de atividades (Activity Manager)."),(0,n.kt)("p",null,"Diferente das tarefas de sistema, um userTask gera uma interrup\xe7\xe3o do processo, que entra em um estado de espera ",(0,n.kt)("em",{parentName:"p"},"WAITING")," at\xe9 que receba uma confirma\xe7\xe3o do Activity Manager de que a tarefa foi conclu\xedda. Dessa forma, assim como o startNode, uma userTask gera 2 estados no processo."),(0,n.kt)("h2",{id:"par\xe2metros"},"Par\xe2metros"),(0,n.kt)("p",null,"Uma userTask pode receber at\xe9 6 par\xe2metros:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"action (obrigat\xf3rio)"),(0,n.kt)("li",{parentName:"ul"},"input (obrigat\xf3rio)"),(0,n.kt)("li",{parentName:"ul"},"timeout"),(0,n.kt)("li",{parentName:"ul"},"activity_schema"),(0,n.kt)("li",{parentName:"ul"},"activity_manager"),(0,n.kt)("li",{parentName:"ul"},"result_schema")),(0,n.kt)("h3",{id:"action--input"},"Action & Input"),(0,n.kt)("p",null,"O conceito de userTasks no flowBuild \xe9 inspirado nas Redux Actions."),(0,n.kt)("p",null,"Uma tarefa \xe9 descrita por 2 atributos, uma a\xe7\xe3o (",(0,n.kt)("em",{parentName:"p"},"action"),") e um payload (",(0,n.kt)("em",{parentName:"p"},"input"),")."),(0,n.kt)("p",null,"O campo ",(0,n.kt)("em",{parentName:"p"},"action")," \xe9 descrito com um texto e recomenda-se que utilize-se um verbo de a\xe7\xe3o que explique o resultado esperado da tarefa:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Confirmar_aceite"),(0,n.kt)("li",{parentName:"ul"},"Preencher_dados_pessoais"),(0,n.kt)("li",{parentName:"ul"},"Enviar_documentos")),(0,n.kt)("p",null,"Geralmente, para que a tarefa seja executada, \xe9 necess\xe1rio que a interface exiba um conjunto de informa\xe7\xf5es para o usu\xe1rio, tais informa\xe7\xf5es s\xe3o descritas pelo ",(0,n.kt)("em",{parentName:"p"},"objeto")," input."),(0,n.kt)("p",null,"\xc9 importante que o input contenha o ",(0,n.kt)("em",{parentName:"p"},"m\xednimo")," de informa\xe7\xf5es ",(0,n.kt)("em",{parentName:"p"},"requeridas")," para que o canal possa executar a tarefa junto ao usu\xe1rio. Evite enviar informa\xe7\xf5es n\xe3o essenciais para execu\xe7\xe3o da tarefa."),(0,n.kt)("h3",{id:"timeout"},"Timeout"),(0,n.kt)("p",null,"Descreve o prazo para que o usu\xe1rio possa realizar a tarefa. Pode ser descrito como um valor inteiro (em segundos) ou como uma data-hora."),(0,n.kt)("p",null,"Caso esse par\xe2metro seja enviado como um valor num\xe9rico, este seja convertido em uma data absoluta no momento em que o Actvity Manager \xe9 criado."),(0,n.kt)("p",null,"No momento em que o prazo da atividade expirar, o Activity Manager ir\xe1 submeter as atividades dispon\xedveis para o processo, incluindo um atributo adicional ",(0,n.kt)("inlineCode",{parentName:"p"},"is_continue=true"),"."),(0,n.kt)("h3",{id:"activity-manager"},"Activity Manager"),(0,n.kt)("p",null,"Determina a rela\xe7\xe3o entre o processo e o Activity Manager."),(0,n.kt)("p",null,"S\xe3o 2 op\xe7\xf5es poss\xedveis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"commit (padr\xe3o): significa que o processo permanecer\xe1 em status ",(0,n.kt)("em",{parentName:"li"},"WAITING")," at\xe9 que o Activity Manager submeta a atividade para o processo."),(0,n.kt)("li",{parentName:"ul"},"notify: nesse caso o processo cria o Activity Manager, por\xe9m seguir\xe1 diretamente para um status ",(0,n.kt)("em",{parentName:"li"},"RUNNING"),".")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"O Activity Manager do tipo notify permanecer\xe1 ativo at\xe9 que a atividade expire (caso tenha um timeout definido), o canal submeta a atividade ",(0,n.kt)("strong",{parentName:"p"},"ou")," o processo finalize (por t\xe9rmino, expira\xe7\xe3o ou erro)."))),(0,n.kt)("h3",{id:"activity-schema"},"Activity Schema"),(0,n.kt)("p",null,"Descrito como um JSON Schema, descreve o formato esperado do payload de ",(0,n.kt)("em",{parentName:"p"},"commit")," da tarefa."),(0,n.kt)("p",null,"Caso o canal envie um payload incompat\xedvel com o formato esperado, o Activity Manager ir\xe1 recusar a tarefa, retornando um erro de valida\xe7\xe3o (vide ",(0,n.kt)("a",{parentName:"p",href:"../api"},"api"),").\nUm erro de valida\xe7\xe3o do activity_schema n\xe3o ocasiona estado de erro no processo."),(0,n.kt)("h3",{id:"result-schema"},"Result Schema"),(0,n.kt)("p",null,"Descrito como um JSON Schema, descreve o formato esperado do ",(0,n.kt)("em",{parentName:"p"},"result")," do n\xf3."),(0,n.kt)("p",null,"Nesse caso, a valida\xe7\xe3o \xe9 feita ap\xf3s a submiss\xe3o pelo Activity Manager, na valida\xe7\xe3o pelo processo antes de gerar o result do n\xf3."),(0,n.kt)("p",null,"A falha de valida\xe7\xe3o desse momento ocasiona um estado de erro no processo. "),(0,n.kt)("h2",{id:"exemplo"},"Exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"2",\n   "name":"Fill application form",\n   "lane_id":"1",\n   "next":"3",\n   "type":"UserTask",\n   "parameters":{\n      "input":{\n         "cities":{ "$ref":"bag.cities" },\n         "reasons":{ "$ref":"bag.reasons" }\n      },\n      "action":"FILL_FORM_SELECTS",\n      "activity_manager": "commit",\n      "timeout": 600,\n      "activity_schema": {\n          "type": "object",\n          "properties": {\n              "nome": { "type": "string" },\n              "dataNascimento": { "type" "string", "format": "date" },\n              "city": { "type": "string" },\n              "reason": { "type": "string" }\n          }\n      }\n   }\n}\n')))}l.isMDXComponent=!0}}]);