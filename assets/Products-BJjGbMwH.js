import{u as l,s as r,j as s,L as i,a as c}from"./index-Bp_plc6F.js";const n=({productId:a})=>{const e=l(t=>r(t,a));return s.jsxs(i,{to:`/products/${a}`,"data-aos":"zoom-in","data-aos-delay":`${Number(a)+100}`,"data-aos-once":"true",className:"rounded-2xl bg-white hover:bg-primary hover:text-white  shadow-xl duration-high group w-full mb-5",children:[s.jsx("img",{src:e==null?void 0:e.image_url,alt:e==null?void 0:e.name,className:`size-72 block mx-auto \r
    group-hover:scale-150 group-hover:rotate-6 duration-300`}),s.jsxs("div",{className:"p-4 text-center",children:[s.jsx("div",{className:"w-full "}),s.jsx("p",{className:"text-xl font-bold",children:e==null?void 0:e.name}),s.jsx("p",{className:"text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2",children:e==null?void 0:e.description})]})]})},m=()=>{const a=l(c);return s.jsx("div",{className:"py-16 w-full",children:s.jsx("section",{className:"container",children:s.jsx("article",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 md:gap-8 place-items-center",children:a.map(e=>s.jsx(n,{productId:e},e))})})})};export{m as default};
