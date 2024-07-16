const u = window.location.href;
if (u.includes('id=') || u.includes('q=')){
        if (u.includes('app')){
            setTimeout(()=>{ divx.remove(); },100);
            document.body.innerHTML=atob('IDxkaXYgc3R5bGU9IndpZHRoOiAxMDAlOyBwYWRkaW5nOiAxMHB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyI+CiAgICAgICAgPGlucHV0IHN0eWxlPSJ3aWR0aDogOTglOyBtYXJnaW46IDVweDsgcGFkZGluZzogNXB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94OyIgdHlwZT0idXJsIiBpZD0idXIiIHBsYWNlaG9sZGVyPSJVUkwiPgogICAgICAgIDxpbnB1dCBzdHlsZT0id2lkdGg6IDk4JTsgbWFyZ2luOiA1cHg7IHBhZGRpbmc6IDVweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsiIHR5cGU9InRleHQiIGlkPSJpaSIgcGxhY2Vob2xkZXI9IlVSTCBGaW5hbCI+CiAgICAgICAgPGlucHV0IHN0eWxlPSJ3aWR0aDogMTAwJTsgbWFyZ2luLWJvdHRvbTogNXB4OyBwYWRkaW5nOiA1cHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IiB0eXBlPSJidXR0b24iIGlkPSJiIiB2YWx1ZT0ib2siPgogICAgICAgPC9kaXY+');
            document.body.onclick="";
            b.onclick=()=>{ if (ur.value!="" && ur.value!=undefined){ ii.value=geraAppUrl();
            }}
        }else {
            document.body.innerHTML=`
            <style>
            body, div, html, video {
                margin: 0;
                padding: 0;
            }
            body {
                font-size: 18px;
                font-weight: 500;
                margin: 5px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            video {
                width: 100%;
                height: auto;
            }
            </style>
            <div id="adsTerra">
            </div>
            <a href='https://m.facebook.com/groups/1925174917947482/?ref=share&mibextid=NSMWBT' style='width: 100%; padding: 5px; z-index: 2;'>&#10084;💕${getVideos()}😘👌</a>
            ${atob('PHZpZGVvIGlkPSJ2aWRlbyIgc3JjPSIiIGNvbnRyb2xzPjwvdmlkZW8+')}
            <button id="btnCopy" style="width: 100%; margin: 5px 0 55px 0; border: 0; background: #0552ff; color: #fff; padding: 10px; z-index: 2;" onclick="copyLink()">Copy Link</button>
            `;
            adicionarDinamica();
        }
    }

    function adicionarDinamica(){
        var v = document.getElementById('video');
        if (!v){
            setTimeout(()=>{
                adicionarDinamica();
            },250);
            return;
        }
    var getUrl = new URL(u);
    var q = getUrl.searchParams.get("q");
    if (q){
        var vv = 'qu.ax/'+atob(decodeURI(q));
        v.src='https://'+vv;
    }else {
        q = getUrl.searchParams.get("id");
        vv = decodeURI(q.replaceAll('ii7',''));
        v.src='https://'+atob(vv);
    }
    ativarClickADS();
    adsBannes(true);
    adsBannes(false)
    };

    function copyLink(){
        const link = window.location.href.split('&')[0].split('#')[0];
        var el = document.createElement('input');
        el.id="inputCopy";
        document.body.appendChild(el);
        el = document.querySelector('#inputCopy');
        el.value=link;
        el.select();
        document.execCommand('copy');
        el.remove();
        btnCopy.innerText="Link Copiado!";
    }

    function geraAppUrl(){
        var numero = Math.floor(Math.random() * listaURL.length);
        var abc = '123456789qwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNMasdfghjklzxcvbnm'.split('');
        var teg = '';
        for(var i = 0; i < 2 ; i++){
        var numeroABC = Math.floor(Math.random() * abc.length);
        teg+=abc[numeroABC];
        }
        if (ur.value.includes('qu.ax/')){
            return 'https://'+listaURL[numero]+'.blogspot.com/'+teg+'?q='+btoa(ur.value.replace('https://qu.ax/','').replace('http://qu.ax/',''));
        }
        return 'https://'+listaURL[numero]+'.blogspot.com/'+teg+'?id='+btoa(ur.value.replace('https://','').replace('http://',''));
    }

    function getVideos() {
    var language = (navigator.language || navigator.userLanguage).split('-')[0];

    switch (language) {
        case 'en':
            return 'JOIN HERE FOR MORE VIDEOS';
        case 'es':
            return 'ÚNETE AQUÍ PARA MÁS VÍDEOS';
        case 'fr':
            return 'REJOIGNEZ ICI POUR PLUS DE VIDÉOS';
        case 'de':
            return 'TRETEN SIE HIER FÜR MEHR VIDEOS BEI';
        case 'it':
            return 'UNISCITI QUI PER ALTRI VIDEO';
        case 'pt':
            return 'CLICK AQUÍ PARA MAIS VÍDEOS';
        case 'ru':
            return 'ПРИСОЕДИНЯЙТЕСЬ ЗДЕСЬ ДЛЯ БОЛЬШЕ ВИДЕО';
        case 'zh':
            return '点击此处加入以获取更多视频';
        case 'ja':
            return 'もっとビデオを見るためにここに参加してください';
        case 'ko':
            return '더 많은 비디오를 보려면 여기에 가입하세요';
        case 'ar':
            return 'انضم هنا للمزيد من مقاطع الفيديو';
        case 'hi':
            return 'अध&#2367;क व&#2368;ड&#2367;य&#2379; क&#2375; ल&#2367;ए यह&#2366;&#2305; श&#2366;म&#2367;ल ह&#2379;&#2306;';
        case 'nl':
            return 'VOEG JE HIER TOE VOOR MEER VIDEO\'S';
        case 'pl':
            return 'DOŁĄCZ TUTAJ, ABY ZOBACZYĆ WIĘCEJ FILMÓW';
        case 'tr':
            return 'DAHA FAZLA VİDEO İÇİN BURAYA KATIL';
        case 'vi':
            return 'THAM GIA ĐÂY ĐỂ XEM THÊM VIDEO';
        case 'th':
            return 'เข&#3657;าร&#3656;วมท&#3637;&#3656;น&#3637;&#3656;สำหร&#3633;บว&#3636;ด&#3637;โอเพ&#3636;&#3656;มเต&#3636;ม';
        case 'cs':
            return 'PŘIDEJTE SE SEM PRO VÍCE VIDEÍ';
        case 'sv':
            return 'GÅ MED HÄR FÖR FLER VIDEOR';
        case 'da':
            return 'Deltag her for flere videoer';
        case 'no':
            return 'BLI MED HER FOR FLERE VIDEOER';
        case 'fi':
            return 'LIITY TÄHÄN LISÄÄ VIDEOITA VARTEN';
        case 'hu':
            return 'CSATLAKOZZ ITT TÖBB VIDEÓÉRT';
        case 'el':
            return 'ΣΥΜΜΕΤΕΣΤΕ ΕΔΩ ΓΙΑ ΠΕΡΙΣΣΟΤΕΡΑ ΒΙΝΤΕΟ';
        case 'uk':
            return 'ПРИЙМАЙТЕ УЧАСТЬ ТУТ ДЛЯ БІЛЬШЕ ВІДЕО';
        case 'he':
            return 'הצטרף כאן לעוד סרטונים';
        case 'id':
            return 'BERGABUNG DI SINI UNTUK LEBIH BANYAK VIDEO';
        case 'ms':
            return 'SERTAI DI SINI UNTUK LEBIH VIDEO';
        case 'tl':
            return 'SUMALI DITO PARA SA HIGIT PANG MGA BIDEO';
        case 'fil':
            return 'SUMALI DITO PARA SA HIGIT PANG MGA BIDEO';
        case 'ceb':
            return 'MOSALI DINHI PARA SA DAGHANG MGA BIDEO';
        case 'ja':
            return 'もっとビデオを見るためにここに参加してください';
        case 'ko':
            return '더 많은 비디오를 보려면 여기에 가입하세요';
        case 'ru':
            return 'ПРИСОЕДИНЯЙТЕСЬ ЗДЕСЬ ДЛЯ БОЛЬШЕ ВИДЕО';
        case 'vi':
            return 'THAM GIA ĐÂY ĐỂ XEM THÊM VIDEO';
        case 'th':
            return 'เข&#3657;าร&#3656;วมท&#3637;&#3656;น&#3637;&#3656;สำหร&#3633;บว&#3636;ด&#3637;โอเพ&#3636;&#3656;มเต&#3636;ม';
        case 'cs':
            return 'PŘIDEJTE SE SEM PRO VÍCE VIDEÍ';
        case 'sv':
            return 'GÅ MED HÄR FÖR FLER VIDEOR';
        case 'da':
            return 'Deltag her for flere videoer';
        case 'no':
            return 'BLI MED HER FOR FLERE VIDEOER';
        case 'fi':
            return 'LIITY TÄHÄN LISÄÄ VIDEOITA VARTEN';
        case 'hu':
            return 'CSATLAKOZZ ITT TÖBB VIDEÓÉRT';
        case 'el':
            return 'ΣΥΜΜΕΤΕΣΤΕ ΕΔΩ ΓΙΑ ΠΕΡΙΣΣΟΤΕΡΑ ΒΙΝΤΕΟ';
        case 'uk':
            return 'ПРИЙМАЙТЕ УЧАСТЬ ТУТ ДЛЯ БІЛЬШЕ ВІДЕО';
        case 'he':
            return 'הצטרף כאן לעוד סרטונים';
        case 'id':
            return 'BERGABUNG DI SINI UNTUK LEBIH BANYAK VIDEO';
        case 'ms':
            return 'SERTAI DI SINI UNTUK LEBIH VIDEO';
        case 'tl':
            return 'SUMALI DITO PARA SA HIGIT PANG MGA BIDEO';
        case 'fil':
            return 'SUMALI DITO PARA SA HIGIT PANG MGA BIDEO';
        case 'ceb':
            return 'MOSALI DINHI'
            default:
        return 'JOIN HERE FOR MORE VIDEOS'; 
 }
}

