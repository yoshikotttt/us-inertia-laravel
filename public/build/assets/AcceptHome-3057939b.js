import{j as s}from"./app-c863a855.js";const r=({notifications:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"bg-white p-4 rounded shadow-md",children:e&&e.length>0?s.jsxs("div",{className:"notifications",children:[s.jsxs("p",{className:"font-bold text-lg mb-3",children:["通知あり"," ",s.jsx("span",{className:"text-blue-500",children:e.length})," ","件"]}),s.jsx("ul",{className:"list-disc pl-5 space-y-2 ",children:e.map((l,a)=>s.jsxs("li",{className:"mb-2 p-2 bg-blue-100 rounded w-1/2",children:[l.message.substring(0,30),"..."]},a))})]}):s.jsx("p",{className:"text-gray-500",children:"通知はありません。"})})});export{r as default};