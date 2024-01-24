var btnAgende = document.getElementById('btnAgende');

    // Adicione um ouvinte de evento para a animação ao clicar
    btnAgende.addEventListener('click', function () {
        // Adicione ou remova uma classe para ativar a animação
        btnAgende.classList.toggle('animated');

        // Você pode adicionar mais lógica aqui, como redirecionar para a página de agendamento
        // window.location.href = 'sua_pagina_de_agendamento.html';
    });

    //Animção do btn de agendamento Segunda Página

    function agendarFrete() {
        // Simula o processamento do agendamento
        alert("Agendamento Cadastrado, fique no aguardo e retornaremos para você!");

        // Reseta o formulário
        document.getElementById("formAgendamento").reset();
    }