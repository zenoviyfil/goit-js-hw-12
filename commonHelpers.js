import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",d="41812412-8184544d67aaee5dc545e6a16",m=`${f}?key=${d}`,h={image_type:"photo",orientation:"horizontal",safesearch:!0};function y(o){return fetch(`${m}&q=${o}`,h).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const g=document.querySelector(".search-form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");a.classList.remove("loader");g.addEventListener("submit",L);function L(o){o.preventDefault();const t=o.currentTarget,s=t.elements.query.value;a.classList.add("loader"),y(s).then($).catch(S).finally(()=>{t.reset(),a.classList.remove("loader")})}function $(o){o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML=w(o.hits),P.refresh()}function S(o){l.error({message:"Sorry, something went wrong. Please try again later!"})}function w(o){return o.map(({largeImageURL:t,webformatURL:s,tags:n,likes:e,views:r,downloads:i,comments:c})=>`<li class="gallery-item">
        <a href="${t}">
        <img class="gallery-image" src="${s}" alt="${n}">
            <ul class="gallery-item-description">
                <li>Likes: ${e}</li>
                <li>Views: ${r}</li>
                <li>Downloads: ${i}</li>
                <li>Comments: ${c}</li>
            </ul>
        </a>
    </li>`).join("")}let P=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