// ads

// click pluble
var tempLisk2 = false;
if (window.location.href.includes("#click1")){
    startLisk2();
}

var  startLisk = true;
function startLisk2(){
    if (startLisk==false){
        return;
    }
    setTimeout(() => {
        startLisk2 = false
        tempLisk2 = true;
    }, 6000);
}

var ouvinteClickVar = true;
function ativarClickADS(){
document.querySelector('video').addEventListener('play',()=>{
    ouvinteClick(true);
    console.log('click');
});

document.body.addEventListener('click', (e)=>{
    ouvinteClick(e.target.nodeName);
});
}

function ouvinteClick(e){
    if (ouvinteClickVar==false){
        return;
    }
    ouvinteClickVar = false;
    if (e!=true){
        var evento = e;
        console.log(evento);
    }
    //e.preventDefault();
    const verElemento = ()=>{
        if (e==true){
            return true;
        }
        if (
            !evento.includes('IMG')
            &&
            !evento.includes('A')
            &&
            !evento.includes('BUTTON')
        ){
            return true;
        }
        return false
    };

    if (
        verElemento()==true
        &&
        tempLisk2==false
        &&
        !window.location.href.includes("#click")
    ){
       window.location.href="#click1";
       startLisk2();
       AbriLink('aHR0cHM6Ly93aXNzb29ueS5uZXQvNC83NTU5NDE3');
       console.log('Link click 1')
    }

    if (
        verElemento()==true
        &&
        tempLisk2==true
        &&
        window.location.href.includes("#click1")
    ){
       window.location.href="#click2";
      AbriLink('aHR0cHM6Ly9yZXN0bGVzc2NvbXBlbGRlc2NlbmQuY29tL2d5M3M3ZjJpNW0/a2V5PWNiMWJlOTJkMTBkZTE0M2E2YTIzYWI1YWNmNDFhNzAx');
        console.log('Link click 2');
    }
    setInterval(()=>{
        ouvinteClickVar = true;
    },300);
}

