
// Es muy similar a una Clase en PPOO
function crearContador(){

    let contador = 0;

    return {
        incrementar: () => {
            contador++;
            return contador;
        },
        decrementar: () => {
            contador--;
            return contador;
        },
        obtenerValor: () => {
            return contador;
        }
    }
}

const contador1 = crearContador();
contador1.obtenerValor(); // retorna 0
contador1.incrementar(); // retorna 1
contador1.incrementar(); // retorna 2
contador1.incrementar(); // retorna 3
contador1.decrementar(); // retorna 2

const contador2 = crearContador();
contador2.obtenerValor(); // retorna 0 ya que cuenta con otro contexto de ejecución
contador2.incrementar(); // retorna 1
contador2.incrementar(); // retorna 2
contador1.decrementar(); // retorna 1



function crearImpresoraDeMensajes(tipo, estilos){

    return (mensaje) => {
        console.log(`%c ${tipo}: ${mensaje} `, estilos);
    }
}

const error = crearImpresoraDeMensajes('Error', 'background-color: red; color: white;');
const warning = crearImpresoraDeMensajes('Alerta', 'background-color: orange; color: white;');
const exito = crearImpresoraDeMensajes('Exito', 'background-color: green; color: white;');
const info = crearImpresoraDeMensajes('Info', 'background-color: blue; color: white;');

error('Se ha producido un error.');
warning('Hay variables declaradas que no se están utilizando.');
exito('El programa funciona correctamente.');
info('Vaaaaaaamos Véleeeeez');