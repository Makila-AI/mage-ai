(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3605],{55729:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(82394),i=n(75582),o=n(82684),c=n(69864),l=n(71180),s=n(15338),d=n(97618),u=n(55485),a=n(85854),p=n(48670),j=n(65956),f=n(82359),v=n(88543),h=n(38276),g=n(30160),m=n(17488),Z=n(69650),x=n(12468),y=n(35686),b=n(77417),O=n(25976),_=n(44897),P=n(42631),w=n(70515),k=O.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],P.n_,w.cd*w.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||_.Z.background).codeArea,";\n  ")})),C=n(72473),E=n(72191),S=n(70320),D=n(81728),I=n(42122),N=n(72619),L=n(23780),A=n(28598);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t,n,O,_=e.cancelButtonText,P=e.contained,H=e.header,M=e.onCancel,T=e.onSaveSuccess,F=e.rootProject,B=(0,L.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),U=(0,i.Z)(B,1)[0],V=(0,o.useState)(null),W=V[0],X=V[1],q=(0,o.useState)(!1),z=q[0],G=q[1],J=(0,b.Z)(),K=J.fetchProjects,Y=J.project,Q=J.projectPlatformActivated,$=J.rootProject,ee=(0,o.useMemo)((function(){return F?$:Y}),[Y,$,F]),te=ee||{},ne=te.name,re=te.openai_api_key,ie=te.project_uuid,oe=(0,o.useMemo)((function(){return"demo.mage.ai"===window.location.hostname}),[]);(0,o.useEffect)((function(){W||X(ee)}),[ee,W]);var ce=(0,c.Db)(y.ZP.projects.useUpdate(ne),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(e){var t,n=e.project;K(),X(n),G(!1),(0,S.hY)(null===n||void 0===n||null===(t=n.features)||void 0===t?void 0:t[f.d.LOCAL_TIMEZONE]),T&&(null===T||void 0===T||T(n))},onErrorCallback:function(e,t){return U({errors:t,response:e})}})}}),le=(0,i.Z)(ce,2),se=le[0],de=le[1].isLoading,ue=(0,o.useCallback)((function(e){return se({project:R(R({},e),{},{root_project:F})})}),[F,se]),ae=(0,A.jsxs)(A.Fragment,{children:[H,(0,A.jsxs)(j.Z,{noPadding:!0,children:[(0,A.jsxs)(h.Z,{p:w.cd,children:[(0,A.jsx)(h.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Project name"})}),(0,A.jsx)(g.ZP,{default:!0,monospace:!0,children:ne})]}),(0,A.jsx)(s.Z,{light:!0}),(0,A.jsxs)(h.Z,{p:w.cd,children:[(0,A.jsx)(h.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Project UUID"})}),(0,A.jsx)(g.ZP,{default:!!ie,monospace:!0,muted:!ie,children:ie||"Not required"})]}),(0,A.jsx)(s.Z,{light:!0}),(0,A.jsx)(h.Z,{p:w.cd,children:(0,A.jsxs)(u.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,A.jsxs)(d.Z,{flexDirection:"column",children:[(0,A.jsx)(h.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Help improve Mage"})}),(0,A.jsxs)(g.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,A.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,A.jsx)(h.Z,{mr:w.cd}),(0,A.jsx)(Z.Z,{checked:null===W||void 0===W?void 0:W.help_improve_mage,compact:!0,"data-testid":"help_improve_mage_toggle",onCheck:function(){return X((function(e){return R(R({},e),{},{help_improve_mage:!(null!==W&&void 0!==W&&W.help_improve_mage)})}))}})]})})]}),(0,A.jsx)(h.Z,{mt:w.HN}),(0,A.jsx)(v.Z,{description:"Global settings that are applied to all pipelines in this project.",title:"Pipeline settings",children:(0,A.jsx)(v.S,{description:"Every time a trigger is created or updated in this pipeline, automatically persist it in code.",title:"Save triggers in code automatically",toggleSwitch:{checked:!(null===W||void 0===W||null===(t=W.pipelines)||void 0===t||null===(n=t.settings)||void 0===n||null===(O=n.triggers)||void 0===O||!O.save_in_code_automatically),onCheck:function(e){return X((function(t){var n,r,i,o,c,l;return R(R({},t),{},{pipelines:R(R({},null===t||void 0===t?void 0:t.pipelines),{},{settings:R(R({},null===t||void 0===t||null===(n=t.pipelines)||void 0===n?void 0:n.settings),{},{triggers:R(R({},null===t||void 0===t||null===(r=t.pipelines)||void 0===r||null===(i=r.settings)||void 0===i?void 0:i.triggers),{},{save_in_code_automatically:e(null===t||void 0===t||null===(o=t.pipelines)||void 0===o||null===(c=o.settings)||void 0===c||null===(l=c.triggers)||void 0===l?void 0:l.save_in_code_automatically)})})})})}))}}})}),(0,A.jsx)(h.Z,{mt:w.HN}),(0,A.jsx)(j.Z,{noPadding:!0,overflowVisible:!0,children:(0,A.jsxs)(h.Z,{p:w.cd,children:[(0,A.jsx)(h.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"Features"})}),Object.entries((0,I.gR)(null===W||void 0===W?void 0:W.features,[f.d.CODE_BLOCK_V2])||{}).map((function(e,t){var n=(0,i.Z)(e,2),o=n[0],c=n[1],l=Q&&!F&&(null===ee||void 0===ee?void 0:ee.features_override)&&o in(null===ee||void 0===ee?void 0:ee.features_override);return(0,A.jsx)(h.Z,{mt:0===t?0:1,children:(0,A.jsxs)(u.ZP,{alignItems:"center",children:[(0,A.jsxs)(d.Z,{flex:1,children:[(0,A.jsx)(Z.Z,{disabled:l,checked:!!c,compact:!0,onCheck:function(){return X((function(e){return R(R({},e),{},{features:R(R({},null===W||void 0===W?void 0:W.features),{},(0,r.Z)({},o,!c))})}))}}),(0,A.jsx)(h.Z,{mr:w.cd}),(0,A.jsxs)(d.Z,{children:[(0,A.jsx)(g.ZP,{default:!c,monospace:!0,children:(0,D.vg)(o)}),o===f.d.LOCAL_TIMEZONE&&(0,A.jsx)(h.Z,{ml:1,children:(0,A.jsx)(x.Z,R({},S.EB))})]})]}),l&&(0,A.jsx)(g.ZP,{monospace:!0,muted:!0,small:!0,children:"overridden"})]})},o)}))]})}),(0,A.jsx)(h.Z,{mt:w.HN}),(0,A.jsx)(j.Z,{noPadding:!0,children:(0,A.jsxs)(h.Z,{p:w.cd,children:[(0,A.jsx)(h.Z,{mb:1,children:(0,A.jsx)(a.Z,{level:5,children:"OpenAI"})}),re&&!z?(0,A.jsxs)(u.ZP,R(R({},u.A0),{},{children:[(0,A.jsx)(g.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,A.jsx)(l.ZP,{iconOnly:!0,onClick:function(){return G(!0)},secondary:!0,title:"Edit",children:(0,A.jsx)(C.Edit,{size:E.bL})})]})):(0,A.jsx)(m.Z,{disabled:oe,label:oe?"Entering API key is disabled on demo":"API key",monospace:!0,onChange:function(e){return X((function(t){return R(R({},t),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===W||void 0===W?void 0:W.openai_api_key)||""})]})}),(0,A.jsx)(h.Z,{mt:w.HN}),(0,A.jsxs)(u.ZP,{alignItems:"center",children:[(0,A.jsx)(l.ZP,{id:"save-project-settings",loading:de,onClick:function(){var e={features:null===W||void 0===W?void 0:W.features,help_improve_mage:null===W||void 0===W?void 0:W.help_improve_mage,openai_api_key:null===W||void 0===W?void 0:W.openai_api_key,pipelines:null===W||void 0===W?void 0:W.pipelines};!0===(null===ee||void 0===ee?void 0:ee.help_improve_mage)&&!1===(null===W||void 0===W?void 0:W.help_improve_mage)&&(e.deny_improve_mage=!0),ue(e)},primary:!0,children:"Save project settings"}),M&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(h.Z,{mr:w.cd}),(0,A.jsx)(l.ZP,{onClick:M,secondary:!0,children:_||"Cancel"})]})]})]});return P?(0,A.jsx)(k,{children:ae}):ae}},46568:function(e,t,n){"use strict";var r=n(82394),i=n(26304),o=(n(82684),n(33591)),c=n(28598),l=["children","fullHeight","gutter","style"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=e.fullHeight,r=e.gutter,s=e.style,u=void 0===s?{}:s,a=(0,i.Z)(e,l),p=d({},u);return r&&(p.paddingLeft=r,p.paddingRight=p.paddingLeft),n&&(p.height="100%"),(0,c.jsx)(o.Col,d(d({},a),{},{style:p,children:t}))}},82682:function(e,t,n){"use strict";var r=n(82394),i=n(26304),o=n(82684),c=n(33591),l=n(28598),s=["children","fullHeight","gutter","justifyContent","style"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.children,n=e.fullHeight,r=e.gutter,d=e.justifyContent,a=e.style,p=void 0===a?{}:a,j=(0,i.Z)(e,s),f=u({},p);return r&&(f.marginLeft=-1*r,f.marginRight=f.marginLeft),n&&(f.height="100%"),(0,l.jsx)(c.Row,u(u({},j),{},{justifyContent:d,style:f,children:o.Children.map(t,(function(e,t){return e&&o.cloneElement(e,{gutter:r,key:t})}))}))}},70791:function(e,t,n){"use strict";n.r(t);var r=n(77837),i=n(38860),o=n.n(i),c=n(46568),l=n(55729),s=n(93808),d=n(82682),u=n(28274),a=n(38276),p=n(70515),j=n(24755),f=n(28598);function v(){return(0,f.jsx)(u.Z,{uuidItemSelected:j.B2.PREFERENCES,uuidWorkspaceSelected:j.Pl.PROJECT_PLATFORM,children:(0,f.jsx)(a.Z,{p:p.cd,children:(0,f.jsx)(d.Z,{justifyContent:"center",children:(0,f.jsx)(c.Z,{xl:8,xxl:6,children:(0,f.jsx)(l.Z,{rootProject:!0})})})})})}v.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,s.Z)(v)},8071:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/platform/preferences",function(){return n(70791)}])}},function(e){e.O(0,[1557,5699,9774,2888,179],(function(){return t=8071,e(e.s=t);var t}));var t=e.O();_N_E=t}]);