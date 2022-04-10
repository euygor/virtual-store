$(document).ready(function() {
    $("#cpf").mask("999.999.999-99", { reverse: true });
    $("#telefone").mask("(99) 9 9999-9999");
    $("#cep").mask("99999-999", { reverse: true });
    $("#nascimento").mask("99 / 99 / 9999");

    $("#cpf, #telefone, #cep, #nascimento").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});