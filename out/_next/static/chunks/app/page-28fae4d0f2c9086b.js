(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5013:(e,n,s)=>{Promise.resolve().then(s.bind(s,5098)),Promise.resolve().then(s.bind(s,4919))},5098:(e,n,s)=>{"use strict";s.d(n,{Footer:()=>l});var t=s(5155),a=s(2115);let r=async()=>[{name:"Menu 1",href:"/menu1",submenus:[]},{name:"Menu 2",href:"/menu2",submenus:[{name:"Submenu 2.1",href:"/submenu2-1"},{name:"Submenu 2.2",href:"/submenu2-2"}]},{name:"Menu 2",href:"/menu2",submenus:[{name:"Submenu 2.1",href:"/submenu2-1"},{name:"Submenu 2.2",href:"/submenu2-2"}]},{name:"Menu 2",href:"/menu2",submenus:[{name:"Submenu 2.1",href:"/submenu2-1"},{name:"Submenu 2.2",href:"/submenu2-2"}]},{name:"Menu 2",href:"/menu2",submenus:[{name:"Submenu 2.1",href:"/submenu2-1"},{name:"Submenu 2.2",href:"/submenu2-2"}]}],l=()=>{let[e,n]=(0,a.useState)([]),[s,l]=(0,a.useState)([]);(0,a.useEffect)(()=>{(async()=>{let e=await r();console.log(e),n(e)})()},[]);let u=(e,n)=>{let s=[];for(let t=0;t<e.length;t+=n)s.push(e.slice(t,t+n));return s},c=e=>e.map(e=>{let n=e.reduce((e,n)=>e+1+(n.submenus?n.submenus.length:0),0);return{column:e,totalItems:n}});return(0,a.useEffect)(()=>{e.length>0&&l(c(u(e,2)).sort((e,n)=>e.totalItems-n.totalItems).map(e=>e.column))},[e]),(0,t.jsxs)("footer",{className:"flex flex-wrap gap-8 bg-white text-gray p-8",children:[(0,t.jsxs)("div",{className:"flex-1 justify-start mt-8 flex justify-center space-x-4",children:[(0,t.jsx)("a",{href:"#",children:"Icon 1"}),(0,t.jsx)("a",{href:"#",children:"Icon 2"}),(0,t.jsx)("a",{href:"#",children:"Icon 3"}),(0,t.jsx)("a",{href:"#",children:"Icon 4"})]}),(0,t.jsx)("div",{className:"flex-3 flex gap-8 border-l-1 border-gray",children:s.map((e,n)=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:e.map((e,n)=>{var s;return(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("h4",{className:"font-semibold mb-2",children:e.name}),(null===(s=e.submenus)||void 0===s?void 0:s.length)>0&&(0,t.jsx)("div",{className:"mt-2 space-y-2 max-h-[250px] overflow-y-auto",children:(0,t.jsx)("ul",{className:"space-y-2",children:e.submenus.map((e,n)=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.href,className:"block text-sm hover:bg-gray-600 p-2",children:e.name})},n))})})]},n)})},n))})]})}},4919:(e,n,s)=>{"use strict";s.d(n,{Navbar:()=>r});var t=s(5155),a=s(2115);let r=e=>{var n;let{menuLinks:s,isFooter:r}=e,[l,u]=(0,a.useState)(null),[c,o]=(0,a.useState)(!1),[i,m]=(0,a.useState)(0),[d,h]=(0,a.useState)(null),[f,x]=(0,a.useState)(!0),b=(0,a.useRef)([]),p=(0,a.useRef)(null),v=(0,a.useRef)(0),y=e=>{b.current.some(n=>null==n?void 0:n.contains(e.target))||u(null)};(0,a.useEffect)(()=>(document.addEventListener("click",y),()=>document.removeEventListener("click",y)),[]),(0,a.useEffect)(()=>{let e=()=>{window.innerWidth>=640&&o(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let g=(e,n,s,t)=>{n?(t.preventDefault(),u(l===e?null:e)):window.location.href=s};return(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY;x(e<=v.current),v.current=e};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("nav",{className:"w-full p-4 bg-white relative transition-opacity duration-300 ".concat(f?"opacity-100":"opacity-0"),onMouseMove:e=>{let n=e.target.closest("nav");if(n){let{left:s,width:t}=n.getBoundingClientRect();m(Math.min(Math.max(e.clientX-s,0),t))}},children:[(0,t.jsx)("div",{className:"sm:hidden flex justify-end",children:(0,t.jsx)("button",{onClick:()=>o(!c),className:"text-gray-800",children:c?"✖":"☰"})}),(0,t.jsx)("div",{className:"w-full ".concat(c?"flex-col justify-center items-center":"hidden sm:flex sm:space-x-6 sm:justify-end"),children:null==s?void 0:s.map((e,n)=>(0,t.jsxs)("div",{ref:e=>b.current[n]=e,onMouseEnter:()=>h(n),onMouseLeave:()=>h(null),className:"relative",children:[(0,t.jsxs)("button",{className:"text-gray-800 flex items-center justify-".concat(c?"center !border-r-0":""," space-x-2 leading-none z-10 pr-5\n                ").concat(n===s.length-1?"!border-r-0":"border-r-[1px]"),onClick:s=>g(n,e.submenus.length>0,e.href,s),children:[(0,t.jsx)("span",{className:"hover:text-cyan-500 tracking-widest uppercase text-xs ".concat(l===n?"text-cyan-500":"text-gray-800"),children:e.name}),e.submenus.length>0&&(0,t.jsx)("span",{className:"hover:text-cyan-500 transition-transform duration-200 ".concat(l===n?"rotate-270 text-cyan-500":"rotate-90"," \n                    ").concat(c?"ml-auto":""),children:"\xab"})]}),e.submenus.length>0&&(0,t.jsx)("div",{className:"uppercase text-xs absolute top-full mt-4 right-1 shadow-xl bg-white text-gray-800 rounded-bl-md rounded-br-md shadow-md z-50 transition-all duration-300 overflow-hidden sm:block hidden w-auto \n                  ".concat(l===n?"opacity-100":"max-h-0 opacity-0"),children:e.submenus.map((e,n)=>(0,t.jsxs)("a",{href:e.href,className:"hover: text-cyan-500 inline-block whitespace-nowrap px-4 py-2 text-gray-800 relative group z-10",children:[e.name,(0,t.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"})]},n))}),(0,t.jsx)("div",{className:"sm:hidden flex flex-col mt-2",children:l===n&&e.submenus.map((e,n)=>(0,t.jsx)("a",{href:e.href,className:"block uppercase text-xs px-4 py-2 hover:bg-cyan-500",children:e.name},n))})]},n))}),(0,t.jsx)("div",{ref:p,className:"absolute bottom-0 left-0 h-[8px] bg-cyan-500 transition-all duration-400 ease-in-out hidden sm:block",style:{width:null!==d?"66px":"0px",transform:"translateX(".concat(null!==d?(null===(n=b.current[d])||void 0===n?void 0:n.offsetLeft)||0:i-75,"px)"),opacity:null!==d?"1":"0"}})]})}}},e=>{var n=n=>e(e.s=n);e.O(0,[441,517,358],()=>n(5013)),_N_E=e.O()}]);