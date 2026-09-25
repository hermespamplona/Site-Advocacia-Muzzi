/**
 * ========================================================
 * ALMEIDA & MUZZI ADVOCACIA & ASSESSORIA JURÍDICA
 * Script de Interatividade e Agendamento
 * ========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // FORMULÁRIO DE AGENDAMENTO DE CONSULTA JURÍDICA
    // ----------------------------------------------------
    const formConsulta = document.getElementById("form-consulta");
    const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
    const btnSubmeter = document.getElementById("btn-submeter");

    if (formConsulta) {
        formConsulta.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Evita o recarregamento padrão da página

            // Coleta os valores digitados pelo usuário
            const nome = document.getElementById("nome").value.trim();
            const area = document.getElementById("area").value;

            // Altera o estado do botão para indicar processamento
            const textoOriginal = btnSubmeter.innerHTML;
            btnSubmeter.innerHTML = "Processando solicitação...";
            btnSubmeter.style.backgroundColor = "#c5a059";
            btnSubmeter.style.borderColor = "#c5a059";
            btnSubmeter.style.color = "#0d1b2a";

            // Simula envio assíncrono com feedback visual
            setTimeout(() => {
                btnSubmeter.innerHTML = "✓ Solicitação Enviada!";
                btnSubmeter.style.backgroundColor = "#16a34a";
                btnSubmeter.style.borderColor = "#16a34a";
                btnSubmeter.style.color = "#ffffff";

                // Exibe a mensagem de confirmação personalizada
                if (mensagemConfirmacao) {
                    mensagemConfirmacao.innerHTML = `
                        <strong>Obrigado pelo contato, ${nome}!</strong><br>
                        Recebemos sua solicitação para a área de <em>${area}</em>. 
                        Nossa equipe jurídica entrará em contato em até 24 horas úteis.
                    `;
                    mensagemConfirmacao.classList.add("ativo");
                }

                // Reseta os campos do formulário
                formConsulta.reset();

                // Restaura o botão após 4 segundos
                setTimeout(() => {
                    btnSubmeter.innerHTML = textoOriginal;
                    btnSubmeter.style.backgroundColor = "";
                    btnSubmeter.style.borderColor = "";
                    btnSubmeter.style.color = "";
                }, 4000);
            }, 800);
        });
    }
});
