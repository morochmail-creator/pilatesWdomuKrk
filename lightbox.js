(function(){
var css='.lb{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.92);display:none;overflow:auto;-webkit-overflow-scrolling:touch}.lb.on{display:block}.lb-in{min-height:100%;min-width:100%;display:flex;align-items:center;justify-content:center}.lb img{max-width:100vw;max-height:100vh;object-fit:contain;cursor:zoom-in;touch-action:pinch-zoom}.lb.z img{max-width:none;max-height:none;width:250vw;cursor:zoom-out}.lb-x{position:fixed;top:10px;right:12px;z-index:10000;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.9);font-size:26px;line-height:1;cursor:pointer}.zm{cursor:zoom-in}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<button class="lb-x" aria-label="Zamknij">×</button><div class="lb-in"><img alt=""></div>';
document.body.appendChild(lb);
var big=lb.querySelector('img'),inn=lb.querySelector('.lb-in');
function close(){lb.classList.remove('on','z');document.body.style.overflow=''}
lb.querySelector('.lb-x').onclick=close;
big.onclick=function(e){e.stopPropagation();lb.classList.toggle('z')};
inn.onclick=function(e){if(e.target===inn)close()};
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
document.addEventListener('click',function(e){
 var t=e.target;if(!t||t.tagName!=='IMG'||lb.contains(t))return;
 if(t.closest('.hero2,header,footer,a,button,.lb')||/logo|favicon|icon-/.test(t.src))return;
 big.src=t.currentSrc||t.src;big.alt=t.alt||'';lb.scrollTo(0,0);lb.classList.remove('z');lb.classList.add('on');document.body.style.overflow='hidden';
});
document.querySelectorAll('img').forEach(function(i){if(!i.closest('.hero2,header,footer,a,button')&&!/logo|favicon|icon-/.test(i.src))i.classList.add('zm')});
})();
