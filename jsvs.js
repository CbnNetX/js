
const u = window.location.href;
if (u.includes('?') || u.includes('q=') || u.includes('p=') || u.includes('v=')) {
    if (u.includes('app')) {
        setTimeout(() => {
            if (document.getElementById('divx')) {
                divx.remove();
            }
        }, 100);
        document.body.innerHTML = `
            <div style="width: 100%; padding: 10px; box-sizing: border-box;" bis_skin_checked="1">
             <input style="width: 98%; margin: 5px; padding: 5px; box-sizing: border-box;" type="url" id="ur" placeholder="URL">
             <input style="width: 98%; margin: 5px; padding: 5px; box-sizing: border-box;" type="text" id="ii" placeholder="URL Final">
             ${inputSelect()}
            <input style="width: 100%; margin-bottom: 5px; padding: 5px; box-sizing: border-box;" type="button" id="b" value="ok">
             </div>
             `;
        document.body.onclick = "";
        b.onclick = () => {
            if (ur.value != "" && ur.value != undefined) {
                ii.value = geraAppUrl();
            }
        }
    } else {
        document.body.innerHTML = `
            <style>
            body, div, html, video {
                margin: 0;
                padding: 0;
            }
            body {
                font-size: 18px;
                font-weight: 500;
                margin: 0 5px 80px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                background: #111;

            }
            video{
                width: 100%;
            }
            #videoBox {
                display: flex;
                justify-content: center;
                width: 100%;
                height: auto;
            }
            .btnanima {
             animation: animaBTN 1s ease-in-out alternate-reverse infinite;
            }
            @keyframes animaBTN {
                from{
                    scale: 1.2;
                    }
            }
            @media (min-width:400px){
             #videoBox {
               flex-direction: column;
               width:  50%;
            }
            }
            ///
        .box_app {
            padding: 5px;
        }
        #vdsapp {
        display: flex;
        justify-items: center;
        }
        .vdsapp {
        
        }
        .box_app a {
            text-decoration: none;
            color: initial;
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
        }

        .vdbox {
            width: 320px;
            max-height: 180px;
            object-fit: fill;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: 1px solid transparent;
        }
        .vdbox:hover{
            transition: all 0.5s;
            border: 1px red solid;
        }
        @media (min-width:700px) {
            .vdsapp {
                display: grid;
                grid-template-columns: repeat(2,auto);
                gap: 25px;
            }
            #video{
                width: auto;
                height: 450px;
                object-fit: contain;
            } 
        }
        @media (min-width:1000px) {
            .vdsapp {
                display: grid;
                grid-template-columns: repeat(3,auto);
                gap: 25px;
            }
            </style>
            <div id="adsTerra">
            </div>
            <div id='videoBox' style="margin-top: 25px;">
            <video id="video" src="" controls></video>
            </div>
            <button id="btnCopy" style="width: 100%; margin: 5px 0 55px 0; border: 0; background: #0552ff; color: #fff; padding: 10px; z-index: 2;" onclick="copyLink()">Copy Link</button>
            <div id="adsTerraNative">
            </div>
            <div class="box_app">
            <!-- <h2 style="margin-left:50px;">Mais Videos</h2> -->
            <div id="vdsapp"></div>
            </div>
            `;
          adicionarDinamica();
    }
}

