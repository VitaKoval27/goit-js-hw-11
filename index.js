import{a as f,S as m,i as d}from"./assets/vendor-Cip_4kvj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(n){return f.get("https://pixabay.com/api/",{params:{q:n,key:"51327583-eda9110ddf8c3e7e62438a086",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("ERROR:",t),t})}let l;function y(n){const t=n.map(({webformatURL:o,tags:a,largeImageURL:e,likes:r,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
       <a class="gallery-link" href="${e}">
       <img
        class="gallery-image"
        src="${o}"
        alt="${a}"
      />
      <ul class=info-wrapper>
      <li class="info-item">
      <span>likes</span>
      ${r}
      </li>
      <li class="info-item">
      <span>Comments</span>
      ${c}
      </li>
      <li class="info-item"><span> Views</span>
      ${s}</li>
      <li class="info-item"><span>Downloads</span>
      ${u}</li>
      </ul>
      
     </a>
    </li>
     `).join("");l||(l=new m(".gallery a",{})),i.gallery.insertAdjacentHTML("beforeend",t),l.refresh()}function g(){i.gallery.innerHTML=""}function h(){i.loader.classList.add("is-open")}function L(){i.loader.classList.remove("is-open")}const i={form:document.querySelector("form"),btn:document.querySelector("button"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",b);function b(n){n.preventDefault();const t=i.input.value.trim();t&&(g(),h(),p(t).then(o=>{if(o.hits.length===0){d.error({title:"(",message:`Sorry, there are no images matching your search ${t}. Please try again!`,position:"topRight"});return}y(o.hits)}).catch(o=>console.log(o)).finally(()=>{L(),i.form.reset()}))}
//# sourceMappingURL=index.js.map
