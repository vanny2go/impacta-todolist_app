(function(){
    let dtInicial = $('#dtInicial');
    let dtFinal = $('#dtFinal');
    let nome = $('#nome');
    let descricao = $('#descricao');
    let gravar = $('#gravar');
    let tarefas = $('#tarefas tbody');
    let btnRemover = $('#btnRemover');
    let marcarTodos = $('#marcarTodos');
    let todosCheckbox =$('tr td input');

    gravar.click(function(){
        /*
        console.log('Data Inicial: ' + formataData(dtInicial));
        console.log('Data Final: ' + formataData(dtFinal));
        console.log('Nome: ' + nome.val());
        console.log('Descrição: ' + descricao.val());
        */
        let novaLinha = `
        <tr>
            <td><input type="checkbox"></td>
            <td>${nome.val()}</td>
            <td>${formataData(dtInicial)}</td>
            <td>${formataData(dtFinal)}</td>
            <td>${descricao.val()}</td>
        </tr>
        `;

       tarefas.append(novaLinha);

    });

    function  formataData(data){
        let dataOriginal = data.val().split('-');
        let novaData = dataOriginal[2] + '/' + dataOriginal[1] + '/' + dataOriginal[0];
        return novaData;

    }

    btnRemover.click(function(){
        $('tr td input:checkbox:checked').parents('tr').remove();
    });

    marcarTodos.click(function(){

        if(marcarTodos[0].checked){
            $('tr td input:checkbox').prop('checked', true)
        } else {
            $('tr td input:checkbox').prop('checked', false)
        }
        
    });

})();