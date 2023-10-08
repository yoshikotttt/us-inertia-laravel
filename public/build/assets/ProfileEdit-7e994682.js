import{W as o,j as e}from"./app-4723462a.js";import{d as h}from"./index-1b404c16.js";import{A as u}from"./AuthenticatedLayout-e98229b6.js";import"./ApplicationLogo-8e89e995.js";import"./transition-789fc62b.js";const f=({user:s})=>{const{data:l,setData:a,post:r}=o({...s,_method:"PUT"}),d=i=>{i.preventDefault(),r(route("profile_detail.update"),l,{preserveScroll:!0,onSuccess:()=>{h.Inertia.visit("/profile-detail/edit")}})};return e.jsx(e.Fragment,{children:e.jsxs(u,{user:s,children:[e.jsx("div",{children:"ProfileEdit"}),e.jsxs("form",{onSubmit:d,children:[e.jsxs("div",{children:[e.jsx("label",{children:"名前:"}),e.jsx("input",{value:l.name,onChange:i=>a("name",i.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{value:l.email,onChange:i=>a("email",i.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"資格:"}),e.jsxs("div",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"専門医",checked:l.qualification==="専門医",onChange:()=>a("qualification","専門医")}),"専門医"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"検査士",checked:l.qualification==="検査士",onChange:()=>a("qualification","検査士")}),"検査士"]})]})]}),e.jsxs("div",{children:[e.jsx("label",{children:"資格取得年度:"}),e.jsx("select",{value:l.qualification_year,onChange:i=>a("qualification_year",i.target.value),children:[...Array(new Date().getFullYear()-1990+1)].map((i,n)=>{const t=new Date().getFullYear()-n;return e.jsxs("option",{value:t,children:[t,"年"]},t)})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"地域:"}),e.jsx("select",{value:l.region,onChange:i=>a("region",i.target.value),children:["北海道","東北","関東","中部","関西","中国四国","九州"].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"対応可能領域:"}),["上腹部","下腹部","心臓"].map(i=>e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",value:i,checked:l.areas.includes(i),onChange:n=>{const t=n.target.checked?[...l.areas,i]:l.areas.filter(c=>c!==i);a("areas",t)}}),i]},i))]}),e.jsx("div",{children:e.jsx("button",{type:"submit",children:"更新する"})})]})]})})};export{f as default};
