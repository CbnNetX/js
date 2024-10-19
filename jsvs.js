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

        .vdbox ,.iframe-video {
            width: 320px;
            max-height: 180px;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: 1px solid transparent;
        }

        .vdbox:hover , .iframe-video:hover{
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
            <video id="video" src="${adicionarDinamica(true)}" controls></video>
            </div>
            <button id="btnCopy" style="width: 100%; margin: 5px 0 55px 0; border: 0; background: #0552ff; color: #fff; padding: 10px; z-index: 2;" onclick="copyLink()">Copy Link</button>
            <div id="adsTerraNative">
            </div>
            <div class="box_app">
            <h2 style="margin-left:50px;">Mais Videos:</h2>
            <div id="vdsapp"></div>
            </div>
            `;
            add_mais();
            adicionarDinamica();
    }
}

function adicionarDinamica(indicador) {
    // var v = document.getElementById('video');
    // if (!v) {
    //     setTimeout(() => {
    //         adicionarDinamica();
    //     }, 250);
    //     return;
    // }
    if (indicador){
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
    var videoSrc = 'https://' + vv;
    return videoSrc;
    }


    //<video id="video" src="${adicionarDinamica(true)}" controls></video>
    // var vd = document.createElement('video');
    // vd.id='video';
    // vd.src='https://href.li/?'+videoSrc;
    // vd.setAttribute('controls','');
    // document.querySelector('#videoBox').appendChild(vd);
      

    // ativarClickADS();
    // ativando ads
    //adsBannes(['native','adsTerra']);

    // adsBannes(['300x250','adsTerra']);

    setTimeout(() => {

        //adsBannes(['300x250','adsTerraNative']);

    }, 1000);
    //adsBannes(['booton',false]);
    // ads end

/*
    if (window.location.href.includes('grup')){
        if (!window.location.href.includes('&1')){
            bannerNovoGrupo();
        }else {
            adsTrroPopunder();
            adsTrroSocialBar();
        }
    }else {
        bannergrup();
    }
*/
adsTrroPopunder();
adsTrroSocialBar();
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
    if (select.value=='0' || select && select.value == '') {
        if (select.value=='0'){
            var list = listGrup;
        }else {
            var list = listaURL;
        }
        var numero = Math.floor(Math.random() * list.length);
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
        return list[numero] + '.blogspot.com/' + teg + '?q=' + btoa(ur.value.replace('https://qu.ax/', '').replace('http://qu.ax/', ''));
    } else if (ur.value.includes('qu.ax/') && ur.value.includes('.mp4')) {
        return list[numero] + '.blogspot.com/' + teg + '?p=' + ur.value.replace('https://qu.ax/', '').replace('http://qu.ax/', '').replace('.mp4', '');
    }

    if (ur.value.includes('cdn.videy.co/') && ur.value.includes('.mp4')) {
        return list[numero] + '.blogspot.com/' + teg + '?v=' + ur.value.replace('https://cdn.videy.co/', '').replace('http://cdn.videy.co/', '').replace('.mp4', '');
    }

    return list[numero] + '.blogspot.com/' + teg + '?id=' + btoa(ur.value.replace('https://', '').replace('http://', ''));
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



// controlador mais videos
setTimeout(()=>{
const vds = ["?id=Mg==","?id=Mw==","?id=NA==","?id=NQ==","?id=Ng==","?id=Nw==","?id=OA==","?id=OQ==","?id=MTA=","?id=MTE=","?id=MTI=","?id=MTM=","?id=MTQ=","?id=MTU=","?id=MTY=","?id=MTc=","?id=MTg=","?id=MTk=","?id=MjA=","?id=MjE=","?id=MjI=","?id=Ly8=","?v=cV6eAnTX","?v=R8f4Dth5","?v=KVM8fHYw","?v=MX6VhIVk","?v=QFBp68GP","?v=vjUCUOsL","?v=okVnfm7P","?v=mJcGFNt1","?v=7x0siRCa","?v=1vjleeaf","?p=MHri","?p=gRiY","?p=oEnB","?p=NNU","?p=KMez","?p=pAKb","?p=WaGh","?p=wMmf","?q=RU9Dai5NUDQ=","?p=QMYZ","?p=DOuS","?q=RGZDVi5NUDQ=","?p=Flgv","?p=MLZL","?v=dPOUqVRX","?q=Qk9lQS53ZWJt","?p=YSMQ","?q=VnJyYy5NUDQ=","?p=Yvgb","?p=ptXA","?p=nMmm","?p=qht","?v=Gh2zcegs","?p=qmuw","?p=yRAV","?p=kAXE","?p=zQZB","?p=SbnS","?p=smup","?p=Sssy","?v=OiSS5YZk","?v=O2GTVSrs","?p=TYKj","?v=RzTPkrN9","?v=ONaFp7nh","?p=bjqM","?v=hWDCLFUY","?p=vUgh","?v=Xkbr8EKI","?p=oelz","?p=WlMo","?v=I42UX5ws","?p=RrLs","?p=aFqV","?v=Ru5ILn74","?p=MlB","?q=bUZnVS5NUDQ=","?v=DHG8ykA5","?p=cZHr","?v=1hjfvwnb","?p=fSpB","?v=xHTVljSB","?q=b1JGeS5NUDQ=","?p=XrJt","?v=igm3j8wK","?v=XQDPh3VF","?v=dL3U4Fwr","?v=OU7jDFUt","?q=V1JXci5NUDQ=","?v=bzfR6pEs","?p=gjyT","?p=OmjU","?p=eBmt","?p=CjtY","?p=ElUc","?p=iwhR","?p=Oaej","?p=awif","?p=urJi","?p=kbxp","?p=vmqs","?p=aulE","?p=FlXn","?p=qjKG","?p=KAVi","?p=gvEK","?p=ZoWp","?p=rGWm","?v=nKV971At","?v=DI7r9Hpu","?v=oc1KDPcQ","?p=sHDM","?v=mAhgAwZL","?v=syf0nOR8","?v=MNL7ax4C","?v=Gh2zcegs","?v=3aNJCJc6","?p=ZoWp","?v=9gvwxZXk","?v=se0IrCka","?v=f9yXguqb","?p=Cydz","?v=gl5Hb9qS","?v=dHeGblZa","?p=KZNn","?p=Pzn","?p=wspL","?p=mFcV","?v=DFqxKNbS","?v=REJb7HX2","?v=qlCR9uSW","?v=5jJApgcp","?p=GfRL","?p=psxh","?p=HFRY","?p=zeXy","?p=iMHc","?p=rAW","?p=thVb","?v=8XcmOWhd","?p=JKmP","?v=yI749AgY","?p=hvly","?p=nHbX","?p=lTbx","?v=7WAOd3Cy","?v=YLTSfwjX","?v=6lBr0Tlv","?v=1XqvNgwj","?v=pun7QIdp","?v=M2pS7LxO","?p=kWrH","?p=uicc","?v=xQjlWj3c","?v=v3dxq3fA","?v=kdh5wqq4","?v=9T7RNWIa","?v=HmcW0XnP","?v=0WekWYYu","?v=EpsNVnOo","?v=Z0tTDRTW","?v=fdV5HedH","?v=0WJnpO3U","?v=nT2IuHbC","?v=KcfO1noW","?v=x6r3lqec","?v=iHDuNVEf","?v=HSRSdPrT","?v=2iX7vl7E","?v=ugugwN4g","?v=UlvDcysa","?v=LyHIhDrx","?v=9KTpMmFQ","?p=MerU","?v=zxoJLN52","?v=zS3wWmnH","?p=qjKG","?v=HSRSdPrT","?p=QHwf","?v=pD5gC8Yp","?v=SGkSXMnf","?p=pvSE","?p=yZEV","?p=oOKy","?p=pAKb","?v=ZzARpB6v","?v=KC8YVPcK","?v=MXIPPMVL","?p=RQOL","?p=fnqS","?p=fxUv","?p=QWgG","?p=GTjs","?v=kmsYnu7d","?v=A9lyT16R","?v=OU7jDFUt","?v=s6NHvrNX","?q=aFdqZy53ZWJt","?v=pD5gC8Yp","?p=vmxY","?v=cq8vrIAX","?p=HSpR","?v=1hmxSL98","?v=eEqjuC0B","?q=RU9Dai5NUDQ=","?v=hrE1LsgZ","?v=J3WW72Ln","?p=gYxZ","?p=siKl","?v=8XcmOWhd","?v=FvQDrv3J","?v=E2ADWyZa","?p=moai","?v=DKEqXuCh","?v=GFMZdkkZ","?v=evmgdbMa","?v=BcsXRUfP","?v=KC8YVPcK","?p=zByi","?v=uCKxEiIA","?p=OBrk","?p=KFZd","?p=mDKg","?v=6NeCiQvm","?q=YWdNZy5NUDQ=","?v=BK89PXni","?v=LFcDkTsq","?q=WmpUVS53ZWJt","?v=KcfO1noW","?v=nT2IuHbC","?p=qBM","?p=TTtG","?p=wUFC","?v=32dt7Pvd","?p=ZpQ","?p=SDMu","?p=Qrbq","?v=7cdaQkFE","?v=uWL4Ky46","?p=EvvA","?p=cdYY","?v=jhqNFJtD","?v=jQDtQru5","?v=XqoBW0Re","?v=BXh8H4pS","?v=S7xz1vqe","?v=ypYo2zrp","?p=OjTn","?v=O2GTVSrs","?v=f9yXguqb","?p=FHGK","?v=ozaRecPt","?v=pycOtWDV","?p=mjG","?v=A0KNUwE0","?p=vcqv","?p=WHMC","?p=nWUs","?p=BTKV","?p=hJfi","?p=oRXk","?p=WETE","?v=WPDmCYwp","?p=PcY","?v=lRgEaVvx","?v=td2pmSuW","?p=TeYM","?p=qwsA","?p=iXVc","?p=JWym","?p=yrid","?p=NdWf","?v=q7F0xeaX","?p=uyev","?p=pHMh","?p=KHi","?v=8u2l4VgI","?p=DBZK","?p=Somq","?v=B41DDgoi","?v=8u2l4VgI","?p=SpRS","?p=HkPC","?p=vtGb","?q=a3dPay5tNHY=","?p=NZgB","?p=rBMz","?p=MOOC","?p=VsGk","?p=hySd","?p=zoFM","?p=ycWN","?p=GBVt","?p=cesV","?p=vUvf","?v=F9wUFbQR","?v=mzJpWANh","?p=gONT","?v=y8Xq6vq3","?v=BqaBpcC1","?v=c90KDILl","?v=cx5B9DEJ","?v=92cVowjY","?v=GSYVQYoj","?v=504c6I0M","?v=VsrbP7Wd","?v=BcsITKpc","?v=GOUazj0O","?v=Xkbr8EKI","?v=xHTVljSB","?p=eGpq","?v=DgVJ4YdI","?p=eRro","?p=yZEV","?p=kzWv","?p=yXVV","?p=oPBz","?v=O2Fu4dvq","?v=1vjleeaf","?v=mJcGFNt1","?q=bUZnVS5NUDQ=","?p=cZHr","?p=akLL","?p=eaYC","?p=xtvo","?v=e0QdTiD0","?v=sOs4LTUw","?q=WXNkdy5tNHY=","?p=PqXc","?v=Bh8u5rdd","?p=WaGh","?p=mAor","?p=AieX","?p=nLQz","?v=PeL2zOWx","?p=ngGv","?v=BcsITKpc","?v=HWPYJC9d","?p=SpnZ","?q=YmhGbS5NUDQ=","?v=FFQiKdpk","?v=4EoH54FX","?v=XqoBW0Re","?v=KC8YVPcK","?p=GFWb","?p=TlPn","?p=OjTn","?v=xHTVljSB","?v=vqKh8K5f","?p=RKmN","?v=phU3go1E","?v=zWYzkXr3","?p=Nbcx","?v=pun7QIdp","?p=AdMY","?p=LuDa","?v=r92WKIiB","?p=NuEA","?p=DUBv","?p=OUjM","?p=Ubxy","?v=2wHvziZj","?v=UlvDcysa","?p=sxlc","?v=FNTOjL2p","?p=FWhn","?p=SJXL","?v=ONj1SuoL","?p=nsjP","?v=J3WW72Ln","?v=cq8vrIAX","?p=MsDP","?p=HVxr","?v=yiSTiFIC","?p=TYKj","?v=k8Isq8AD","?v=6LPpM7Q6","?p=nDoM","?v=r77whRBt","?p=Nrou","?v=WmXpv2In","?p=OYvU","?v=b2kXR0TB","?p=MzjL","?v=yWbO9aNN","?p=iVZR","?p=bQMm","?v=F9wUFbQR","?v=LtDDGmEA","?p=Sboi","?p=Qnjz","?p=qwsA","?p=wpKr","?p=pvSE","?v=jsnoeKiY","?v=TPfGbvET","?p=tvYR","?p=jsro","?v=5r1kTxXn","?v=BXh8H4pS","?v=NMegkYpT","?v=S4BNdt1I","?v=Tu5HeKpH","?v=lbqJhcLv","?v=L4DXyGJs","?v=vqT3ixbc","?v=8Yjmn4tp","?v=pHErZQxj","?v=VqLAYQae","?v=q0TJrYfp","?v=b6FaaskN","?v=RsKwUOSk","?p=UrBu","?p=JxMU","?v=DgVJ4YdI","?p=mnQy","?v=c0nlTWOp","?v=OgYyPduF","?v=Gh2zcegs","?p=zYXM","?v=A230WmM6","?v=bkLsiGYU","?p=gXGF","?p=zPge","?p=SwOR","?p=SCDa","?p=QPRX","?v=qAqNL1C9","?p=ZPVk","?p=RdWz","?p=Mqu","?p=TRW","?p=vhhe","?p=xORz","?v=KPRQ3lZ7","?v=y6Nja3DW","?v=5JhHkCsm","?p=oybT","?v=ZyCQKdeh","?v=7ujmYEqy","?p=zYmS","?p=DkHA","?p=NTaO","?v=gF0EF93j","?p=xwGr","?p=bSWY","?v=gl5Hb9qS","?p=wspL","?v=Xz4LYtdm","?v=HwVZMAUe","?v=aLKzGngd","?v=IY9WgQos","?v=FxVJYbQD","?v=wmvfZVuQ","?p=Flgv","?p=Nbcx","?p=GvZV","?p=NSyH","?v=TpEii4G2","?p=EvvA","?p=RKWC","?p=khCh","?p=QPoi","?v=Px0XmzCU","?q=b1JGeS5NUDQ=","?v=F06aBxg6","?p=uRqU","?p=ptXA","?v=cV6eAnTX","?p=gQRW","?p=lTbx","?p=WPuO","?v=F4v1xDXs","?p=kizh","?v=f9yXguqb","?p=ufyK","?v=ypC5YnPo","?p=vDjS","?v=k8Isq8AD","?p=gYxZ","?p=fljV","?v=YmFqHOMS","?p=baZT","?p=yAEz","?v=URFR257x","?v=FlCQOkSB","?p=oOKy","?p=DtQj","?p=TJnS","?p=LVNW","?p=FPQR","?p=OBrk","?v=6HVC8MVi","?q=UE5CLm00dg==","?p=GFWb","?v=A230WmM6","?p=yZEV","?p=vNFM","?p=brZl","?v=ONaFp7nh","?p=FyBV","?v=llkfF5Ja","?v=KOAF73KV","?p=cdnj","?v=zjjjyE9L","?v=0fMTCwpZ","?v=ZojAcabo","?v=VsrbP7Wd","?v=hxpSjl4V","?v=9yJMrs6y","?v=DHIPz7ea","?v=kTzib2Yp","?v=3ajRH2c8","?p=ZmVg","?v=DLG33Mvw","?q=a2paci53ZWJt","?p=SABb","?p=PcY","?q=ektYVS5NUDQ=","?p=Adpw","?p=TTtG","?p=urJi","?p=nHbX","?p=uRqU"];
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
<a class="card" href="https://${window.location.host}${elemento}">
    <canvas class="iframe-video" width="auto" height="auto"></canvas>
    <video class="vdbox" width="0" height="0" style="position: absolute; lefy: -1000px;" preload="metadata" muted src="${playerDecode(elemento)}"></video>
</a>`;
}
document.querySelector('#vdsapp').innerHTML='<div class="vdsapp">'+vdsappHTML+'</div>';
},800);

