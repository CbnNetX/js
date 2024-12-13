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
            <video style="box-sizing: border-box; width: 100%; height: auto;" controls >
            <source src="${adicionarDinamica(true)}">
            </video>
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


function ads_start(){
    //adsTrroPopunder();
    //adsTrroSocialBar();
    adsMonetag();
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

function adsMonetag() {
    // <script src="https://alwingulla.com/88/tag.min.js" data-zone="119522" async data-cfasync="false"></script>
    var sc = document.createElement('script');
    sc.getAttribute('data-zone', '119522');
    sc.getAttribute('data-cfasync', 'false');
    sc.getAttribute('async', '');
    sc.src = 'https://alwingulla.com/88/tag.min.js';
    document.head.appendChild(sc);
}



//  rasteador da pagina!
(()=>{
    var div = document.createElement('div');
    div.style='display:none';
    if (window.location.host.includes('vsg')){
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