function adicionarDinamica() {
    var v = document.getElementById('video');
    if (!v) {
        setTimeout(() => {
            adicionarDinamica();
        }, 250);
        return;
    }
    var getUrl = new URL(u);
    var q = getUrl.searchParams.get("q");
    if (q) {
        var vv = 'qu.ax/' + atob(decodeURI(q));
    }
    q = getUrl.searchParams.get("id");
    if (q) {
        vv = atob(decodeURI(q.replaceAll('ii7', '')));
    }
    q = getUrl.searchParams.get("p");
    if (q) {
        vv = 'qu.ax/' + q + '.mp4';
    }
    q = getUrl.searchParams.get("v");
    if (q) {
        vv = 'cdn.videy.co/' + q + '.mp4';
    }
    v.src = 'https://' + vv;

    // ativarClickADS();
    // ativando ads
    //adsBannes(['native','adsTerra']);

    // adsBannes(['300x250','adsTerra']);

    setTimeout(() => {

        //adsBannes(['300x250','adsTerraNative']);

    }, 1000);
    //adsBannes(['booton',false]);
    // ads end


    if (window.location.href.includes('grupvs')){
    adsTrroPopunder();
    adsTrroSocialBar();
    }else {
        bannergrup();
    }
};

function copyLink() {
    const link = window.location.href.split('&')[0].split('#')[0];
    var el = document.createElement('input');
    el.id = "inputCopy";
    document.body.appendChild(el);
    el = document.querySelector('#inputCopy');
    el.value = link;
    el.select();
    document.execCommand('copy');
    el.remove();
    btnCopy.innerText = "Link Copiado!";
}

