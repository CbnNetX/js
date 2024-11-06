


const u = window.location.href;
if (u.includes('?') || u.includes('q=') || u.includes('p=') || u.includes('v=')) {
    if (u.includes('app')) {} else {
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



function ads_start(){
    adsTrroPopunder();

    // adsTrroSocialBar();
}

function adsTrroPopunder() {
    var sc = document.createElement('script');
    sc.getAttribute('type', 'text/javascript');
    sc.src = '//dialectamplifydocumentation.com/78/90/e5/7890e52bda40ef30c34c238c014706c4.js';
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
