document.addEventListener('DOMContentLoaded', function() {
    console.log('El evento DOMContentLoaded se ha disparado correctamente.');

    // Función para mostrar alerta de bienvenida
    function mostrarAlertaBienvenida() {
        console.log('Se hizo clic en el botón Home.');
        alert('Bienvenidos!');
        cargarIndice();
    }

    // Función para cargar la página principal con el menú
    function cargarIndice() {
        console.log('Cargando la página principal con el menú.');
        document.getElementById('content').innerHTML = `
            <section class="menu">
                <a href="calculadora.html" target="janela">Calculadora</a>
                <a href="contador.html" target="janela">Contar</a>
                <a href="fatorial.html" target="janela">Factorial</a>
                <a href="vetor.html" target="janela">Vetor</a>
            </section>
            <section class="conteudo">
                <iframe name="janela" class="jan"></iframe>
            </section>
        `;
    }

    // Función para manejar los botones About y Contact
    function manejarBotonAbout() {
        console.log('Se hizo clic en el botón About.');
        alert('Vamos falar de Nós!');
    }

    function manejarBotonContact() {
        console.log('Se hizo clic en el botón Contact.');
        alert('Fala Conosco!');
    }

    // Función para el cálculo de la calculadora
    function calcularOperacion(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

        // Obteniendo los valores del formulario
        const numero1 = parseFloat(document.querySelector('input[name="numero1"]').value);
        const numero2 = parseFloat(document.querySelector('input[name="numero2"]').value);
        const operacao = document.querySelector('input[name="operacao"]:checked').value;

        // Realizando la operación seleccionada
        let resultado;
        switch (operacao) {
            case 'soma':
                resultado = numero1 + numero2;
                break;
            case 'substracao':
                resultado = numero1 - numero2;
                break;
            case 'multiplicacao':
                resultado = numero1 * numero2;
                break;
            case 'divisao':
                if (numero2 === 0) {
                    alert('Não há divisão por zero nos números reais!');
                    return;
                }
                resultado = numero1 / numero2;
                break;
            default:
                alert('Escolha uma operação');
                return;
        }

        // Mostrando el resultado en el div con id "resultado"
        document.getElementById('resultado').innerHTML = `<p>Resultado: ${resultado}</p>`;
    }

    // Función para el contador
    function contarNumeros(event) {
        event.preventDefault();
        console.log('El formulario de contador se ha enviado correctamente.');
        let vezes = parseInt(document.querySelector('input[name="numero1"]').value);
        let incremento = parseInt(document.querySelector('input[name="numero2"]').value);
        let resultado = '';
    
        for (let i = 1; i <= vezes; i++) {
            resultado += `${i * incremento}\n`;
        }
        alert(resultado);
    }

    // Función para el factorial
    function calcularFactorial(event) {
        event.preventDefault();
        const numero = parseInt(document.querySelector('input[name="numero"]').value);
        let resultado = 1;
        let mensaje = '';

        if (numero >= 0) {
            if (numero === 0) {
                mensaje = "Todo fator multiplicado por zero é igual a 1";
            } else {
                for (let i = numero; i > 0; i--) {
                    mensaje += `${i} x `;
                    resultado *= i;
                }
                mensaje = mensaje.slice(0, -3) + ` = ${resultado}`;
            }
        } else {
            mensaje = "Os fatores não são negativos";
        }
        document.querySelector('#resultado').innerHTML = `<p>${mensaje}</p>`;
    }

    // Función para el vector
    function obtenerNombrePorPosicion(event) {
        event.preventDefault();
        console.log('El formulario de vector se ha enviado correctamente.');
        const nombres = [];
        for (let i = 1; i <= 4; i++) {
            nombres.push(document.querySelector(`input[name="nome${i}"]`).value);
        }
        let posicion = parseInt(document.querySelector('input[name="posicao"]').value);
        if (posicion > 0 && posicion <= nombres.length) {
            posicion--;
            console.log(`El nombre en la posición ${posicion + 1} es: ${nombres[posicion]}`);
            document.querySelector('#resultado').innerHTML = `<p>O nome na posição ${posicion + 1} é: ${nombres[posicion]}</p>`;
        } else {
            console.log('La posición ingresada es inválida.');
            document.querySelector('#resultado').innerHTML = `<p>Posição inválida</p>`;
        }
    }

    // Asignación de eventos a los botones y formularios si existen
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) homeBtn.addEventListener('click', mostrarAlertaBienvenida);

    const aboutBtn = document.getElementById('aboutBtn');
    if (aboutBtn) aboutBtn.addEventListener('click', manejarBotonAbout);

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) contactBtn.addEventListener('click', manejarBotonContact);

    const calculadoraForm = document.querySelector('form[action="calculadora.html"]');
    if (calculadoraForm) calculadoraForm.addEventListener('submit', calcularOperacion);

    const contadorForm = document.querySelector('form[action="contador.html"]');
    if (contadorForm) contadorForm.addEventListener('submit', contarNumeros);

    const factorialForm = document.getElementById('formularioFactorial');
    if (factorialForm) factorialForm.addEventListener('submit', calcularFactorial);

    const vetorForm = document.querySelector('form[action="vetor.html"]');
    if (vetorForm) vetorForm.addEventListener('submit', obtenerNombrePorPosicion);
});
