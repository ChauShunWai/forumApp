(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports=n(299)},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),o=n.n(c),i=n(11),l=n(18),u=n(143),s=n(22),m={isSignedIn:null,userId:null,userName:null},d=n(48),p=n(31),h=n.n(p),f=n(310),E=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(s.a)({},m),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(s.a)({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case"SIGN_OUT":return Object(s.a)({},e,m,{isSignedIn:!1});default:return e}},form:f.a,threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_THREADS":return Object(s.a)({},h.a.mapKeys(t.payload,"id"));case"FETCH_THREAD":return Object(s.a)({},e,Object(d.a)({},t.payload.id,t.payload));case"DELETE_THREAD":return Object(s.a)({},h.a.omit(e,t.payload));default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENTS":return Object(s.a)({},h.a.mapKeys(t.payload,"id"));case"FETCH_COMMENT":case"CREATE_COMMENT":case"EDIT_COMMENT":return Object(s.a)({},e,Object(d.a)({},t.payload.id,t.payload));case"DELETE_COMMENT":return h.a.omit(e,t.payload);default:return e}}}),b=n(12),g=n(13),v=n(15),y=n(14),O=n(16),T=n(307),j=n(17),C=n.n(j),I=n(27),S=n(144),w=n.n(S).a.create({baseURL:"http://localhost:3001"}),k=n(145),N=n.n(k)()(),x=function(){return function(){var e=Object(I.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/threads");case 2:n=e.sent,t({type:"FETCH_THREADS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},D=function(e,t){return function(){var n=Object(I.a)(C.a.mark(function n(a){var r;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.patch("threads/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_THREAD",payload:r.data}),N.goBack();case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(I.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.delete("/threads/".concat(e),e);case 2:return t.next=4,w.delete("/comments?threadId=".concat(e)).catch(n({type:"DELETE_THREAD",payload:e})).then(N.push("/forum"));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},A=function(){return function(){var e=Object(I.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/comments");case 2:n=e.sent,t({type:"FETCH_COMMENTS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},M=function(e,t){return function(){var n=Object(I.a)(C.a.mark(function n(a,r){var c,o,i,l;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=r().auth,o=c.userId,i=c.userName,n.next=3,w.post("/comments",Object(s.a)({},e,{threadId:t,userId:o,userName:i}));case 3:l=n.sent,a({type:"CREATE_COMMENT",payload:l.data});case 5:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},R=n(308),F=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).onAuthChange=function(e){if(e){var t=n.auth.currentUser.get();n.props.signIn(t.El,t.getBasicProfile().ig)}else{if(null===e)return;n.props.signOut()}},n.renderAuthButton=function(){return null===n.props.isSignedIn?r.a.createElement("div",null,r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign In"):n.props.isSignedIn?r.a.createElement("div",{onClick:n.onAuthClick},r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign Out"):r.a.createElement("div",{onClick:n.onAuthClick},r.a.createElement("i",{className:"fab fa-fw fa-google"}," "),"Sign In")},n.renderUserName=function(){if(n.props.isSignedIn)return r.a.createElement("div",{className:"nav-link"},r.a.createElement("i",{className:"fas fa-fw fa-user"}),"Hi, ".concat(n.props.userName))},n.onAuthClick=function(){n.props.isSignedIn?n.auth.disconnect():n.auth.signIn()},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"88520721261-mtde2bn830flrd3n5s5rmnrf6lra361k.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a.Item,{className:"nav-link"},this.renderAuthButton()),this.renderUserName())}}]),t}(r.a.Component),L={signIn:function(e,t){return{type:"SIGN_IN",payload:{userId:e,userName:t}}},signOut:function(){return{type:"SIGN_OUT"}}},H=Object(l.b)(function(e){return{isSignedIn:e.auth.isSignedIn,userName:e.auth.userName}},L)(F),B=n(309),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(T.a,{to:"/"},r.a.createElement(B.a.Brand,null,"Tutor")),r.a.createElement(B.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(B.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"},r.a.createElement(T.a,{className:"nav-link",to:"/materials"},r.a.createElement(R.a.Item,null,"Materials")),r.a.createElement(T.a,{className:"nav-link",to:"/forum"},r.a.createElement(R.a.Item,null,"Forum")),r.a.createElement(H,null)))))},U=n(314),Y=n(313),P=n(312),V=n(311),J=n(45),K=n(300),X=n(306),q=function(e){function t(e,n){var a;return Object(b.a)(this,t),(a=Object(v.a)(this,Object(y.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(J.a)(Object(J.a)(a))),a.handleClose=a.handleClose.bind(Object(J.a)(Object(J.a)(a))),a.state={show:!1},a}return Object(O.a)(t,e),Object(g.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{variant:"danger",onClick:this.handleShow},this.props.button),r.a.createElement(X.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(X.a.Header,{closeButton:!0},r.a.createElement(X.a.Title,null,this.props.title)),r.a.createElement(X.a.Body,null," ",this.props.message),r.a.createElement(X.a.Footer,null,r.a.createElement(K.a,{variant:"secondary",onClick:this.handleClose},"Close"),r.a.createElement(K.a,{variant:"danger",onClick:this.props.onClick},this.props.button))))}}]),t}(r.a.Component),z=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).renderThreads=function(){return n.props.threads.map(function(e){return r.a.createElement("div",{className:"d-inline-flex p-2",style:{paddingTop:"20px"},key:"".concat(e.id)},r.a.createElement(V.a,{body:!0},r.a.createElement(T.a,{style:{textDecoration:"none",color:"inherit"},to:"/thread/".concat(e.id)},r.a.createElement(V.a.Title,null,e.title),r.a.createElement(V.a.Subtitle,null,e.userName)),n.EditOrDeleteButtons(e)))})},n.renderRefresh=function(){return r.a.createElement("button",{onClick:function(){n.props.loadThreads()},style:{paddingLeft:"1.1rem",paddingRight:"1.1rem",marginTop:"7px"}},r.a.createElement("i",{className:"fas fa-sync-alt"}))},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadThreads()}},{key:"renderThreadButton",value:function(e){if(e.isSignedIn)return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{to:"/createpost"},r.a.createElement("div",{className:"float-right",style:{paddingLeft:"1.1rem",paddingRight:"1.1rem",marginTop:"7px"}},r.a.createElement("i",{className:"fas fa-fw fa-plus"}),"Create Thread")),r.a.createElement("br",null))}},{key:"EditOrDeleteButtons",value:function(e){var t=this;if(this.props.userId===e.userId)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(T.a,{to:"editThread/".concat(e.id),className:"btn btn-primary",style:{marginRight:"15px"}},"EDIT"),r.a.createElement(q,{title:"DELETE THREAD",message:"you sure you want to delete?",button:"DELETE",onClick:function(){return t.props.deleteThread(e.id)}})))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderRefresh(),this.props.isSignedIn?null:r.a.createElement("br",null),this.renderThreadButton(this.props),this.renderThreads(),r.a.createElement("br",null))}}]),t}(r.a.Component),Q={loadThreads:x,editThread:D,deleteThread:_},W=Object(l.b)(function(e){return{threads:Object.values(e.threads),isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}},Q)(z),Z=n(304),$=n(303),ee=n(305),te=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"alert alert-danger"},t)},n.renderInput=function(e){var t=e.input,a=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a.Label,null,a),r.a.createElement(ee.a.Control,Object.assign({type:"text"},t,{autoComplete:"off"})),n.renderError(c))},n.renderTextarea=function(e){var t=e.input,a=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a.Label,null,a),r.a.createElement(ee.a.Control,Object.assign({as:"textarea",rows:"5"},t,{autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e)},n.renderForm=function(){return r.a.createElement(ee.a,{onSubmit:n.props.handleSubmit(n.onSubmit)},r.a.createElement(ee.a.Group,null,r.a.createElement(Z.a,{name:"title",component:n.renderInput,label:"Title"})),r.a.createElement(ee.a.Group,null,r.a.createElement(Z.a,{name:"content",component:n.renderTextarea,label:"Content"})),r.a.createElement(K.a,{variant:"primary",type:"submit"},"Submit"))},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderForm())}}]),t}(r.a.Component),ne=Object($.a)({form:"ThreadFrom",validate:function(e){var t={};return e.title||(t.title="ENTER TITLE"),e.content||(t.content="ENTER CONTENT"),e.title&&e.title.length>50&&(t.title="title must be short than 25 characters"),t}})(te),ae=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){n.props.createThread(e)},n.signInCheck=function(){return n.props.isSignedIn?r.a.createElement(ne,{onSubmit:n.onSubmit}):r.a.createElement("div",null," Log In first")},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Create a Thread"),this.signInCheck())}}]),t}(r.a.Component),re=Object(l.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{createThread:function(e){return function(){var t=Object(I.a)(C.a.mark(function t(n,a){var r,c,o,i;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.userId,o=r.userName,t.next=3,w.post("/threads",Object(s.a)({},e,{userId:c,userName:o}));case 3:i=t.sent,n({type:"CREATE_THREAD",payload:i.data}),N.push("/forum");case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}})(ae),ce=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"alert alert-danger"},t)},n.renderTextarea=function(e){var t=e.input,a=e.label,c=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a.Label,null,a),r.a.createElement(ee.a.Control,Object.assign({as:"textarea",rows:"5"},t,{autoComplete:"off"})),n.renderError(c))},n.onSubmit=function(e){n.props.onSubmit(e),n.props.reset()},n.renderForm=function(){return r.a.createElement(ee.a,{onSubmit:n.props.handleSubmit(n.onSubmit)},r.a.createElement(ee.a.Group,null,r.a.createElement(Z.a,{name:"Comment",component:n.renderTextarea,label:"Comment"})),r.a.createElement(K.a,{variant:"primary",type:"submit"},"Submit"))},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderForm())}}]),t}(r.a.Component),oe=Object($.a)({form:"CommentForm",validate:function(e){var t={};return e.Comment||(t.content="ENTER COMMENT"),t}})(ce),ie=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).signInCheck=function(){return n.props.isSignedIn?r.a.createElement(oe,{onSubmit:n.props.onSubmit}):r.a.createElement("div",null," Log In first")},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Create a Comment"),this.signInCheck())}}]),t}(r.a.Component),le=Object(l.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{createComment:M})(ie),ue=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){n.props.createComment(e,n.props.match.params.id)},n.renderThread=function(){return n.props.thread&&n.props.isSignedIn?r.a.createElement(V.a,null,r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,null,n.props.thread.userName),r.a.createElement(V.a.Subtitle,null,n.props.thread.title),r.a.createElement(V.a.Text,null,n.props.thread.content)),n.EditOrDeleteThreads(n.props.thread)):r.a.createElement("h1",null,"loading")},n.renderComments=function(){return n.props.comments&&n.props.isSignedIn?n.props.comments.map(function(e){return r.a.createElement(V.a,{key:e.id},r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,null,e.userName),r.a.createElement(V.a.Text,null,e.Comment)),n.EditOrDeleteComments(e))}):r.a.createElement("h1",null,"loading/ you are not signed in")},n.renderRefresh=function(){return r.a.createElement("button",{onClick:function(){n.props.loadThreads().then(function(){if(!n.props.thread)return N.push("/forum")}),n.props.loadComments()},style:{paddingLeft:"1.1rem",paddingRight:"1.1rem",marginLeft:"45%"}},r.a.createElement("i",{className:"fas fa-sync-alt"}))},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadComments(),this.props.loadThread(this.props.match.params.id)}},{key:"EditOrDeleteComments",value:function(e){var t=this;if(this.props.userId===e.userId)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(T.a,{to:"/editComment/".concat(e.id),className:"btn btn-primary",style:{marginRight:"15px"}},"EDIT"),r.a.createElement(q,{title:"DELETE COMMENT",message:"you sure you want to delete?",button:"DELETE",onClick:function(){return t.props.deleteComment(e.id,t.props.match.params.id)}})))}},{key:"EditOrDeleteThreads",value:function(e){var t=this;if(this.props.userId===e.userId)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(T.a,{to:"/editThread/".concat(e.id),className:"btn btn-primary",style:{marginRight:"15px"}},"EDIT"),r.a.createElement(q,{title:"DELETE THREAD",message:"you sure you want to delete?",button:"DELETE",onClick:function(){return t.props.deleteThread(e.id)}})))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderThread(),this.renderComments(),this.renderRefresh(),r.a.createElement(le,{onSubmit:this.onSubmit}))}}]),t}(r.a.Component),se=Object(l.b)(function(e,t){var n=t.match.params.id,a=Object.values(e.comments).filter(function(e){return e.threadId===n});return{thread:e.threads[n],comments:a,isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}},{loadThread:function(e){return function(){var t=Object(I.a)(C.a.mark(function t(n){var a;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/threads/".concat(e));case 2:a=t.sent,n({type:"FETCH_THREAD",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},loadThreads:x,loadComments:A,createComment:M,deleteComment:function(e,t){return function(){var n=Object(I.a)(C.a.mark(function n(a,r){return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.delete("/comments/".concat(e));case 2:a({type:"DELETE_COMMENT",payload:e}),N.push("/thread/".concat(t));case 4:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},deleteThread:_})(ue),me=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Main"))},de=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Materials"))},pe=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editThread(n.props.thread.id,e)},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadThreads()}},{key:"render",value:function(){return this.props.isSignedIn?this.props.thread?this.props.userId!==this.props.thread.userId?r.a.createElement("div",null,"You are not the creator"):r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Edit a Thread"),r.a.createElement(ne,{onSubmit:this.onSubmit,initialValues:h.a.pick(this.props.thread,"title","content")})):r.a.createElement("div",null,"Stream does not exist (or loading for few seconds)"):r.a.createElement("div",null,"You have not signed in!\n                    (might need to load for a second)")}}]),t}(r.a.Component),he=Object(l.b)(function(e,t){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId,thread:e.threads[t.match.params.id]}},{loadThreads:x,editThread:D})(pe),fe=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editComment(n.props.comment.id,e)},n}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadComments()}},{key:"render",value:function(){return this.props.isSignedIn?this.props.comment?this.props.userId!==this.props.comment.userId?r.a.createElement("div",null,"You are not the creator"):r.a.createElement("div",null,r.a.createElement("h3",{className:"d-flex justify-content-center"},"Edit a Comment"),r.a.createElement(oe,{onSubmit:this.onSubmit,initialValues:h.a.pick(this.props.comment,"Comment")})):r.a.createElement("div",null,"Comment does not exist (or loading for few seconds)"):r.a.createElement("div",null,"You have not signed in!\n                    (might need to load for a second)")}}]),t}(r.a.Component),Ee=Object(l.b)(function(e,t){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId,comment:e.comments[t.match.params.id]}},{loadComments:A,editComment:function(e,t){return function(){var n=Object(I.a)(C.a.mark(function n(a){var r;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.patch("comments/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_COMMENT",payload:r.data});case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(fe),be=n(301),ge=n(302),ve=function(e){function t(){return Object(b.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{history:N},r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(be.a,null,r.a.createElement(ge.a,{src:"https://www.mba.ust.hk/img/imagecache/_files_1_hkust_sundial_2014_leading_global_business_school__1966x640_1c85ffffff1.jpg",fluid:!0}),r.a.createElement(Y.a,null,r.a.createElement(P.a,{path:"/",exact:!0,component:me}),r.a.createElement(P.a,{path:"/materials",exact:!0,component:de}),r.a.createElement(P.a,{path:"/forum",exact:!0,component:W}),r.a.createElement(P.a,{path:"/thread/:id",exact:!0,component:se}),r.a.createElement(P.a,{path:"/createPost",exact:!0,component:re}),r.a.createElement(P.a,{path:"/editThread/:id",exact:!0,component:he}),r.a.createElement(P.a,{path:"/editComment/:id",exact:!0,component:Ee})))))}}]),t}(r.a.Component),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Oe=Object(i.e)(E,ye(Object(i.a)(u.a)));o.a.render(r.a.createElement(l.a,{store:Oe},r.a.createElement(ve,null)),document.querySelector("#root"))}},[[149,2,1]]]);
//# sourceMappingURL=main.965947b2.chunk.js.map