function AbriLink(url){
    console.log('click')
    var link = document.createElement('a');
    var id = "Btn"+String(url.slice(-5));
    link.id=id;
    link.target='_blank';
    link.href=atob(url);
    document.body.appendChild(link);
    var l = document.getElementById(id);
    setTimeout(()=>{
        l.click();
       l.href='';
       setTimeout(()=>{
            l.remove();
        },50);
    },300);
}



function ads(){
    var i = ['PGlmcmFtZSBkYXRhLWFhPScyMzMwNDE1JyBzcmM9Jy8vYWQuYS1hZHMuY29tLzIzMzA0MTU/c2l6ZT05NzB4OTAnIHN0eWxlPSd3aWR0aDoxMDAlOyBoZWlnaHQ6YXV0bzsgYm9yZGVyOjBweDsgcGFkZGluZzowOyBvdmVyZmxvdzpoaWRkZW47IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Oyc+PC9pZnJhbWU+','PGRpdiBzdHlsZT0icGFkZGluZzogM3B4OyB3aWR0aDogYXV0bzsgYm94LXNpemluZzogYm9yZGVyLWJveDsiPjxhIGhyZWY9Imh0dHBzOi8vc29maWxtZS5jbGljay8/YWRzPWEtYWRzbnVuaW1vcyI+PGltZyBzcmM9Imh0dHBzOi8vc29maWxtZS5jbGljay9hc3NldHMvZ2lmL3NvZmlsbWUuZ2lmP2FudWNpb1BhZ289dHJ1ZSI+PC9hPjwvZGl2Pg=='];
    const n = Math.floor(Math.random()* i.length);
    return atob(i[n]);
}




