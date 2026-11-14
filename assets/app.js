(function(){
var P=[["index.html","خانه","home"],["listings.html","آگهی‌ها","list"],["how.html","روش کار","how"],["categories.html","دسته‌بندی‌ها","cat"],["trust.html","امنیت و اعتماد","trust"],["owners.html","برای مالکان","own"],["about.html","درباره ما","about"]];
var p=document.body.dataset.p,n=P.map(function(x){return '<a href="'+x[0]+'"'+(x[2]==p?' aria-current="page"':'')+'>'+x[1]+'</a>'}).join('');
document.getElementById('h').innerHTML='<div class="w"><a class="logo" href="index.html">اجاره‌چی</a><button id="mb" aria-expanded="false" aria-controls="nv">منو</button><nav id="nv" aria-label="منوی اصلی">'+n+'</nav></div>';
document.getElementById('f').innerHTML='<div class="w"><span>© اجاره‌چی؛ بازار اجاره کالا بین مردم</span><span><a href="add.html">ثبت کالا</a> · <a href="contact.html">تماس</a> · <a href="terms.html">قوانین</a></span></div>';
var b=document.getElementById('mb'),v=document.getElementById('nv');
b.onclick=function(){var o=v.classList.toggle('o');b.setAttribute('aria-expanded',o)};
var d=document.getElementById('price');
if(d){var days=document.getElementById('days'),o=document.getElementById('res'),f=function(x){return Math.round(x).toLocaleString('fa-IR')};
function c(){var a=+d.value||0,k=Math.min(+days.value||0,30),g=a*k;o.innerHTML='درآمد ناخالص: <b>'+f(g)+'</b> تومان<br>کارمزد ۱۰٪ اجاره‌چی: '+f(g*.1)+' تومان<br><span class="big">سهم شما در ماه: '+f(g*.9)+' تومان</span>'}
d.oninput=days.oninput=c;c()}
var k=document.getElementById('bk');
if(k){var n=document.getElementById('n'),s=document.getElementById('ins'),t=document.getElementById('tot'),f2=function(x){return Math.round(x).toLocaleString('fa-IR')};
function u(){var d=Math.min(Math.max(+n.value||1,1),30),r=k.dataset.p*d,i=r*s.value,e=+k.dataset.d;t.innerHTML='اجاره: '+f2(r)+' تومان<br>بیمه: '+f2(i)+' تومان<br>ودیعه (قابل استرداد): '+f2(e)+' تومان<br><b>جمع پرداخت اولیه: '+f2(r+i+e)+' تومان</b>'}
n.oninput=s.oninput=u;u();document.getElementById('rq').onclick=function(){var o=document.getElementById('ok');o.hidden=0;o.textContent='این یک نمونه آزمایشی است؛ در نسخه واقعی درخواست برای تأیید مالک ارسال می‌شود.'}}
document.querySelectorAll('form[data-demo]').forEach(function(m){m.onsubmit=function(e){e.preventDefault();var o=m.querySelector('.out');o.hidden=0;o.textContent='نمونه آزمایشی است و اطلاعات ارسال یا ذخیره نشد.'}});
var ch=document.querySelectorAll('.chips button');
if(ch.length){function ft(c){ch.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.c==c)});document.querySelectorAll('#gr .card').forEach(function(a){a.hidden=!(c=='all'||a.dataset.c==c)})}
ch.forEach(function(b){b.onclick=function(){ft(b.dataset.c)}})}
})();
