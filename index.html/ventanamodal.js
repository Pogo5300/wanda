const links = {
    chispa: "https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=1573136632-6e0d360f-802f-4cd4-84bb-00d71375009f",
    guardian: "https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=1573136632-540d2dc8-ab05-4280-9954-675c2878fd3f",
    forjador: "https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=1573136632-37b5d801-a015-4a91-ac0b-09d4f8883d43"
};

function abrirModalMP(url) {
    document.getElementById('mp-iframe').src = url;
    document.getElementById('mp-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarModalMP() {
    document.getElementById('mp-modal').style.display = 'none';
    document.getElementById('mp-iframe').src = '';
    document.body.style.overflow = '';
}

document.getElementById('btn-chispa').onclick = function() {
    abrirModalMP(links.chispa);
};
document.getElementById('btn-guardian').onclick = function() {
    abrirModalMP(links.guardian);
};
document.getElementById('btn-forjador').onclick = function() {
    abrirModalMP(links.forjador);
};
document.getElementById('mp-modal-close').onclick = cerrarModalMP;
document.getElementById('mp-modal').onclick = function(e) {
    if(e.target === this) cerrarModalMP();
};
