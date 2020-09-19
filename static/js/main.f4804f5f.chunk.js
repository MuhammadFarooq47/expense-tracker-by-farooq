(this.webpackJsonpexpensetracker=this.webpackJsonpexpensetracker||[]).push([[0],{14:function(e,a,n){e.exports=n(28)},19:function(e,a,n){},20:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(9),l=n.n(c),o=(n(19),n(20),n(2)),s=n(4),i=n(12),u=function(e,a){switch(a.type){case"ADD_TRANSACTION":return Object(o.a)(Object(o.a)({},e),{},{transactions:[a.payload].concat(Object(i.a)(e.transactions)),expense:a.payload.amount<0?e.expense+a.payload.amount:e.expense,income:a.payload.amount>0?e.income+a.payload.amount:e.income});case"REMOVE_TRANSACTION":return Object(o.a)(Object(o.a)({},e),{},{transactions:e.transactions.filter((function(e,n){return n!==a.payload.id})),expense:a.payload.amount<0?e.expense-a.payload.amount:e.expense,income:a.payload.amount>0?e.income-a.payload.amount:e.income});default:return e}},m=Object(t.createContext)(),p=function(e){var a=e.children,n=Object(t.useReducer)(u,{transactions:[],income:0,expense:0}),c=Object(s.a)(n,2),l=c[0],o=c[1];return r.a.createElement(m.Provider,{value:{transactions:l.transactions,income:l.income,expense:l.expense,addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:{amount:e.amount,description:e.description}})},removeTransaction:function(e){o({type:"REMOVE_TRANSACTION",payload:e})}}},a)},d=n(10),E=n.n(d),b=function(){var e=Object(t.useContext)(m),a=e.addTransaction,n=e.removeTransaction,c=e.transactions,l=e.expense,i=e.income;console.log(a);var u=Object(t.useState)(""),p=Object(s.a)(u,2),d=p[0],b=p[1],h=Object(t.useState)(""),f=Object(s.a)(h,2),y=f[0],v=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text_center"}," Exp.Tracker by M.Farooq "),r.a.createElement("h3",{className:"balance"}," Your Balance ",r.a.createElement("br",null)," $",i+l,".00 "),r.a.createElement("div",{className:"expense_container"},r.a.createElement("h3",{className:"income"},"Income ",r.a.createElement("br",null)," $",i,".00 "),r.a.createElement("h3",{className:"expense"},"Expense ",r.a.createElement("br",null)," $",l,".00 ")),r.a.createElement("h3",{className:"h3"}," Transaction History "),r.a.createElement("hr",null),r.a.createElement("ul",{className:"transaction_list"},c.map((function(e,a){return r.a.createElement("li",{key:a,id:"list"},r.a.createElement("span",{onClick:function(){return n(Object(o.a)(Object(o.a)({},e),{},{id:a}))}}," ",r.a.createElement(E.a,null)," "),r.a.createElement("span",null," ",e.description," "),r.a.createElement("span",null," $",e.amount," "))}))),r.a.createElement("h3",{className:"h3"}," Add new Transaction"),r.a.createElement("hr",null),r.a.createElement("form",{className:"transaction_form",onSubmit:function(e){if(e.preventDefault(),0===Number(y))return alert("Please enter correct amount"),!1;var n={amount:Number(y),description:d};a(n),b(""),v("")}},r.a.createElement("label",null,"Enter Description ",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Detail of transaction",required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"Enter Amount ",r.a.createElement("br",null),r.a.createElement("input",{type:"number",value:y,onChange:function(e){return v(e.target.value)},placeholder:"Enter Amount in dollars",required:!0})),r.a.createElement("br",null),r.a.createElement("input",{className:"btn",type:"submit",value:"Add Transaction"}))))};var h=function(){return r.a.createElement(p,null,r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f4804f5f.chunk.js.map