// asd banner 300x250
function adsBannes(banner){
    var l = (navigator.language || navigator.userLanguage).split('-')[0];
    if (l=='en'){
      return "<div><p>No Post</p></div>";
    }
   if (banner){
       var d = document.getElementById('adsTerra');
       if (!d){
        adsBannes(banner);
        return;
       }
       var sc = document.createElement('script');
       sc.type="text/javascript";
       sc.innerHTML=`atOptions = {
		'key' : 'd936a0fb6388374b2e7bcf68e1935ca7',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	    };`;
        d.appendChild(sc);
        var sc2 = document.createElement('script');
        sc2.type="text/javascript";
        sc2.src="//restlesscompeldescend.com/d936a0fb6388374b2e7bcf68e1935ca7/invoke.js";
        d.appendChild(sc2);
   }else {
    setTimeout(() => {
        bootonBaneer();
    },500);
   }
}

//bootonBaneer();
function bootonBaneer(){
    var divAbs = document.createElement('div');
    divAbs.style=`z-index: 3;background: #cacaca; position: fixed; bottom: 0; left: 0; width: 100%; box-sizing: border-box; border-radius: 6px; transition: all 0.5s; height: 110px;`;
    divAbs.innerHTML=`
    <div style="z-index: 2;background: #cacaca;font-size: 1rem;padding: 10px 10px 0 10px;border-radius: 6px;text-align: center;position: absolute;margin: -20px auto;left: 0;right: 0;width: 60px;bottom: 0;top: 0; height: 14px;" onclick="banerAds.style.bottom= banerAds.style.bottom === '0px' ? '-14%' : '0px';">X</div>
    <div id="bootonAds" style="padding: 10px 3px 3px; display: flex;
    justify-content: center;">
    </div>`;
    document.body.appendChild(divAbs);
    // add anucio!
    const adsElement = ()=>{
    var ads = document.getElementById('bootonAds');
    if (!ads){
        adsElement();
        return;
    }
    var blocoAds = document.createElement('script');
    blocoAds.type='text/javascript';
    if (window.innerWidth<700){
        blocoAds.innerHTML=`
        atOptions = {
            'key' : 'c4d50392443095801d96f3f260cf0187',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
        };`;
    }else {
        blocoAds.innerHTML=`
       atOptions = {
		'key' : 'f5af33a9f1fcbaabd7099b7c3d65a181',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};`;
    }
    ads.appendChild(blocoAds);
    blocoAds = null;
    blocoAds = document.createElement('script');
    blocoAds.type='text/javascript';
    if (window.innerWidth<700){
    blocoAds.src='//restlesscompeldescend.com/c4d50392443095801d96f3f260cf0187/invoke.js';
    }else {
    blocoAds.src='//restlesscompeldescend.com/f5af33a9f1fcbaabd7099b7c3d65a181/invoke.js';
    }
    ads.appendChild(blocoAds);
    };
    adsElement();
}
