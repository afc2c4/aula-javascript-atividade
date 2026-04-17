1. Abordagem utilizada

Abordagem: testagem manual, checagem de correspondência interface -> ação, chegagem de responsividade manual e validação sintática do HTML e CSS.

2. Lista de erros encontrados e correção aplicada

Foram encontradas dezenas de erros de sintaxe, execução, ede usabilidade e interface. As correções aplicadas constam nos commits.

3. Evidências de funcionamento

As imagens de palestrantes foram carregadas corretamente, o formulário de inscrição faz a validação e exibe mensagem de sucesso ou erro, o localStorage é atualizado com sucesso, os links levam para onde dizem levar.

4. Testes manuais executados

Todos os botões existentes foram testados. Todos os campos de formulário foram testados com preenchimento válido e inválido. As mensagens de erro exibidas no JavaScript foram investigadas. Os arquivos HTML e CSS foram testados no validador W3C. O funcionamento esperado de cada componente da interface foi confrontado com o funcionamento executado: por exemplo, para onde cada âncora estava apontando. A tela do navegador foi sucessivamente redimensionada para conferir a responsividade e o funcionamento do menu hamburger.

5. Melhorias extras

Havia uma redundância entre o dropdown de seleção de tipo de ingresso no formulário e a seleção de tipo de ingresso em destaque no meio da página. Foi removido o primeiro componente para evitar redundância, mas o ideal seria colocar o dropdown e sincronizá-lo à seleção em destaque.

