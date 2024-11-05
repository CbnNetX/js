
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
                // margin: 0 5px 80px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                background: #111;
                height: 100vh;

            }
            </style>
            <div>
            <video style=" box-sizing: border-box; width: 100%; height: auto;" controls ><source src="${adicionarDinamica(true)}"></video>
            </div>`;
            adicionarDinamica();
            ads_start();
    }
}

function adicionarDinamica(indicador) {
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
};

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
        //teg += abc[numeroABC];
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

function ads_start(){
    var valor = Math.floor(Math.random() * 2);
    if (valor % 2 ==0){
        return;
    }
    adsTrroPopunder();
    adsTrroSocialBar();

}

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
