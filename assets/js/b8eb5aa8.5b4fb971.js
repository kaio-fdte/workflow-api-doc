(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[5768],{3905:function(e,a,o){"use strict";o.d(a,{Zo:function(){return u},kt:function(){return p}});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=t.createContext({}),l=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},u=function(e){var a=l(e.components);return t.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(o),p=n,v=c["".concat(d,".").concat(p)]||c[p]||m[p]||r;return o?t.createElement(v,s(s({ref:a},u),{},{components:o})):t.createElement(v,s({ref:a},u))}));function p(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=c;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8215:function(e,a,o){"use strict";var t=o(7294);a.Z=function(e){var a=e.children,o=e.hidden,n=e.className;return t.createElement("div",{role:"tabpanel",hidden:o,className:n},a)}},1395:function(e,a,o){"use strict";o.d(a,{Z:function(){return u}});var t=o(7294),n=o(944),r=o(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var d=37,l=39;var u=function(e){var a=e.lazy,o=e.block,u=e.defaultValue,m=e.values,c=e.groupId,p=e.className,v=(0,n.Z)(),f=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,t.useState)(u),N=b[0],g=b[1],h=t.Children.toArray(e.children),x=[];if(null!=c){var q=f[c];null!=q&&q!==N&&m.some((function(e){return e.value===q}))&&g(q)}var w=function(e){var a=e.currentTarget,o=x.indexOf(a),t=m[o].value;g(t),null!=c&&(k(c,t),setTimeout((function(){var e,o,t,n,r,s,d,l;(e=a.getBoundingClientRect(),o=e.top,t=e.left,n=e.bottom,r=e.right,s=window,d=s.innerHeight,l=s.innerWidth,o>=0&&r<=l&&n<=d&&t>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(i),setTimeout((function(){return a.classList.remove(i)}),2e3))}),150))},y=function(e){var a,o;switch(e.keyCode){case l:var t=x.indexOf(e.target)+1;o=x[t]||x[0];break;case d:var n=x.indexOf(e.target)-1;o=x[n]||x[x.length-1]}null==(a=o)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},p)},m.map((function(e){var a=e.value,o=e.label;return t.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":N===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:y,onFocus:w,onClick:w},o)}))),a?(0,t.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}},9443:function(e,a,o){"use strict";var t=(0,o(7294).createContext)(void 0);a.Z=t},944:function(e,a,o){"use strict";var t=o(7294),n=o(9443);a.Z=function(){var e=(0,t.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},9684:function(e,a,o){"use strict";o.r(a),o.d(a,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return v}});var t=o(2122),n=o(9756),r=(o(7294),o(3905)),s=o(1395),i=o(8215),d=["components"],l={},u=void 0,m={unversionedId:"resources/blueprints",id:"resources/blueprints",isDocsHomePage:!1,title:"blueprints",description:"Introdu\xe7\xe3o",source:"@site/docs/resources/blueprints.mdx",sourceDirName:"resources",slug:"/resources/blueprints",permalink:"/workflow-api-doc/docs/resources/blueprints",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/blueprints.mdx",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"api",permalink:"/workflow-api-doc/docs/resources/api"},next:{title:"StartNode",permalink:"/workflow-api-doc/docs/resources/nodes/startNode"}},c=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Blueprint Spec",id:"blueprint-spec",children:[{value:"Prepare",id:"prepare",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Lanes",id:"lanes",children:[]},{value:"N\xf3s ou Nodes",id:"n\xf3s-ou-nodes",children:[]}]},{value:"IDs e Names",id:"ids-e-names",children:[]},{value:"Eventos (Start e Finish)",id:"eventos-start-e-finish",children:[]}],p={toc:c};function v(e){var a=e.components,o=(0,n.Z)(e,d);return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,r.kt)("p",null,"Blueprint \xe9 uma palavra de tradu\xe7\xe3o simples, que pode assumir significados diferentes de acordo com o contexto. No nosso contexto, da utiliza\xe7\xe3o do FlowBuild para o desenvolvimento de software, podemos entender a blueprint como esquema. Um esquema que representa um processo. O processo desenhado a partir da necessidade de neg\xf3cio. Este processo pode ter sido desenhado utilizando, por exemplo, a nota\xe7\xe3o BPMN. Assim, a ",(0,r.kt)("strong",{parentName:"p"},"Blueprint \xe9 o artefato que descreve o processo de neg\xf3cio para o Flowbuild interpretar"),", ou seja, \xe9 um arquivo do tipo JSON pass\xedvel de interpreta\xe7\xe3o pelo FlowBuild. "),(0,r.kt)("p",null,"A Blueprint \xe9 respons\xe1vel por especificar todos os elementos de um processo e orquestrar os canais e servi\xe7os."),(0,r.kt)("p",null,"Na implementa\xe7\xe3o do FlowBuild, implementamos alguns, por\xe9m n\xe3o todos os elementos BMPN. Consulte a se\xe7\xe3o ",(0,r.kt)("a",{parentName:"p",href:"../documentation/bpmn"},"BPMN")," para mais detalhes sobre BPMN e a implementa\xe7\xe3o pelo FlowBuild."),(0,r.kt)("p",null,"Para armazenar uma blueprint, o FlowBuild necessita de 3 informa\xe7\xf5es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: O nome da blueprint. Apesar de estruturalmente o FlowBuild aceita qualquer texto, \xe9 recomend\xe1vel evitar o uso de espa\xe7os e caracteres especiais."),(0,r.kt)("li",{parentName:"ul"},"description: Uma descri\xe7\xe3o da blueprint. Esse campo n\xe3o influencia a execu\xe7\xe3o do processo, mas \xe9 importante para identificar o que a blueprint representa."),(0,r.kt)("li",{parentName:"ul"},"blueprint_spec: o esquema de execu\xe7\xe3o que ser\xe1 utilizado pelo FlowBuild.")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"O nome do workflow \xe9 case sensitive"))),(0,r.kt)("h2",{id:"blueprint-spec"},"Blueprint Spec"),(0,r.kt)("p",null,"Uma blueprint \xe9 definida por um ",(0,r.kt)("em",{parentName:"p"},"objeto")," com 6 atributos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prepare"),(0,r.kt)("li",{parentName:"ul"},"requirements"),(0,r.kt)("li",{parentName:"ul"},"enviroment"),(0,r.kt)("li",{parentName:"ul"},"parameters"),(0,r.kt)("li",{parentName:"ul"},"lanes"),(0,r.kt)("li",{parentName:"ul"},"nodes")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Recomenda\xe7\xe3o")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A vis\xe3o de neg\xf3cio orientado a processos sugere que os processos em si documentam o neg\xf3cio, assim todos os par\xe2metros de documenta\xe7\xe3o devem ser utilizados para que tenhamos um melhor entendimento das blueprints. Os itens name e description servem muito mais a um olhar humano no que ao Flowbuild Engine."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Numa perspectiva de projeto com muitas blueprints, \xe9 recomend\xe1vel que os nomes e descri\xe7\xf5es sejam de certa forma padronizados, para que todos os profissionais que escrevem blueprints sigam o mesmo racional.")),(0,r.kt)("h3",{id:"prepare"},"Prepare"),(0,r.kt)("p",null,"\xc9 descrito como a lista de fun\xe7\xf5es que devem ser executadas antes da inicializa\xe7\xe3o do processo."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"\xc9 descrito coma uma lista de packages que devem ser importados pelo FlowBuild para execu\xe7\xe3o do processo. \xc9 uma forma de importar para a blueprint pacotes espec\xedficos de execu\xe7\xe3o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Exemplo:"',title:'"Exemplo:"'},'{\n   "requirements": [\n      "core"\n   ]\n}\n')),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"O campo enviroment tem por objetivo trazer para a blueprint as vari\xe1veis de ambiente da aplica\xe7\xe3o. \xc9 poss\xedvel definir quantas vari\xe1veis forem necess\xe1rias."),(0,r.kt)("p",null,"Essas vari\xe1veis s\xe3o imut\xe1veis e avaliadas no momento da cria\xe7\xe3o do processo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Atribui o valor da env API_KEY com o nome X-API-KEY"',title:'"Atribui',o:!0,valor:!0,da:!0,env:!0,API_KEY:!0,com:!0,nome:!0,'X-API-KEY"':!0},'{\n   "environment": {\n      "X-API-KEY": "API_KEY"\n   }\n}\n')),(0,r.kt)("p",null,"Esses valores podem ser acessados atrav\xe9s das nota\xe7\xf5es de ",(0,r.kt)("a",{parentName:"p",href:"./comandos"},"comando"),", usando o namespace ",(0,r.kt)("em",{parentName:"p"},"environment"),"."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Trata-se um objeto onde s\xe3o definidos constantes aplicadas para aquela determinada blueprint. "),(0,r.kt)("p",null,"Do ponto de vista do processo, s\xe3o valores imut\xe1veis (assim como as enviroments), por\xe9m s\xe3o aplic\xe1veis no escopo de uma determinada blueprint e n\xe3o s\xe3o influenciadas pelo ambiente da aplica\xe7\xe3o. Elas s\xe3o definidas no momento da publica\xe7\xe3o de blueprint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "parameters": {\n      "value": 10,\n      "name": "fulano"\n   }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"EXEMPLO")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"O atributo max_step_number. Quando definido nos parameters da blueprint, o FlowBuild n\xe3o permitir\xe1 que aquele processo exceda a quantidade de steps determinada, automaticamente interrompendo o processo caso o limite seja atingido."))),(0,r.kt)("p",null,"Esses valores podem ser acessados atrav\xe9s das nota\xe7\xf5es de ",(0,r.kt)("a",{parentName:"p",href:"./comandos"},"comando"),", usando o namespace ",(0,r.kt)("em",{parentName:"p"},"parameters"),"."),(0,r.kt)("h3",{id:"lanes"},"Lanes"),(0,r.kt)("p",null,"Uma raia \xe9 a express\xe3o do controle de acesso a um conjunto de n\xf3s. Uma raia define quais regras devem ser atendidas para que o n\xf3 seja executado. A rigor as raias definem os atores, ou seja, um conjunto de caracter\xedsticas. Exemplo: raia An\xf4nimo, qualquer um pode executar os n\xf3s."),(0,r.kt)("p",null,"Na pr\xe1tica a raia \xe9 relevante em apenas duas situa\xe7\xf5es: no start e nas tarefas de usu\xe1rio. O start verifica se as regras da raia est\xe3o sendo respeitadas. Os n\xf3s do tipo tarefa de usu\xe1rio devem respeitar a raia que ele pertence, ou seja, para executar deve preencher as regras definidas na raia. Todos os n\xf3s devem estar numa raia. No caso dos n\xf3s de sistema n\xe3o faz diferen\xe7a qual raia ele est\xe1. Apesar disso, a representa\xe7\xe3o do diagrama da blueprint ou mesmo seu entendimento em c\xf3digo \xe9 facilitado quando organizamos as raias com as devidas regras de quais atores podem executar."),(0,r.kt)("p",null,"Numa blueprint a lane \xe9 definida como um objeto com 3 atributos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: identificador da raia, \xe9 uma string e ser\xe1 referenciados pelos n\xf3s da blueprint;"),(0,r.kt)("li",{parentName:"ul"},"name: nome da lane, tem a fun\xe7\xe3o de descri\xe7\xe3o o usu\xe1rio. Este campo n\xe3o \xe9 utilizado pelo FlowBuild durante a execu\xe7\xe3o do processo;"),(0,r.kt)("li",{parentName:"ul"},"rule: uma fun\xe7\xe3o que define quem tem acesso aos n\xf3s daquela determinada lane.")),(0,r.kt)("p",null,"A rule, assim como o script da scriptTask, recebe c\xf3digo na sintaxe LISP. Deve ser uma fun\xe7\xe3o que retorna true/false dizendo se um dado usu\xe1rio tem permiss\xe3o de executar nodes dentro da lane. "),(0,r.kt)("p",null,"A rule \xe9 executada contra o actor data do usu\xe1rio e sempre avaliada em em tempo de execu\xe7\xe3o."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\xc9 poss\xedvel utilizar a nota\xe7\xe3o $js no campo rule, permitindo executar fun\xe7\xf5es javascript se desejado."))),(0,r.kt)("h4",{id:"exemplos-de-rules-de-lanes"},"Exemplos de Rules de lanes"),(0,r.kt)(s.Z,{defaultValue:"http",values:[{label:"Aberta para qualquer usu\xe1rio",value:"todos"},{label:"Vinculada a um usu\xe1rio espec\xedfico",value:"latched"},{label:"Claim",value:"claim"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"claim",mdxType:"TabItem"},"Permite acesso se na lista de claims do ator_data h\xe1 o termo authenticated.",(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n   rule: ['fn', ['actor_data', 'bag'],\n            ['eval', ['apply', 'or', ['map', ['fn', ['v'],\n            ['=', 'v', ['`', 'authenticated']]],\n            ['get', 'actor_data', ['`', 'claims']]]]],\n         ]\n}\n"))),(0,r.kt)(i.Z,{value:"latched",mdxType:"TabItem"},"Permite acesso ao actor_data cujo actor_id corresponde ao valor contido na bag.vendedor.actor_id",(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Latched Lane"',title:'"Latched','Lane"':!0},"{\n   rule: ['fn', ['actor_data', 'bag'],\n   ['=', ['get', ['get', 'bag', ['`', 'vendedor']], ['`', 'actor_id']],\n   ['get', 'actor_data', ['`', 'actor_id']]],\n]\n}\n"))),(0,r.kt)(i.Z,{value:"todos",mdxType:"TabItem"},"Qualquer actor_data v\xe1lido pode acessar o conte\xfado desta lane.",(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n   rule: ["fn", ["&", "args"], true]\n} \n')))),";",(0,r.kt)("p",null,"As Lanes existem para controlar o acesso de usu\xe1rios ao processo, portanto s\xe3o usadas para:"),(0,r.kt)("p",null,"\u25cf Abrigar StartNodes, portanto controlar quem pode ativar o processo."),(0,r.kt)("p",null,"\u25cf Abrigar UserTasks, portanto controlar quem pode realizar aquela tarefa \u2013 seja um\nusu\xe1rio espec\xedfico ou um grupo de usu\xe1rios."),(0,r.kt)("p",null,"Atualmente n\xe3o existe controle para distinguir pol\xedtica de acesso (leitura ou a\xe7\xe3o). N\xe3o \xe9\nrecomend\xe1vel criar lanes para representar setores ou simplesmente para agrupar tarefas de\nsistema ou flowNodes."),(0,r.kt)("p",null,"Lembre-se que as condi\xe7\xf5es da lane dependem de:"),(0,r.kt)("p",null,"\u25cf Dados do ator"),(0,r.kt)("p",null,"\u25cf Regra da Lane"),(0,r.kt)("p",null,"\u25cf Contexto do Processo (quando aplic\xe1vel) \u2192 \xe9 importante que o contexto, uma vez\ndefinido no processo, n\xe3o seja alterado."),(0,r.kt)("p",null,"Nomeie lanes usando a CONDI\xc7\xc3O. Caso a lane utilize algum par\xe2metro de contexto do\nprocesso, utilize o nome do atributo utilizado como condi\xe7\xe3o. Mesmo que um processo possa\nser executado por qualquer ator, \xe9 importante que a raia seja identificada como esta condi\xe7\xe3o,\num ator an\xf4nimo."),(0,r.kt)("p",null,"Em um projeto em que mais de um processo se relacionam \xe9 aconselh\xe1vel que as raias de um\nmesmo ator utilizem o mesmo nome e a mesma defini\xe7\xe3o. Assim facilitamos o entendimento e\ndiminu\xedmos a possibilidade de inconsist\xeancias no todo."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"precisamos incluir a explica\xe7\xe3o de claims")),(0,r.kt)("h3",{id:"n\xf3s-ou-nodes"},"N\xf3s ou Nodes"),(0,r.kt)("p",null,"Um n\xf3 \xe9 a menor unidade do processo, \xe9 uma tarefa que deve ser executada. "),(0,r.kt)("p",null,"Toda vez que um n\xf3 executado ele gera um novo estado, que \xe9 gerado e salvo ",(0,r.kt)("strong",{parentName:"p"},"ao t\xe9rmino")," da execu\xe7\xe3o do n\xf3."),(0,r.kt)("p",null,"Existem v\xe1rios tipos de n\xf3s, que est\xe3o descritos em maiores detalhes das se\xe7\xe3o n\xf3s dessa documenta\xe7\xe3o."),(0,r.kt)("p",null,"Numa blueprint o atributo nodes \xe9 descrito como uma lista de n\xf3s que, por sua vez, \xe9 descrito como um objeto com os seguintes atributos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": definido como uma string, \xe9 o identificador do n\xf3 e deve ser \xfanico no contexto da blueprint;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": nome do n\xf3, tem uma fun\xe7\xe3o descritiva para o usu\xe1rio que l\xea a blueprint. N\xe3o afeta a execu\xe7\xe3o do processo, por\xe9m det\xe9m muito valor para an\xe1lise futura e rastreamento;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lane_id"),": Uma string que faz refer\xeancia ao id de umas das lanes da blueprint. Uma falha na refer\xeancia impede a blueprint de ser publicada."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"next"),": indica qual o pr\xf3ximo n\xf3 ser\xe1 executado ap\xf3s a execu\xe7\xe3o do n\xf3 atual. Deve fazer refer\xeancia a um n\xf3 da pr\xf3pria blueprint. A inexist\xeancia de refer\xeancia impede a blueprint de ser publicada."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": define o tipo de tarefa que dever\xe1 ser realizada. Veja a se\xe7\xe3o de nodeTypes para mais detalhes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"category"),": atributo exclusivo para systemTaskNodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"parameters"),": \xe9 definido por um objeto com os par\xe2metros de execu\xe7\xe3o do n\xf3 e dados de input (quando aplic\xe1vel).")),(0,r.kt)("h2",{id:"ids-e-names"},"IDs e Names"),(0,r.kt)("p",null,"No FlowBuild, cada n\xf3 do fluxo tem um atributo name e um id. O atributo name n\xe3o \xe9 utilizado\nem nenhum momento pelo motor de execu\xe7\xe3o. Sua fun\xe7\xe3o \xe9 trazer entendimento para o\np\xfablico de neg\xf3cio e para o designer. O id, por sua vez, \xe9 utilizado pelo motor de execu\xe7\xe3o para\nidentificar a sequ\xeancia de tarefas. Isso n\xe3o impede, contudo, que este campo n\xe3o possa\ntamb\xe9m ser utilizado para facilitar o designer no entendimento do fluxo de neg\xf3cio."),(0,r.kt)("p",null,"A \xfanica restri\xe7\xe3o do ponto de vista do motor de execu\xe7\xe3o \xe9 que o campo id seja \xfanico no fluxo\n(condi\xe7\xe3o que atualmente \xe9 validada pelo FlowBuild no momento da cria\xe7\xe3o do fluxo). Fora\nisso, \xe9 permitido utilizar qualquer tipo de texto neste campo."),(0,r.kt)("p",null,"\xc9 recomendado utilizar termos curtos no campo de id e, o uso de uma codifica\xe7\xe3o \xe9 uma boa\npr\xe1tica. Abaixo est\xe3o apresentadas algumas codifica\xe7\xf5es utilizadas, com seus pr\xf3s e contras."),(0,r.kt)("p",null,"Toda vez que um n\xf3 termina ele coloca as informa\xe7\xf5es no result, para que tres n\xf3s a frente\nconsiga usar \xe9 s\xf3 colocar na bag."),(0,r.kt)("h2",{id:"eventos-start-e-finish"},"Eventos (Start e Finish)"),(0,r.kt)("p",null,"StartNodes e FinishNodes s\xe3o os dois tipos de eventos existentes no FlowBuild para iniciar e\nfinalizar um processo. A recomenda\xe7\xe3o para os nomes desses nodes \xe9 que reflitam o objetivo\ndo processo. Assim estes eventos podem ser nomeados usando o modelo ENTIDADE +\nSTATUS, onde:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u25cf StartNodes \xe9 nomedo em fun\xe7\xe3o das condi\xe7\xf5es de ativa\xe7\xe3o do processo.\n\n\u25cf FinishNodes \xe9 nomeado em fun\xe7\xe3o da condi\xe7\xe3o de sa\xedda do processo.\n")),(0,r.kt)("p",null,"o Caso o processo tenha estados finais alternativos, crie um finishNode para cada estado."),(0,r.kt)("p",null,"o Caso o processo tenha estados finais alternativos, crie um finishNode para cada estado."),(0,r.kt)("p",null,"Exemplos:"),(0,r.kt)("p",null,"\u25cf Usu\xe1rio Cadastrado"),(0,r.kt)("p",null,"\u25cf Contrato Criado"),(0,r.kt)("p",null,"\u25cf Senha atualizada"))}v.isMDXComponent=!0},6010:function(e,a,o){"use strict";function t(e){var a,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(o=t(e[a]))&&(n&&(n+=" "),n+=o);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}function n(){for(var e,a,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(a=t(e))&&(n&&(n+=" "),n+=a);return n}o.d(a,{Z:function(){return n}})}}]);