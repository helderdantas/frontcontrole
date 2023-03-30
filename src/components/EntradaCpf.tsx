interface EntradaProps {
    tipo?: 'text' | 'number' | null
    texto: string | null
    valor:any
    somenteLeitura?:boolean
    valorMudou?:(valor:any) => void
    

}
// Componete que criar o modelo de formulario de entrada/input
export default function Formulario(props: EntradaProps){
    /*
    function TestaCPF(strCPF:string) {
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    */

    //arquivo funcoes_cpf.js
// validador CPF
function verificarCPF(c){
    var i;
    var s = c;
    var c = s;
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;
 
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    if (!v) {
        alert(c + " CPF Válido")
    }
}

    return (
        <div className="flex flex-col">
            <label className="mb-1 mt-3">
            {props.texto}        
            </label>
            <input 
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)}
            onBlur={e=> verificarCPF(e.target.value)}
            className={`
                border border-purple-500 rounded-lg 
                focus:outline-none bg-gray-200 px-4 py-2
                ${props.somenteLeitura ? 'bg-gray' : 'bg-white'}
            `}
            />
                         
        </div>
    )
}