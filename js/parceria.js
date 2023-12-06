function parceriaWhatsapp() {
    var mensagem = "Olá, gostaria de conversar sobre uma futura parceria!"

    var url = "https://wa.me/5511969848080?text="

    +"*Mensagem*: " + mensagem + "%0a";
    window.open(url, '_blank').focus();
}