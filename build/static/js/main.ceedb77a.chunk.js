(this.webpackJsonptonerinv=this.webpackJsonptonerinv||[]).push([[0],{128:function(e,t,a){e.exports=a(157)},157:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),u=a(12),o=a.n(u),l=a(13),i=a(109),s=a(228),m=a(70),p=a(227),d=a(6),f=a.n(d),E=a(11),v=a(26),b=a.n(v);n="/api/toners";var h,g=null,w={setToken:function(e){g="bearer ".concat(e)},getAll:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.post(n,t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(E.a)(f.a.mark((function e(t,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(n,"/").concat(t),a);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(E.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:g}},e.next=3,b.a.delete("".concat(n,"/").concat(t),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=a(234),y=a(211),j=a(208),x=a(229),k=a(230),S=a(100),R=a.n(S),N=a(53),T=a(206),C=a(207),U=a(205),A=function(){return c.a.createElement(N.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(U.a,{color:"inherit",href:"/"},"Duras")," ",(new Date).getFullYear(),".")};h="/api/login";var _={login:function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(h,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"LOGIN_USER",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log("currentUserReducer state now: ",e),console.log("currentUserReducer action",t),t.type){case"GET_USER":case"LOGIN_USER":return t.data;case"LOGOUT_USER":return null;default:return e}},B=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function W(){var e=Object(l.b)(),t=B(),a=function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.login(a);case 2:n=t.sent,window.localStorage.setItem("loggedAppUser",JSON.stringify(n)),w.setToken(n.token),e(I(n));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(C.a,{component:"main",maxWidth:"xs"},c.a.createElement(j.a,null),c.a.createElement("div",{className:t.paper},c.a.createElement(O.a,{className:t.avatar},c.a.createElement(R.a,null)),c.a.createElement(N.a,{component:"h1",variant:"h5"},"Sign in"),c.a.createElement("form",{className:t.form,onSubmit:function(e){e.preventDefault();var t=e.target.username.value,n=e.target.password.value;a({username:t,password:n})}},c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),c.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"))),c.a.createElement(k.a,{mt:8},c.a.createElement(A,null)))}var L,z=a(25),G=a(67),M=a(43),P=a(68),F=a(16),q=a(3),J=a(233),V=a(224),H=a(225),X=a(217),Y=a(226),K=a(159),Q=a(105),Z=a.n(Q),$=a(104),ee=a.n($),te=a(223),ae=a(110),ne=a(106),re=a.n(ne),ce=a(210),ue=a(160),oe=a(212),le=a(213),ie=a(215),se=a(102),me=a.n(se),pe=a(81),de=a.n(pe),fe=a(77),Ee=a.n(fe),ve=a(78),be=a.n(ve),he=a(216),ge=a(79),we=a.n(ge),Oe=a(80),ye=a.n(Oe),je=a(214),xe=Object(T.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}})),ke=function(){var e=Object(l.c)((function(e){return e.currentUser})),t=xe(),a=c.a.useState(!0),n=Object(z.a)(a,2),r=n[0],u=n[1],o=c.a.useState(!0),i=Object(z.a)(o,2),s=i[0],m=i[1];function p(e){return c.a.createElement(ue.a,Object.assign({button:!0,component:P.b},e))}return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(p,{to:"/"},c.a.createElement(oe.a,null,c.a.createElement(me.a,null)),c.a.createElement(le.a,{primary:"Dashboard"}))),c.a.createElement(je.a,null),c.a.createElement("div",null,c.a.createElement(ie.a,null,"Toners"),c.a.createElement(p,{to:"/toners/list"},c.a.createElement(oe.a,null,c.a.createElement(Ee.a,null)),c.a.createElement(le.a,{primary:"Toners"}))),"admin"===e.usergroup?c.a.createElement("div",null,c.a.createElement(ie.a,null,"Admin"),c.a.createElement(je.a,null),c.a.createElement(ue.a,{button:!0,onClick:function(){return u(!r)}},c.a.createElement(oe.a,null,c.a.createElement(be.a,null)),c.a.createElement(le.a,{primary:"Toners"}),r?c.a.createElement(we.a,null):c.a.createElement(ye.a,null)),c.a.createElement(he.a,{in:r,timeout:"auto",unmountOnExit:!0},c.a.createElement(ce.a,{component:"div",disablePadding:!0},c.a.createElement(p,{to:"/admin/toners/create",className:t.nested},c.a.createElement(oe.a,null,c.a.createElement(de.a,null)),c.a.createElement(le.a,{primary:"Create toner"})))),c.a.createElement(ue.a,{button:!0,onClick:function(){return m(!s)}},c.a.createElement(oe.a,null,c.a.createElement(be.a,null)),c.a.createElement(le.a,{primary:"Users"}),s?c.a.createElement(we.a,null):c.a.createElement(ye.a,null)),c.a.createElement(he.a,{in:s,timeout:"auto",unmountOnExit:!0},c.a.createElement(ce.a,{component:"div",disablePadding:!0},c.a.createElement(p,{to:"/admin/users/list",className:t.nested},c.a.createElement(oe.a,null,c.a.createElement(Ee.a,null)),c.a.createElement(le.a,{primary:"List users"})),c.a.createElement(p,{to:"/admin/users/create",className:t.nested},c.a.createElement(oe.a,null,c.a.createElement(de.a,null)),c.a.createElement(le.a,{primary:"Create user"}))))):c.a.createElement(c.a.Fragment,null))},Se=a(231),Re=function(){var e=Object(l.c)((function(e){return e.toners}));return c.a.createElement("div",null,c.a.createElement(Se.a,{id:"combo-box-demo",options:e,getOptionLabel:function(e){return e.model},style:{width:300},renderInput:function(e){return c.a.createElement(x.a,Object.assign({},e,{label:"Combo box",variant:"outlined"}))}}))},Ne=a(220),Te=a(221),Ce=a(218),Ue=a(219),Ae=a(222);L="/api/users";var _e=null,Ie={setToken:function(e){_e="bearer ".concat(e)},getAll:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(L);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:_e}},e.next=3,b.a.post(L,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(L,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),remove:function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:_e}},e.next=3,b.a.delete("".concat(L,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},De=function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ie.create(e);case 2:n=t.sent,a({type:"CREATE_USER",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("userReducer state now: ",e),console.log("userReducer action",t),t.type){case"INIT_USERS":case"CURRENT_USER":return t.data;case"CREATE_USER":return e.concat(t.data);case"REMOVE_USER":return e.filter((function(e){return e.id!==t.data}));default:return e}},We=function(e){var t=e.user,a=Object(l.b)();return c.a.createElement(Ce.a,null,c.a.createElement(Ue.a,null,t.username),c.a.createElement(Ue.a,null,t.usergroup),c.a.createElement(Ue.a,{align:"right"},c.a.createElement(y.a,{variant:"contained",type:"button",onClick:function(){var e;a((e=t,function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ie.remove(e.id);case 2:a({type:"REMOVE_USER",data:e.id});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}},"Remove")))},Le=function(){var e=Object(l.c)((function(e){return e.users}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ne.a,null,c.a.createElement(Te.a,null,c.a.createElement(Ce.a,null,c.a.createElement(Ue.a,null,"Username"),c.a.createElement(Ue.a,null,"Usergroup"),c.a.createElement(Ue.a,{align:"right"},"Options"))),c.a.createElement(Ae.a,null,e.map((function(e){return c.a.createElement(We,{key:e.id,user:e})})))))},ze=function(){var e=Object(l.b)(),t=Object(r.useState)(""),a=Object(z.a)(t,2),n=a[0],u=a[1],o=Object(r.useState)(""),i=Object(z.a)(o,2),s=i[0],m=i[1],p=Object(r.useState)(""),d=Object(z.a)(p,2),v=d[0],b=d[1],h=function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(De({usergroup:n,username:s,password:v})),m(""),b("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:h},c.a.createElement("div",null,c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"usergroup",label:"Usergroup",name:"usergroup",value:n,onChange:function(e){return u(e.target.value)},select:!0},[{value:"admin",label:"Admin"},{value:"user",label:"User"}].map((function(e){return c.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))),c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:s,onChange:function(e){return m(e.target.value)},autoComplete:"username",autoFocus:!0}),c.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",value:v,onChange:function(e){return b(e.target.value)},type:"password",autoComplete:"new-password"}),c.a.createElement(y.a,{fullWidth:!0,type:"submit",variant:"outlined",color:"primary"},"create"))))},Ge=function(){return function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:a=e.sent,t({type:"INIT_TONERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Me=function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={model:e,amount:0},t.next=3,w.create(n);case 3:r=t.sent,a({type:"CREATE_TONER",data:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("tonerReducer state now: ",e),console.log("tonerReducer action",t),t.type){case"INIT_TONERS":return t.data;case"CREATE_TONER":return e.concat(t.data);case"ADD_TONER":case"SUB_TONER":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"REMOVE_TONER":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},Fe=function(e){var t=e.toner,a=Object(l.b)();return c.a.createElement(Ce.a,null,c.a.createElement(Ue.a,null,t.model),c.a.createElement(Ue.a,{align:"center"},t.amount),c.a.createElement(Ue.a,{align:"right"},c.a.createElement(y.a,{variant:"contained",type:"button",onClick:function(){if(t.amount<=0)return console.log("error");a(function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a,n){var r,c,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().toners.find((function(t){return t.id===e.id})),c=Object(M.a)(Object(M.a)({},r),{},{amount:r.amount-1}),t.next=4,w.update(e.id,c);case 4:u=t.sent,a({type:"ADD_TONER",data:u});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}},"-"),c.a.createElement(y.a,{variant:"contained",type:"button",onClick:function(){a(function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a,n){var r,c,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().toners.find((function(t){return t.id===e.id})),c=Object(M.a)(Object(M.a)({},r),{},{amount:r.amount+1}),t.next=4,w.update(e.id,c);case 4:u=t.sent,a({type:"ADD_TONER",data:u});case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}},"+"),c.a.createElement(y.a,{variant:"contained",type:"button",onClick:function(){a(function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.remove(e.id);case 2:a({type:"REMOVE_TONER",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}},"Remove")))},qe=function(){var e=Object(l.c)((function(e){return e.toners}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ne.a,null,c.a.createElement(Te.a,null,c.a.createElement(Ce.a,null,c.a.createElement(Ue.a,null,"Model"),c.a.createElement(Ue.a,{align:"center"},"Amount"),c.a.createElement(Ue.a,{align:"right"},"Add / Sub"))),c.a.createElement(Ae.a,null,e.map((function(e){return c.a.createElement(Fe,{key:e.id,toner:e})})))))},Je=function(){var e=Object(l.b)(),t=Object(r.useState)(""),a=Object(z.a)(t,2),n=a[0],u=a[1],o=function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e(Me(n)),u("");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:o},c.a.createElement("div",null,c.a.createElement(x.a,{label:"Model",variant:"outlined",value:n,onChange:function(e){var t=e.target;return u(t.value)}}),c.a.createElement(y.a,{variant:"outlined",color:"primary",type:"submit"},"create"))))},Ve=Object(T.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(M.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:200,width:"calc(100% - ".concat(200,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:200,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(G.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function He(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.currentUser})),a=Ve(),n=c.a.useState(!0),r=Object(z.a)(n,2),u=r[0],o=r[1],i=c.a.useState(null),s=Object(z.a)(i,2),m=s[0],p=s[1],d=function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),window.localStorage.removeItem("loggedAppUser"),w.setToken(null),e(function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT_USER"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement(P.a,null,c.a.createElement("div",{className:a.root},c.a.createElement(j.a,null),c.a.createElement(V.a,{position:"absolute",className:Object(q.a)(a.appBar,u&&a.appBarShift)},c.a.createElement(H.a,{className:a.toolbar},c.a.createElement(X.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){return o(!0)},className:Object(q.a)(a.menuButton,u&&a.menuButtonHidden)},c.a.createElement(ee.a,null)),c.a.createElement(N.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title}),c.a.createElement("div",null,c.a.createElement(X.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){return p(e.currentTarget)},color:"inherit"},c.a.createElement(Z.a,null)),c.a.createElement(ae.a,{id:"menu-appbar",anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(m),onClose:function(){return p(null)}},c.a.createElement(te.a,{onClick:d},"Logout"))))),c.a.createElement(J.a,{variant:"permanent",classes:{paper:Object(q.a)(a.drawerPaper,!u&&a.drawerPaperClose)},open:u},c.a.createElement("div",{className:a.toolbarIcon},c.a.createElement(X.a,{onClick:function(){return o(!1)}},c.a.createElement(re.a,null))),c.a.createElement(ke,null)),c.a.createElement("main",{className:a.content},c.a.createElement("div",{className:a.appBarSpacer}),c.a.createElement(C.a,{maxWidth:"lg",className:a.container},c.a.createElement(F.d,null,c.a.createElement(F.b,{path:"/toners/list"},c.a.createElement(K.a,null,c.a.createElement(qe,null))),"admin"===t.usergroup?c.a.createElement(c.a.Fragment,null,c.a.createElement(F.b,{path:"/admin/users/list"},c.a.createElement(K.a,null,c.a.createElement(Le,null))),c.a.createElement(F.b,{path:"/admin/toners/create"},c.a.createElement(Y.a,{container:!0,spacing:3},c.a.createElement(Y.a,{item:!0,xs:12},c.a.createElement(K.a,{className:a.paper},c.a.createElement(Je,null))))),c.a.createElement(F.b,{path:"/admin/users/create"},c.a.createElement(Y.a,{container:!0,spacing:3},c.a.createElement(Y.a,{item:!0,xs:3},c.a.createElement(K.a,{className:a.paper},c.a.createElement(ze,null)))))):c.a.createElement(F.a,{to:"/"}),c.a.createElement(F.b,{path:"/"},c.a.createElement(Re,null))),c.a.createElement(k.a,{pt:4},c.a.createElement(A,null))))))}var Xe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.currentUser}));return Object(r.useEffect)((function(){var t,a=window.localStorage.getItem("loggedAppUser");if(a){var n=JSON.parse(a);e((t=n,function(){var e=Object(E.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"GET_USER",data:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),w.setToken(n.token),e(Ge()),e(function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie.getAll();case 2:a=e.sent,t({type:"INIT_USERS",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[e]),c.a.createElement("div",null,null===t?c.a.createElement(W,null):c.a.createElement(He,null))},Ye=a(42),Ke=a(107),Qe=a(108),Ze=Object(Ye.combineReducers)({toners:Pe,users:Be,currentUser:D}),$e=Object(Ye.createStore)(Ze,Object(Qe.composeWithDevTools)(Object(Ye.applyMiddleware)(Ke.a)));w.getAll().then((function(e){return $e.dispatch(Ge())}));var et=Object(i.a)({palette:{type:"dark",primary:{main:m.a[500]},secondary:{main:p.a[900]}}});o.a.render(c.a.createElement(l.a,{store:$e},c.a.createElement(s.a,{theme:et},c.a.createElement(Xe,null))),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.ceedb77a.chunk.js.map