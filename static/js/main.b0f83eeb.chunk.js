(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(299)},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),o=a(11),i=a(20),u=a(143),s=a(22),m={isSignedIn:null,userId:null,userName:null},d=a(48),h=a(44),p=a.n(h),f=a(310),E=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)({},m),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(s.a)({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case"SIGN_OUT":return Object(s.a)({},e,m,{isSignedIn:!1});default:return e}},form:f.a,threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_THREADS":return Object(s.a)({},p.a.mapKeys(t.payload,"id"));case"FETCH_THREAD":return Object(s.a)({},e,Object(d.a)({},t.payload.id,t.payload));case"DELETE_THREAD":return Object(s.a)({},p.a.omit(e,t.payload));default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENTS":return Object(s.a)({},e);case"DELETE_COMMENT":return p.a.omit(e,t.payload);case"FETCH_COMMENT":case"CREATE_COMMENT":case"EDIT_COMMENT":return Object(s.a)({},e,Object(d.a)({},t.payload.id,t.payload));default:return e}}}),b=a(14),g=a(15),v=a(17),O=a(16),j=a(18),y=a(307),T=a(12),C=a.n(T),I=a(27),S=a(144),w=a.n(S).a.create({baseURL:"http://localhost:3001"}),N=a(145),k=a.n(N)()(),x=function(){return function(){var e=Object(I.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/threads");case 2:a=e.sent,t({type:"FETCH_THREADS",payload:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},_=function(e,t){return function(){var a=Object(I.a)(C.a.mark(function a(n){var r;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.patch("threads/".concat(e),t);case 2:r=a.sent,n({type:"EDIT_THREAD",payload:r.data}),k.push("/forum");case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},A=a(308),D=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).onAuthChange=function(e){if(e){var t=a.auth.currentUser.get();a.props.signIn(t.El,t.getBasicProfile().ig)}else{if(null===e)return;a.props.signOut()}},a.renderAuthButton=function(){return null===a.props.isSignedIn?r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign In"):a.props.isSignedIn?r.a.createElement("div",{onClick:a.onAuthClick},r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign Out"):r.a.createElement("div",{onClick:a.onAuthClick},r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign In")},a.renderUserName=function(){if(a.props.isSignedIn)return r.a.createElement("div",{className:"nav-link"},r.a.createElement("i",{className:"fas fa-fw fa-user"}),"Hi, ".concat(a.props.userName))},a.onAuthClick=function(){a.props.isSignedIn?a.auth.disconnect():a.auth.signIn()},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"88520721261-32agcpmf7pf3oocj25b6qujkf4j5vnv4.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a.Item,{className:"nav-link"},this.renderAuthButton()),this.renderUserName())}}]),t}(r.a.Component),R={signIn:function(e,t){return{type:"SIGN_IN",payload:{userId:e,userName:t}}},signOut:function(){return{type:"SIGN_OUT"}}},M=Object(i.b)(function(e){return{isSignedIn:e.auth.isSignedIn,userName:e.auth.userName}},R)(D),F=a(309),H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(y.a,{to:"/"},r.a.createElement(F.a.Brand,null,"Tutor")),r.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(F.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(A.a,{className:"mr-auto"},r.a.createElement(y.a,{className:"nav-link",to:"/materials"},r.a.createElement(A.a.Item,null,"Materials")),r.a.createElement(y.a,{className:"nav-link",to:"/forum"},r.a.createElement(A.a.Item,null,"Forum")),r.a.createElement(M,null)))))},L=a(313),B=a(312),G=a(314),U=a(311),P=a(45),q=a(300),J=a(306),V=function(e){function t(e,a){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(O.a)(t).call(this,e,a))).handleShow=n.handleShow.bind(Object(P.a)(Object(P.a)(n))),n.handleClose=n.handleClose.bind(Object(P.a)(Object(P.a)(n))),n.state={show:!1},n}return Object(j.a)(t,e),Object(g.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{variant:"danger",onClick:this.handleShow},this.props.button),r.a.createElement(J.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(J.a.Header,{closeButton:!0},r.a.createElement(J.a.Title,null,this.props.title)),r.a.createElement(J.a.Body,null," ",this.props.message),r.a.createElement(J.a.Footer,null,r.a.createElement(q.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(q.a,{variant:"danger",onClick:this.props.onClick},this.props.button))))}}]),t}(r.a.Component),X=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).renderThreads=function(){return a.props.threads.map(function(e){return r.a.createElement("div",{className:"d-inline-flex p-2",style:{paddingTop:"20px"},key:"".concat(e.id)},r.a.createElement(U.a,{body:!0},r.a.createElement(y.a,{style:{textDecoration:"none",color:"inherit"},to:"/thread/".concat(e.id)},r.a.createElement(U.a.Title,null,e.title),r.a.createElement(U.a.Subtitle,null,e.userName)),a.EditOrDeleteButtons(e)))})},a.renderRefresh=function(){return r.a.createElement("button",{onClick:function(){a.props.loadThreads()},style:{paddingLeft:"1.1rem",paddingRight:"1.1rem",marginTop:"7px"}},r.a.createElement("i",{className:"fas fa-sync-alt"}))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadThreads()}},{key:"renderThreadButton",value:function(e){if(e.isSignedIn)return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{to:"/createpost"},r.a.createElement("div",{className:"float-right",style:{paddingLeft:"1.1rem",paddingRight:"1.1rem",marginTop:"7px"}},r.a.createElement("i",{className:"fas fa-fw fa-plus"}),"Create Thread")),r.a.createElement("br",null))}},{key:"EditOrDeleteButtons",value:function(e){var t=this;if(this.props.userId===e.userId)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(y.a,{to:"editThread/".concat(e.id),className:"btn btn-primary",style:{marginRight:"15px"}},"EDIT"),r.a.createElement(V,{title:"DELETE THREAD",message:"you sure you want to delete?",button:"DELETE",onClick:function(){return t.props.deleteThread(e.id)}})))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderRefresh(),this.props.isSignedIn?null:r.a.createElement("br",null),this.renderThreadButton(this.props),this.renderThreads(),r.a.createElement("br",null))}}]),t}(r.a.Component),Y={loadThreads:x,editThread:_,deleteThread:function(e){return function(){var t=Object(I.a)(C.a.mark(function t(a){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.delete("/threads/".concat(e),e);case 2:a({type:"DELETE_THREAD",payload:e});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},K=Object(i.b)(function(e){return{threads:Object.values(e.threads),isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}},Y)(X),z=a(304),Q=a(303),W=a(305),Z=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"alert alert-danger"},t)},a.renderInput=function(e){var t=e.input,n=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Label,null,n),r.a.createElement(W.a.Control,Object.assign({type:"text"},t,{autoComplete:"off"})),a.renderError(c))},a.renderTextarea=function(e){var t=e.input,n=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Label,null,n),r.a.createElement(W.a.Control,Object.assign({as:"textarea",rows:"5"},t,{autoComplete:"off"})),a.renderError(c))},a.onSubmit=function(e){a.props.onSubmit(e)},a.renderForm=function(){return r.a.createElement(W.a,{onSubmit:a.props.handleSubmit(a.onSubmit)},r.a.createElement(W.a.Group,null,r.a.createElement(z.a,{name:"title",component:a.renderInput,label:"Title"})),r.a.createElement(W.a.Group,null,r.a.createElement(z.a,{name:"content",component:a.renderTextarea,label:"Content"})),r.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderForm())}}]),t}(r.a.Component),$=Object(Q.a)({form:"ThreadFrom",validate:function(e){var t={};return e.title||(t.title="ENTER TITLE"),e.content||(t.content="ENTER CONTENT"),e.title&&e.title.length>50&&(t.title="title must be short than 25 characters"),t}})(Z),ee=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.createThread(e)},a.signInCheck=function(){return a.props.isSignedIn?r.a.createElement($,{onSubmit:a.onSubmit}):r.a.createElement("div",null," Log In first")},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Create a Thread"),this.signInCheck())}}]),t}(r.a.Component),te=Object(i.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{createThread:function(e){return function(){var t=Object(I.a)(C.a.mark(function t(a,n){var r,c,l,o;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.userId,l=r.userName,t.next=3,w.post("/threads",Object(s.a)({},e,{userId:c,userName:l}));case 3:o=t.sent,a({type:"CREATE_THREAD",payload:o.data}),k.push("/forum");case 6:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}})(ee),ae=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"alert alert-danger"},t)},a.renderTextarea=function(e){var t=e.input,n=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Label,null,n),r.a.createElement(W.a.Control,Object.assign({as:"textarea",rows:"5"},t,{autoComplete:"off"})),a.renderError(c))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"onSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement(W.a,{onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(W.a.Group,null,r.a.createElement(z.a,{name:"Comment",component:this.renderTextarea,label:"Comment"})),r.a.createElement(q.a,{variant:"primary",type:"submit"},"Submit"))}}]),t}(r.a.Component),ne=Object(Q.a)({form:"createComment",validate:function(e){var t={};return e.comment||(t.comment="ENTER COMMENT"),t}})(ae),re=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"alert alert-danger"},t)},a.renderTextarea=function(e){var t=e.input,n=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a.Label,null,n),r.a.createElement(W.a.Control,Object.assign({as:"textarea",rows:"5"},t,{autoComplete:"off"})),a.renderError(c))},a.onSubmit=function(e){a.props.createComment(e)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(ne,null)}}]),t}(r.a.Component),ce=Object(Q.a)({form:"createComment",validate:function(e){var t={};return e.comment||(t.content="ENTER CONTENT"),t}})(re),le=Object(i.b)(function(e){return{}},{loadThreads:x,createComment:function(e,t){return function(){var a=Object(I.a)(C.a.mark(function a(n,r){var c,l;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=r().auth.userId,a.next=3,w.post("/comments",Object(s.a)({},e,{threadId:t,userId:c}));case 3:l=a.sent,n({type:"CREATE_COMMENT",payload:l.data});case 5:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()}})(ce),oe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Main"))},ie=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Materials"))},ue=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.editThread(a.props.thread.id,e)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadThreads()}},{key:"render",value:function(){return this.props.isSignedIn?this.props.thread?this.props.userId!==this.props.thread.userId?r.a.createElement("div",null,"You are not the creator"):r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Edit a Thread"),r.a.createElement($,{onSubmit:this.onSubmit,initialValues:p.a.pick(this.props.thread,"title","content")})):r.a.createElement("div",null,"Stream does not exist (or loading for few seconds)"):r.a.createElement("div",null,"You have not signed in!\n                    (might need to load for a second)")}}]),t}(r.a.Component),se=Object(i.b)(function(e,t){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId,thread:e.threads[t.match.params.id]}},{loadThreads:x,editThread:_})(ue),me=a(301),de=a(302),he=function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{history:k},r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(me.a,null,r.a.createElement(de.a,{src:"https://www.mba.ust.hk/img/imagecache/_files_1_hkust_sundial_2014_leading_global_business_school__1966x640_1c85ffffff1.jpg",fluid:!0}),r.a.createElement(B.a,null,r.a.createElement(G.a,{path:"/",exact:!0,component:oe}),r.a.createElement(G.a,{path:"/materials",exact:!0,component:ie}),r.a.createElement(G.a,{path:"/forum",exact:!0,component:K}),r.a.createElement(G.a,{path:"/thread/:id",exact:!0,component:le}),r.a.createElement(G.a,{path:"/createPost",exact:!0,component:te}),r.a.createElement(G.a,{path:"/editThread/:id",exact:!0,component:se})))))}}]),t}(r.a.Component),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,fe=Object(o.e)(E,pe(Object(o.a)(u.a)));l.a.render(r.a.createElement(i.a,{store:fe},r.a.createElement(he,null)),document.querySelector("#root"))}},[[149,2,1]]]);
//# sourceMappingURL=main.b0f83eeb.chunk.js.map