function geraAppUrl() {
    if (select && select.value == '') {
        var numero = Math.floor(Math.random() * listaURL.length);
    } else {
        var numero = select.value;
    }
    var abc = '123456789qwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNMasdfghjklzxcvbnm'.split('');
    var teg = '';
    for (var i = 0; i < 2; i++) {
        var numeroABC = Math.floor(Math.random() * abc.length);
        teg += abc[numeroABC];
    }
    if (ur.value.includes('qu.ax/') && !ur.value.includes('.mp4')) {
        return 'https://' + listaURL[numero] + '.blogspot.com/' + teg + '?q=' + btoa(ur.value.replace('https://qu.ax/', '').replace('http://qu.ax/', ''));
    } else if (ur.value.includes('qu.ax/') && ur.value.includes('.mp4')) {
        return 'https://' + listaURL[numero] + '.blogspot.com/' + teg + '?p=' + ur.value.replace('https://qu.ax/', '').replace('http://qu.ax/', '').replace('.mp4', '');
    }

    if (ur.value.includes('cdn.videy.co/') && ur.value.includes('.mp4')) {
        return 'https://' + listaURL[numero] + '.blogspot.com/' + teg + '?v=' + ur.value.replace('https://cdn.videy.co/', '').replace('http://cdn.videy.co/', '').replace('.mp4', '');
    }

    return 'https://' + listaURL[numero] + '.blogspot.com/' + teg + '?id=' + btoa(ur.value.replace('https://', '').replace('http://', ''));
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
            return 'Assista completo aqui!';
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
if (window.location.href.includes("#click1")) {
    startLisk2();
}

var startLisk = true;
function startLisk2() {
    if (startLisk == false) {
        return;
    }
    setTimeout(() => {
        startLisk = false;
        //tempLisk2 = true;
    }, 6000);
}

var ouvinteClickVar = true;
function ativarClickADS() {
    document.querySelector('video').addEventListener('play', () => {
        ouvinteClick(true);
        console.log('click');
    });

    document.body.addEventListener('click', (e) => {
        ouvinteClick(e.target.nodeName);
    });
}

function ouvinteClick(e) {
    if (ouvinteClickVar == false) {
        return;
    }
    ouvinteClickVar = false;
    if (e != true) {
        var evento = e;
        console.log(evento);
    }
    //e.preventDefault();
    const verElemento = () => {
        if (e == true) {
            return true;
        }
        if (
            !evento.includes('IMG')
            &&
            !evento.includes('A')
            &&
            !evento.includes('BUTTON')
        ) {
            return true;
        }
        return false
    };

    if (
        verElemento() == true
        &&
        tempLisk2 == false
        &&
        !window.location.href.includes("#click")
    ) {
        window.location.href = "#click1";
        startLisk2();
        AbriLink('aHR0cHM6Ly93aXNzb29ueS5uZXQvNC83NTU5NDE3');
        console.log('Link click 1')
    }

    if (
        verElemento() == true
        &&
        tempLisk2 == true
        &&
        window.location.href.includes("#click1")
    ) {
        window.location.href = "#click2";
        AbriLink('aHR0cHM6Ly9yZXN0bGVzc2NvbXBlbGRlc2NlbmQuY29tL2d5M3M3ZjJpNW0/a2V5PWNiMWJlOTJkMTBkZTE0M2E2YTIzYWI1YWNmNDFhNzAx');
        console.log('Link click 2');
    }
    setInterval(() => {
        ouvinteClickVar = true;
    }, 300);
}

function AbriLink(url) {
    console.log('click')
    var link = document.createElement('a');
    var id = "Btn" + String(url.slice(-5));
    link.id = id;
    link.target = '_blank';
    link.href = atob(url);
    document.body.appendChild(link);
    var l = document.getElementById(id);
    setTimeout(() => {
        l.click();
        l.href = '';
        setTimeout(() => {
            l.remove();
        }, 50);
    }, 300);
}


function ads() {
    var i = ['PGlmcmFtZSBkYXRhLWFhPScyMzMwNDE1JyBzcmM9Jy8vYWQuYS1hZHMuY29tLzIzMzA0MTU/c2l6ZT05NzB4OTAnIHN0eWxlPSd3aWR0aDoxMDAlOyBoZWlnaHQ6YXV0bzsgYm9yZGVyOjBweDsgcGFkZGluZzowOyBvdmVyZmxvdzpoaWRkZW47IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Oyc+PC9pZnJhbWU+', 'PGRpdiBzdHlsZT0icGFkZGluZzogM3B4OyB3aWR0aDogYXV0bzsgYm94LXNpemluZzogYm9yZGVyLWJveDsiPjxhIGhyZWY9Imh0dHBzOi8vc29maWxtZS5jbGljay8/YWRzPWEtYWRzbnVuaW1vcyI+PGltZyBzcmM9Imh0dHBzOi8vc29maWxtZS5jbGljay9hc3NldHMvZ2lmL3NvZmlsbWUuZ2lmP2FudWNpb1BhZ289dHJ1ZSI+PC9hPjwvZGl2Pg=='];
    const n = Math.floor(Math.random() * i.length);
    return atob(i[n]);
}

// asd banner 300x250
function adsBannes(banner) {
    var l = (navigator.language || navigator.userLanguage).split('-')[0];
    if (l == 'en') {
        return "<div><p>No Post</p></div>";
    }
    if (banner[0] == '300x250') {
        var d = document.getElementById(banner[1]);
        if (!d) {
            adsBannes(banner);
            return;
        }
        var sc = document.createElement('script');
        sc.type = "text/javascript";
        sc.innerHTML = `atOptions = {
		'key' : 'd936a0fb6388374b2e7bcf68e1935ca7',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	    };`;
        d.appendChild(sc);
        var sc2 = document.createElement('script');
        sc2.type = "text/javascript";
        sc2.src = "//restlesscompeldescend.com/d936a0fb6388374b2e7bcf68e1935ca7/invoke.js";
        d.appendChild(sc2);
    } else if (banner[0] == 'native') {
        var n = document.getElementById(banner[1]);
        if (!n) {
            adsBannes(banner);
            return;
        }
        var sc = document.createElement('script');
        sc.setAttribute('async', 'asyns');
        sc.setAttribute('data-cfasync', 'false');
        sc.src = '//restlesscompeldescend.com/fdfb3cd743d3c9b6bcf9a49da17fc358/invoke.js';
        var div = document.createElement('div');
        div.id = 'container-fdfb3cd743d3c9b6bcf9a49da17fc358';
        n.appendChild(sc);
        n.appendChild(div);
    } else if (banner[0] == 'booton') {
        setTimeout(() => {
            bootonBaneer();
        }, 1000);
    }
}

function inputSelect() {
    if (!listaURL) {
        return;
    }
    var inputSelect = `<select id="select" style="margin: 8px 0; width: 100%;">
    <option value="">Select Dominio</option>`;
    listaURL.forEach((item, index) => {
        inputSelect += `<option value="${index}">Select ${item}</option>`;
    });
    inputSelect += '</select>';
    return inputSelect;

}

//bootonBaneer();
function bootonBaneer() {
    var divAbs = document.createElement('div');
    divAbs.id = 'banerAdsCloce';
    divAbs.style = `z-index: 9999;background: #cacaca; position: fixed; bottom: 0; left: 0; width: 100%; box-sizing: border-box; border-radius: 6px; transition: all 0.5s; height: 110px;`;
    divAbs.innerHTML = `
    <div style="z-index: 2;background: #cacaca;font-size: 1rem;padding: 10px 10px 0 10px;border-radius: 6px;text-align: center;position: absolute;margin: -20px auto;left: 0;right: 0;width: 60px;bottom: 0;top: 0; height: 14px;" onclick="banerAdsCloce.style.bottom= banerAdsCloce.style.bottom === '0px' ? '-14%' : '0px';">X</div>
    <div id="bootonAds" style="padding: 10px 3px 3px; display: flex;
    justify-content: center;">
    </div>`;
    document.body.appendChild(divAbs);
    // add anucio!
    const adsElement = () => {
        var ads = document.getElementById('bootonAds');
        if (!ads) {
            adsElement();
            return;
        }
        var blocoAds = document.createElement('script');
        blocoAds.type = 'text/javascript';
        if (window.innerWidth < 700) {
            blocoAds.innerHTML = `
        atOptions = {
            'key' : 'c4d50392443095801d96f3f260cf0187',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
        };`;
        } else {
            blocoAds.innerHTML = `
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
        blocoAds.type = 'text/javascript';
        if (window.innerWidth < 700) {
            blocoAds.src = '//restlesscompeldescend.com/c4d50392443095801d96f3f260cf0187/invoke.js';
        } else {
            blocoAds.src = '//restlesscompeldescend.com/f5af33a9f1fcbaabd7099b7c3d65a181/invoke.js';
        }
        ads.appendChild(blocoAds);
    };
    adsElement();
}

//adsTrroPopunder();
//adsTrroSocialBar();

function adsTrroPopunder() {
    var sc = document.createElement('script');
    sc.getAttribute('type', 'text/javascript');
    sc.src = '//dialectamplifydocumentation.com/78/90/e5/7890e52bda40ef30c34c238c014706c4.js';
    document.head.appendChild(sc);
}

function adsTrroSocialBar() {
    var sc = document.createElement('script');
    sc.getAttribute('type', 'text/javascript');
    sc.src = '//dialectamplifydocumentation.com/3f/d6/1c/3fd61c9d67c0d4b54ef8af1fe099b5e0.js';
    document.body.appendChild(sc);
}


/*
// controlador mais videos
setTimeout(()=>{
const vds = ['?=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn','?p=VTXn'];
const playerDecode = (id)=>{
if (elemento.includes('?q=')) {
return 'https://qu.ax/'+atob(decodeURI( (id.split('?q=')[1]) ));
}

if (elemento.includes('?p=')) {
return 'https://qu.ax/' + id.split('?p=')[1] + '.mp4';
}

if (elemento.includes('?v=')) {
return 'https://cdn.videy.co/' + id.split('?v=')[1] + '.mp4';
}
};
vdsappHTML = '';
for(var i = 0;i<6;i++){
var numero = Math.floor(Math.random() * vds.length);
var elemento = vds[numero];
vds.splice(numero,1);
vdsappHTML+=`
<a href="https://${window.location.host}/APP${elemento}">
    <video class="vdbox" src="${playerDecode(elemento)}"></video>
</a>`;
}
document.querySelector('#vdsapp').innerHTML='<div class="vdsapp">'+vdsappHTML+'</div>';
},800);
*/
/*
el.forEach((item)=>{
     if(item.innerText.includes('?')){ it +=',"?'+(item.innerText.split('?')[1]).split(' ')[0]+'"';}
    });*/


function  closseBanner(){
    adsTrroPopunder();
    adsTrroSocialBar();
    document.querySelector('.grupbanner').remove();
}


function bannergrup(){
    var html = `
    <div onclick="closseBanner()" class="grupbanner"
    style="position: fixed; z-index: 9999; width: 100% ;height: 100%; top: 0; left: 0; background-color: rgba(26, 26, 26, 0.507); backdrop-filter: blur(4px);">
    <div>
        <div
            style="display: flex; justify-content: center; align-items: center; margin-top: 150px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
            <div style="width: 300px; background-color: aliceblue; color: #65686C; border-radius: 10px;">
                <img style="border-radius: 8px"
                    src="https://scontent.fjdf6-1.fna.fbcdn.net/v/t39.30808-6/459052502_122109186626418098_5717481229534611075_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=2285d6&_nc_ohc=nOgu1PJpgOUQ7kNvgHbPtke&_nc_ht=scontent.fjdf6-1.fna&_nc_gid=AHDlQ8loabm79ERr_Utbd2v&oh=00_AYAScLWrlfWik-5Id82FrCJ_2qVtd5Obhe0Ub4QiO9MGfw&oe=66E808AF">

                <div style="position: relative; top: -110px; text-align: end; padding-right: 8px;"
                    onclick="closseBanner()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="25px"
                        fill="red">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>

                <div style="padding: 10px; margin-top: -35px;">
                    <h2 style="margin: 5px 0; color: black;">Vsgrup</h2>
                    <samp style="font-size: 0.8rem; font-weight: 300;">Grupo Público <strong>1.6M
                            membros<strong></strong></samp>
                    <div style="margin: 10px 0;">
                        <a style="color: aliceblue; font-size: 0.8rem; text-decoration: none; background-color: #0866FF; border-radius: 6px; padding: 8px 10px;"
                            href="https://www.facebook.com/groups/483328077908225/">Participar do grupo</a>


                        <a style="color: aliceblue; font-size: 0.8rem; text-decoration: none; background-color: #acbfdf; border-radius: 6px; padding: 8px 10px;"
                            href="https://www.facebook.com/groups/483328077908225/"><svg
                                xmlns="http://www.w3.org/2000/svg" height="suto" viewBox="0 -960 960 960" width="15px"
                                fill="#e8eaed">
                                <path
                                    d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg></a>

                        <a style="color: aliceblue; font-size: 0.8rem; text-decoration: none; background-color: #acbfdf; border-radius: 6px; padding: 8px 10px;"
                            href="https://www.facebook.com/groups/483328077908225/">...</a>

                        <a style="color: aliceblue; font-size: 0.8rem; text-decoration: none; background-color: #acbfdf; border-radius: 6px; padding: 8px 10px;"
                            href="https://www.facebook.com/groups/483328077908225/"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="15px"
                                fill="#e8eaed">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                            </svg></a>
                    </div>

                    <div style="margin: 0;">
                        <ul
                            style="list-style: none; display: flex; margin: 22px 0; justify-content: start; border-top: 1px solid #65686c79; padding-top: 10px; font-size: 1.1rem;">
                            <li style="margin-right: 15px;">Sobre</li>
                            <li style="margin-right: 15px;">Discussão</li>
                            <li style="margin-right: 15px; display: flex;">Mais
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#a5a5a5">
                                    <path d="M480-360 280-560h400L480-360Z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    var d = document.createElement('div');
    d.innerHTML=html;
    document.body.appendChild(d);
}
