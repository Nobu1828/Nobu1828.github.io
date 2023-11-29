const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const TITULO = document.getElementById("hidratacion");
const TEXTO = document.getElementById("completar");

function calculo (peso){
    const unidad ="Kg";
    let metodo;
    let resultado;

    metodo = "Hollidar-Segar";
    if (peso <= 10 && peso > 0) {
        const volumenDiario = peso * 100;
        const mantenimiento = Math.round(volumenDiario / 24 ) ;
        const mm = Math.round(mantenimiento * 1.5);
        
        resultado = `<br>
                    Volumen diario: ${volumenDiario} cc, <br>
                    Mantenimiento: ${mantenimiento} cc/hr, <br>
                    m+m/2: ${mm} cc`;        
    } 



    else if (peso <= 20 && peso > 10) {
        const volumenDiario = (peso - 10) * 50 + 1000;
        const mantenimiento = Math.round(volumenDiario / 24 ) ;
        const mm = Math.round(mantenimiento * 1.5);
        resultado = `<br>
                    Volumen diario: ${volumenDiario} cc, <br>
                    Mantenimiento: ${mantenimiento} cc/hr, <br>
                    m+m/2: ${mm} cc`;        
    } 


    else if (peso <= 30 && peso > 20) {
        const volumenDiario = (peso - 20) * 20 + 1500;
        const mantenimiento = Math.round(volumenDiario / 24 ) ;
        const mm = Math.round(mantenimiento  * 1.5);
        resultado = `<br>
                    Volumen diario: ${volumenDiario} cc, <br>
                    Mantenimiento: ${mantenimiento} cc/hr, <br>
                    m+m/2: ${mm} cc`;        
    } 

    else {
        metodo = "Superficie Corporal";
        const SC =  peso * 4 + 7
        const SC2 = peso * 1 + 90
        const SC3 = SC / SC2
        const sc1500 = Math.round(SC3 * 1500);
        const sc2000 = Math.round(SC3 * 2000);
       /* const mantenimiento = Math.round(sc1500 / 24 );
        const mantenimiento1 = Math.round(sc2000 / 24 );
        const mm = (mantenimiento * 1.5);
        const mm1 = (mantenimiento1 * 1.5);
        
                            Aca esta por si quieren que tambien muestre el mantenimiento y el M+M/2
                            Solamente tienen que borrar los  (/ * , * /)  */
        resultado = `<br>
                    SC * 1500: ${sc1500} cc, <br>
                    <br>
                    SC * 2000: ${sc2000}, cc <br>`;
                    /*Mantenimiento: ${mantenimiento} cc/hr, <br>
                    M+M/2: ${mm}, <br>
                    
                    
                    Mantenimiento: ${mantenimiento1} cc/hr, <br>
                    M+M/2: ${mm1} cc, <br>`;*/
    }
    return `Para un peso de ${peso} ${unidad}, <br>
            Se utilizo el metodo ${metodo}. <br>
            ${resultado}`;
}

function reiniciar() {
    FLU.innerHTML = "";
    MAN.innerHTML = "";
    TEXTO.style.display = "block";
    TITULO.style.display = "block";
    ERROR.style.display = "none";
    FLU.style.display = "none";
    MAN.style.display = "none";
    document.getElementById("peso").value = "";
  }

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calculo(DATO);
        FLU.innerHTML =  flujo;
        MAN.innerHTML = 'Los resultados son una aproximacion y pueden no ser exactos'
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        TEXTO.style.display = 'none';
        TITULO.style.display = 'none';
        setTimeout(reiniciar, 30000)

    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        TEXTO.style.display = 'block';
        TITULO.style.display = 'block';
    }
   
})