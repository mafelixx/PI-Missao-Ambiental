function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value
    var mensagem = document.getElementById("mensagem").value;

    var url = "https://wa.me/5511993417071?text="

        + "%0a"
        +"*Nome*: " + nome + "%0a"
        +"*E-mail*: " + email + "%0a"
        +"*Assunto*: " + assunto + "%0a"
        +"*Mensagem*: " + mensagem + "%0a";
        window.open(url, '_blank').focus();

}

var formValidate = true;

$(function validar() {
    $('#contactForm').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            assunto: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Digite o seu nome",
                minlength: "O seu nome deve ter pelo menos 2 caracteres"
            },
            assunto: {
                required: "Digite o assunto",
                minlength: "O assunto deve ter pelo menos 4 caracteres"
            },
            email: {
                required: "Digite o seu e-mail"
            },
            mensagem: {
                required: "Digite a sua mensagem",
                minlength: "A sua mensagem deve ter pelo menos 10 caracteres"
            }
        },
        submitHandler: function(form) {
            $(".submit").attr("disabled", true);
            form.submit(); // <- use 'form' argument here.
            $('#botao').prop('disabled', false); // Habilita o botão após a validação bem-sucedida
        }
    });

    $('#contactForm input, #contactForm textarea').on('keyup', function() {
        var preenchidos = $('#contactForm').valid();
        $('#botao').prop('disabled', !preenchidos);
    });
});