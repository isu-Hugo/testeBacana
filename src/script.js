const opc1 = document.getElementById('op1');
const webhookURL = prompt("key: ");

opc1.addEventListener('click', ()=>{

    const data = {
    content: `:outbox_tray: Pagamento\nValor de R$`,
    username: 'Relatorio',
    
    };

    fetch(webhookURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => {
    if (response.ok) {
        console.log('Mensagem enviada com sucesso!');
    } else {
        console.log('Erro ao enviar: ' + response.status);
    }
    })
    .catch(error => {
    console.log('Erro na requisição: ' + error);
    });



});