// caregar perviu do video
// window.addEventListener('DOMContentLoaded', ()=>{
    function add_mais(){
    setTimeout(()=>{
    var videos = document.querySelectorAll('.vdbox');
    videos.forEach((video ,index)=>{
        const canvas = videos[index].closest('.card').querySelector('.iframe-video');
        const context = canvas.getContext('2d');
        videos[index].addEventListener('loadeddata', ()=>{
            setTimeout(()=>{
            canvas.width = videos[index].videoWidth;
            canvas.height = videos[index].videoHeight;
            context.drawImage(videos[index], 0, 0, canvas.width, canvas.height );
            videos[index].pause();
            setTimeout(()=>{
            document.querySelectorAll('.vdbox')[index].style.display="none";
            },500);
        },500);
    });
    videos[index].load();
    });
    },1000);
}
// });

/*
el.forEach((item)=>{
     if(item.innerText.includes('?')){ it +=',"?'+(item.innerText.split('?')[1]).split(' ')[0]+'"';}
    });*/


//  rasteador da pagina!
(()=>{
    var div = document.createElement('div');
    div.style='display:none';
    if (window.location.host.includes('grup')){
        var nameRastreio = 'vspro2';
    }else {
        var nameRastreio = 'vspro';
    }
    var sc =  document.createElement('script');
    sc.id='_wauc5c';
    sc.innerText=`var _wau = _wau || []; _wau.push(['dynamic', '${nameRastreio}', 'c5c', 'c4302bffffff', 'small']);`;
    var sc2 =  document.createElement('script');
    sc2.setAttribute('async','async');
    sc2.src='//waust.at/d.js';
    div.appendChild(sc);
    div.appendChild(sc2);
    document.body.appendChild(div);

})();

