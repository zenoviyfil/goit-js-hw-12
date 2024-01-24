import{a as n,i as c,S as d}from"./assets/vendor-08b0e0f9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();n.defaults.baseURL="https://pixabay.com/api/";async function f(t){return await n.get("",{params:{key:"41812412-8184544d67aaee5dc545e6a16",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const m=document.querySelector(".search-form"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");l.classList.remove("loader");m.addEventListener("submit",h);function h(t){t.preventDefault();const a=t.currentTarget,o=a.elements.query.value;l.classList.add("loader"),f(o).then(g).catch(p).finally(()=>{a.reset(),l.classList.remove("loader")})}function g(t){t.data.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),y.innerHTML=L(t.data.hits),S.refresh()}function p(t){c.error({message:"Sorry, something went wrong. Please try again later!"})}function L(t){return t.map(({largeImageURL:a,webformatURL:o,tags:i,likes:e,views:r,downloads:s,comments:u})=>`<li class="gallery-item">
        <a href="${a}">
        <img class="gallery-image" src="${o}" alt="${i}">
            <ul class="gallery-item-description">
                <li>Likes: ${e}</li>
                <li>Views: ${r}</li>
                <li>Downloads: ${s}</li>
                <li>Comments: ${u}</li>
            </ul>
        </a>
    </li>`).join("")}let S=new d(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
