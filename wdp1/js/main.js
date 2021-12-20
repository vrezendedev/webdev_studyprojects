//Exercicio 01
//os métodos .toFixed e pareFloat garantem que durante a execução
//da função, será mantido os pontos decimais... 
//sem que ocorra a perda de valores como 0.01
const vCompra = document.querySelector("#vCompra");
const vPagamento = document.querySelector("#vPagamento");
const btnCalTroco = document.querySelector("#btnCalTroco");
const quant1 = document.querySelector("#quant1");
const quant05 = document.querySelector("#quant05");
const quant025 = document.querySelector("#quant025");
const quant010 = document.querySelector("#quant010");
const quant005 = document.querySelector("#quant005");
const quant001 = document.querySelector("#quant001");
const semTroco = document.querySelector("#nada");

btnCalTroco.onclick = function()
{
    let v1 = parseFloat(vCompra.value);
    let v2 = parseFloat(vPagamento.value);
    semTroco.textContent = " ";
    quant1.textContent = "-";
    quant05.textContent = "-";
    quant025.textContent = "-";
    quant010.textContent = "-";
    quant005.textContent = "-";
    quant001.textContent = "-";

    if(Math.sign(v1) == 1 && (Math.sign(v2) == 1 || Math.sign (v2) == +0 || Math.sign(v2) == -0))
    {
        if(v2 >= v1)
        {
            let v3 =  (v2 - v1).toFixed(2); //calcula o troco
            parseFloat(v3);
            let m1Real, m5Cent, m25Cent, m10Cent, m05Cent, m01Cent;

            if(v3 > 0)
            {
                for(m1Real = 0; v3 >= 1; m1Real++)
                {
                    v3 = (v3 - 1).toFixed(2);
                    parseFloat(v3);
                }
                
                quant1.textContent = m1Real;

                for(m5Cent= 0; v3 >= 0.5; m5Cent++)
                {
                    v3 = (v3 - 0.5).toFixed(2);
                    parseFloat(v3);
                }

                quant05.textContent = m5Cent;

                for(m25Cent = 0; v3 >= 0.25; m25Cent++)
                {
                    v3 = (v3 - 0.25).toFixed(2);
                    parseFloat(v3);
                }

                quant025.textContent = m25Cent;

                for(m10Cent = 0; v3 >= 0.1; m10Cent++)
                {
                    v3 = (v3 - 0.1).toFixed(2);
                    parseFloat(v3);
                }

                quant010.textContent = m10Cent;

                for(m05Cent = 0; v3 >= 0.05; m05Cent++)
                {
                    v3 = (v3 - 0.05).toFixed(2);
                    parseFloat(v3);
                }

                quant005.textContent = m05Cent;

                for(m01Cent = 0; v3 >= 0.01; m01Cent++)
                {
                    v3 = (v3 - 0.01).toFixed(2);
                    parseFloat(v3);
                }
                
                quant001.textContent = m01Cent;
            } 
            else
            {
                semTroco.textContent = "Não há troco.";
            }
        } 
        else
        {
            semTroco.textContent = "Valor pago é insuficiente.";
        }
    }
    else
    {
        semTroco.textContent = "Valor(es) inválido(s).";
    }
}


//Exercicio 02
const vA = document.querySelector("#vA");
const vB = document.querySelector("#vB");
const btnCalMult = document.querySelector("#btnCalMult");
const resultado = document.querySelector("#resMult");

btnCalMult.onclick = function()
{
    let valorA = vA.value;
    let valorB = vB.value;
    let mult = 0;
    let negA = 0; 
    let negB = 0;

    if(valorA % 1 == 0 && valorB % 1 == 0) //verifica se é float
    {

        valorA = parseInt(vA.value);
        valorB = parseInt(vB.value);

        if(valorA >= valorB)
        {
            if(valorA < 0) //checa se valor a é negativo
            {
                valorA = valorA * -1; //converte para positivo 
                negA = 1; //"bool"
            } 
            
            if(valorB < 0) //repete processo com o b
            {
                valorB = valorB * -1;
                negB = 1;
            }

            i = 0;
            
            while(i < valorA)
            {
                mult = mult + valorB;
                i++;
            }

            if(negA == 1) //converte de volta para printar
            {
                valorA = valorA * -1;
            }

            if(negB == 1)
            {
                valorB = valorB * -1;
            }

            if(negB == 1 && negA == 0) //verifica se o a era pos e o b negativo
            {
                mult = mult * -1; //se sim, mult deve ser negativo
            }

            resultado.textContent = valorA + " x " + valorB + " = " + mult;
        } 
        else
        {
            resultado.textContent = "O número " + valorA + " é menor que " + valorB + ".";
        }
    } 
    else 
    {
        resultado.textContent = "Valor(es) não é(são) inteiro(s).";
    }

}


//Exercicio 03
const vAno = document.querySelector("#vAno");
const vMes = document.querySelector("#vMes");
const vDia = document.querySelector("#vDia");
const btnVerData = document.querySelector("#btnVerData");
const vali = document.querySelector("#resVali");

btnVerData.onclick = function()
{
    let a = vAno.value;
    let m = vMes.value;
    let d = vDia.value;
    let dataVal = 0;

    if(a % 1 == 0 && m % 1 == 0 && d % 1 == 0)
    {
        if(a == 0 || m == 0 || d == 0)
        {
            vali.textContent = "não é válida.";
        }
        else
        {

            if (m == 4 || m == 6 || m == 9 || m == 11)
            {
                if(d > 0 && d <= 30)
                {
                    dataVal = 1;     
                }
                else
                {
                    dataVal = 0;
                }
            } 
            else if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12)
            {
                if (d > 0 && d <= 31)
                {
                    dataVal = 1;
                }
                else
                {
                    dataVal = 0;
                }
            }
            else if (m == 2)
            {
                if(d == 29 && a % 4 == 0)
                {
                    dataVal = 1;
                }
                else if(d > 0 && d <= 28)
                {
                    dataVal = 1;
                } 
                else 
                {
                    dataVal = 0;
                }
            }
    
            if(dataVal == 1)
            {
                vali.textContent = "é válida.";
            }
            else 
            {
                vali.textContent = "não é válida.";
            }
        }    
    } 
    else
    {
        vali.textContent = "dados inválidos.";
    }
    
}
