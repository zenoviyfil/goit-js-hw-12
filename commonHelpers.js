import{a as n,i as c,S as d}from"./assets/vendor-08b0e0f9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();n.defaults.baseURL="https://pixabay.com/api/?key=41812412-8184544d67aaee5dc545e6a16";async function f(t){return await n.get(`&q=${t}`,{params:{image_type:"photo",orientation:"horizontal",safesearch:!0}})}const m=document.querySelector(".search-form"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");l.classList.remove("loader");m.addEventListener("submit",h);function h(t){t.preventDefault();const o=t.currentTarget,a=o.elements.query.value;l.classList.add("loader"),f(a).then(g).catch(p).finally(()=>{o.reset(),l.classList.remove("loader")})}function g(t){t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),y.innerHTML=L(t.hits),S.refresh()}function p(t){c.error({message:"Sorry, something went wrong. Please try again later!"})}function L(t){return t.map(({largeImageURL:o,webformatURL:a,tags:i,likes:e,views:r,downloads:s,comments:u})=>`<li class="gallery-item">
        <a href="${o}">
        <img class="gallery-image" src="${a}" alt="${i}">
            <ul class="gallery-item-description">
                <li>Likes: ${e}</li>
                <li>Views: ${r}</li>
                <li>Downloads: ${s}</li>
                <li>Comments: ${u}</li>
            </ul>
        </a>
    </li>`).join("")}let S=new d(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
