(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[3862],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3959:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={},c="FinishNode",p={unversionedId:"resources/nodes/finishNode",id:"resources/nodes/finishNode",isDocsHomePage:!1,title:"FinishNode",description:"Representa o evento de termino do processo.",source:"@site/docs/resources/nodes/finishNode.md",sourceDirName:"resources/nodes",slug:"/resources/nodes/finishNode",permalink:"/workflow-api-doc/docs/resources/nodes/finishNode",editUrl:"https://bitbucket.org/fdtedsd/workflow-api-doc/src/master/docs/resources/nodes/finishNode.md",version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"StartNode",permalink:"/workflow-api-doc/docs/resources/nodes/startNode"},next:{title:"FlowNode",permalink:"/workflow-api-doc/docs/resources/nodes/flowNode"}},d=[{value:"Par\xe2metros",id:"par\xe2metros",children:[]},{value:"Exemplo",id:"exemplo",children:[]}],l={toc:d};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"finishnode"},"FinishNode"),(0,a.kt)("p",null,"Representa o evento de termino do processo. "),(0,a.kt)("p",null,"Uma blueprint ",(0,a.kt)("em",{parentName:"p"},"deve")," ter um finishNode e ",(0,a.kt)("em",{parentName:"p"},"pode")," ter m\xfaltiplos finishNodes."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Trata-se de uma boa pr\xe1tica criar m\xfaltiplos finishNodes caso o processo tenha gerado estados distintos (por exemplo: processo finalizado por inatividade)."),(0,a.kt)("p",{parentName:"div"},"Isso facilita a realiza\xe7\xe3o de an\xe1lises dos processos."))),(0,a.kt)("p",null,"Diferente dos demais n\xf3s, o valor do atributo ",(0,a.kt)("em",{parentName:"p"},"next")," do FinishNode deve ser igual a ",(0,a.kt)("strong",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"par\xe2metros"},"Par\xe2metros"),(0,a.kt)("p",null,"O n\xf3 de t\xe9rmino pode receber par\xe2metros opcionais."),(0,a.kt)("p",null,"Os par\xe2metros do finishNode transferem os dados para o campo result no estado final do processo."),(0,a.kt)("p",null,"Caso o processo seja evocado como um subProcesso, os ",(0,a.kt)("em",{parentName:"p"},"result")," do finishNode ser\xe1 transmitido para o processo-pai."),(0,a.kt)("h2",{id:"exemplo"},"Exemplo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "12",\n    "type": "Finish",\n    "name": "T\xe9rmino Hello",\n    "lane_id": "1",\n    "next": null,\n    "parameters": {\n        "input": {\n            "field": { "$ref": "bag.someField" }\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);