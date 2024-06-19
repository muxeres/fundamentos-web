## Roteiro do Site

### Página Principal (`index.html`)
**Objetivo:** Apresentar o menu principal com links para as diferentes funcionalidades: Calculadora, Contador, Fatorial e Vetor.

**Funcionalidades:**
- **Menu:** Links para `calculadora.html`, `contador.html`, `fatorial.html` e `vetor.html`.
- **Botão Home:** Exibe um alerta de boas-vindas e carrega o conteúdo do menu principal.
- **Botão About:** Exibe um alerta "Vamos falar de Nós!".
- **Botão Contact:** Exibe um alerta "Fale Conosco!".

### Calculadora (`calculadora.html`)
**Objetivo:** Realizar operações aritméticas básicas (soma, subtração, multiplicação, divisão).

**Funcionalidades:**
- **Formulário:**
  - Input para dois números (`numero1`, `numero2`).
  - Radios para selecionar a operação (`soma`, `substracao`, `multiplicacao`, `divisao`).
  - Botão submit para calcular o resultado.
- **Resultados:** O resultado da operação selecionada é exibido no div `resultado`.

### Contador (`contador.html`)
**Objetivo:** Contar números de dois em dois a partir de um número inicial até um número final, exibindo ambos os números em cada passo.

**Funcionalidades:**
- **Formulário:**
  - Input para dois números (`numero1`, `numero2`).
  - Botão submit para iniciar a contagem.
- **Resultados:** Exibe cada par de números contados em linhas separadas no div `resultado`.

### Fatorial (`fatorial.html`)
**Objetivo:** Calcular o fatorial de um número.

**Funcionalidades:**
- **Formulário:**
  - Input para um número (`numero`).
  - Botão submit para calcular o fatorial.
- **Resultados:** Exibe o processo de cálculo do fatorial e o resultado final no div `resultado`.

### Vetor (`vetor.html`)
**Objetivo:** Permitir a entrada de nomes em um array (vetor) e buscar um nome por sua posição.

**Funcionalidades:**
- **Formulário:**
  - Inputs para nomes (`nome1`, `nome2`, `nome3`, `nome4`).
  - Input para a posição (`posicao`).
  - Botão submit para buscar o nome na posição dada.
- **Resultados:** Exibe o nome na posição inserida ou uma mensagem de erro se a posição for inválida no div `resultado`.

---

## Comandos JavaScript

```javascript
document.addEventListener('DOMContentLoaded', function() {...});
Descrição: Adiciona um listener para esperar o evento de carregamento do DOM.
Uso: Garante que o código JavaScript só será executado após o carregamento completo do DOM.
javascript
Copiar código
console.log('mensagem');
Descrição: Exibe uma mensagem no console do navegador.
Uso: Útil para depuração e registro de mensagens durante o desenvolvimento.
javascript
Copiar código
alert('mensagem');
Descrição: Exibe um alerta na tela do usuário com a mensagem fornecida.
Uso: Para mostrar mensagens importantes ou prompts de interação com o usuário.
javascript
Copiar código
parseFloat(valor)
Descrição: Converte uma string em um número de ponto flutuante (número decimal).
Uso: Usado para obter valores numéricos de inputs de formulário e garantir que sejam tratados como números.
javascript
Copiar código
parseInt(valor)
Descrição: Converte uma string em um número inteiro.
Uso: Utilizado para converter valores numéricos de strings para números inteiros, especialmente útil em operações matemáticas.
javascript
Copiar código
document.querySelector('seletor')
Descrição: Retorna o primeiro elemento do documento que corresponde ao seletor CSS especificado.
Uso: Permite selecionar e manipular elementos HTML no DOM utilizando seletores CSS.
javascript
Copiar código
document.getElementById('id')
Descrição: Retorna a referência para o elemento com o ID especificado.
Uso: Utilizado para obter uma referência direta a um elemento específico do DOM com base em seu ID.
javascript
Copiar código
document.querySelector('form[action="url"]')
Descrição: Seleciona o primeiro formulário no documento que corresponde ao seletor CSS especificado.
Uso: Permite selecionar e manipular formulários HTML com base em atributos específicos, como a ação (action).
javascript
Copiar código
event.preventDefault();
Descrição: Cancela o comportamento padrão de um evento, se ele for cancelável, o que significa que a ação padrão que ocorre quando o evento é acionado não acontecerá.
Uso: Usado com frequência para evitar que formulários sejam enviados ou links sejam seguidos, permitindo manipulações personalizadas do comportamento do evento.
Funções JavaScript
mostrarAlertaBienvenida()

Descrição: Exibe um alerta de boas-vindas ao usuário.
Uso: Associada ao botão Home para dar uma mensagem de boas-vindas e carregar o menu principal.
cargarIndice()

Descrição: Carrega o conteúdo do menu principal na página principal.
Uso: Substitui o conteúdo do elemento content com o menu principal contendo links para diferentes funcionalidades.
manejarBotonAbout()

Descrição: Manipula o clique no botão About, exibindo um alerta com uma mensagem específica.
Uso: Associada ao botão About para exibir um alerta com a mensagem "Vamos falar de Nós!".
manejarBotonContact()

Descrição: Manipula o clique no botão Contact, exibindo um alerta com uma mensagem específica.
Uso: Associada ao botão Contact para exibir um alerta com a mensagem "Fala Conosco!".
calcularOperacion(event)

Descrição: Realiza operações aritméticas com base nos valores fornecidos pelo usuário e exibe o resultado.
Uso: Associada ao formulário da calculadora para calcular e exibir o resultado das operações aritméticas selecionadas pelo usuário.
contarNumeros(event)

Descrição: Conta números de acordo com os valores fornecidos pelo usuário e exibe a contagem.
Uso: Associada ao formulário de contador para contar números com base nos parâmetros fornecidos pelo usuário e exibir o resultado.
calcularFactorial(event)

Descrição: Calcula o factorial de um número fornecido pelo usuário e exibe o processo e o resultado.
Uso: Associada ao formulário de factorial para calcular e exibir o factorial do número fornecido pelo usuário.
obtenerNombrePorPosicion(event)

Descrição: Permite a entrada de nomes em um array (vetor) e busca um nome por sua posição, exibindo o nome ou uma mensagem de erro.
Uso: Associada ao formulário de vetor para obter e exibir o nome na posição especificada pelo usuário ou informar sobre uma posição inválida.
