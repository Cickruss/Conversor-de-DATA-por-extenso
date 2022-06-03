function converter(params) {
    var resp
    var dia, mes, ano,u_dia, d_dia, u_ano, d_ano,c_ano, m_ano;
    var meses = ["janeiro", "fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
    var unidadez = ["onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"]
    var unidades = ["um","dois","três","quatro","cinco","seis","sete","oito","nove", 'primeiro']
    var dezenas = ["dez","vinte",'trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa']
    var centena = ["cem","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos",'cento']
    
    dia = document.getElementById('dia').value;
    mes = document.getElementById('mes').value;
    ano = document.getElementById('ano').value;
    
    u_dia = dia % 10
    d_dia = dia - u_dia

    console.log(u_dia);
    
    u_ano = ano % 10
    d_ano = ano % 100 - u_ano
    c_ano = ano % 1000 - d_ano - u_ano
    m_ano = ano - c_ano - d_ano - u_ano
    

        switch (d_dia) {
            case 0:
                resp = ''
                break
            case 30:
                resp = dezenas[2] + ' e '
                break;
            case 20:
                resp = dezenas[1] + ' e '
                break;
            case 10:
                if (u_dia != 0) {
                    
                    if (u_dia == 1) {
                        resp = unidadez[0] + ' de '
                    }
                    if (u_dia == 2) {
                        resp = unidadez[1] + ' de '
                    }
                    if (u_dia == 3) {
                        resp = unidadez[2] + ' de '
                    }
                    if (u_dia == 4) {
                        resp = unidadez[3] + ' de '
                    }
                    if (u_dia == 5) {
                        resp = unidadez[4] + ' de '
                    }
                    if (u_dia == 6) {
                        resp = unidadez[5] + ' de '
                    }
                    if (u_dia == 7) {
                        resp = unidadez[6] + ' de '
                    }
                    if (u_dia == 8) {
                        resp = unidadez[7] + ' de '
                    }
                    if (u_dia == 9) {
                        resp = unidadez[8] + ' de '
                    }
                }else{
                resp = dezenas[0] + ' de '
                }
                break;
        
            default:
                alert('DIA INVÁLIDO')
                break;
        }
        if (d_dia != 10) {
        switch (u_dia) {
        case 9:
            resp += unidades[8] + ' de '
            break;
        case 8:
            resp += unidades[7]  + ' de '
            break;
        case 7:
            resp += unidades[6]  + ' de '
            break;
        case 6:
            resp += unidades[5]  + ' de '
            break;
        case 5:
            resp += unidades[4]  + ' de '
            break;
        case 4:
            resp += unidades[3]  + ' de '
            break;
        case 3:
            resp += unidades[2]  + ' de '
            break;
        case 2:
            resp += unidades[1]  + ' de '
            break;
        case 1:
            resp += unidades[0]  + ' de '
            break;
    
        }}

        switch (mes) {
            case "01":
                resp += meses[0] + ' de '
                break;
            case "02":
                resp += meses[1] + ' de '
                break;
            case "03":
                resp += meses[2] + ' de '
                break;
            case "04":
                resp += meses[3] + ' de '
                break;
            case "05":
                resp += meses[4] + ' de '
                break;
            case "06":
                resp += meses[5] + ' de '
                break;
            case "07":
                resp += meses[6] + ' de '
                break;
            case "08":
                resp += meses[7] + ' de '
                break;
            case "09":
                resp += meses[8] + ' de '
                break;
            case "10":
                resp += meses[9] + ' de '
                break;
            case "11":
                resp += meses[10] + ' de '
                break;
            case '12':
                resp += meses[11] + ' de  '
                break;
        
            default:
                alert('MÊS INVÁLIDO')
                break;
        }

        switch (m_ano) {
            case 0:
                resp += ''
                break;
            case 9000:
                resp += unidades[8] + ' mil '
                break;
            case 8000:
                resp += unidades[7] + ' mil '
                break;
            case 7000:
                resp += unidades[6] + ' mil '
                break;
            case 6000:
                resp += unidades[5] + ' mil '
                break;
            case 5000:
                resp += unidades[4] + ' mil '
                break;
            case 4000:
                resp += unidades[3] + ' mil '
                break;
            case 3000:
                resp += unidades[2] + ' mil '
                break;
            case 2000:
                resp += unidades[1] + ' mil '
                break;
            case 1000:
                resp += ' mil'
                break;
        
            default:
                alert('ANO INVÁLIDO')
                break;
        }
        switch (c_ano) {
            case 0:
                resp += ''
                break;
            case 900:
                resp += centena[8] + ' e '
                break;
            case 800:
                resp += centena[7] + ' e '
                break;
            case 700:
                resp += centena[6] + ' e '
                break;
            case 600:
                resp += centena[5] + ' e '
                break;
            case 500:
                resp += centena[4] + ' e '
                break;
            case 400:
                resp += centena[3] + ' e '
                break;
            case 300:
                resp += centena[2] + ' e '
                break;
            case 200:
                resp += centena[1] + ' e '
                break;
            case 100:
                if (d_ano != 0 || u_ano != 0) {
                resp += centena[9] + ' e '
                }else{
                resp += centena[0]
                } 
                break;
        }

        switch (d_ano) {
            case 0:
                resp += ''
                break;
            case 90:
                resp += dezenas[8]
                break;
            case 80:
                resp += dezenas[7]
                break;
            case 70:
                resp += dezenas[6]
                break;
            case 60:
                resp += dezenas[5]
                break;
            case 50:
                resp += dezenas[4]
                break;
            case 40:
                resp += dezenas[3]
                break;
            case 30:
                resp += dezenas[2]
                break;
            case 20:
                resp += dezenas[1]
                break;
            case 10:
                if (u_ano != 0) {
                    if (u_ano == 1) {
                        resp = unidadez[0]
                    }
                    if (u_ano == 2) {
                        resp = unidadez[1]
                    }
                    if (u_ano == 3) {
                        resp = unidadez[2]
                    }
                    if (u_ano == 4) {
                        resp = unidadez[3]
                    }
                    if (u_ano == 5) {
                        resp = unidadez[4]
                    }
                    if (u_ano == 6) {
                        resp = unidadez[5]
                    }
                    if (u_ano == 7) {
                        resp = unidadez[6]
                    }
                    if (u_ano == 8) {
                        resp = unidadez[7]
                    }
                    if (u_ano == 9) {
                        resp = unidadez[8]
                    }
                }else{
                resp = dezenas[0]
                }
                break;
        }
        switch (u_ano) {
            case 0:
                resp += ''
                break;
            case 9:
                resp +=' e ' + unidades[8]
                break;
            case 8:
                resp +=' e ' +  unidades[7]
                break;
            case 7:
                resp +=' e ' +  unidades[6]
                break;
            case 6:
                resp +=' e ' +  unidades[5]
                break;
            case 5:
                resp +=' e ' +  unidades[4]
                break;
            case 4:
                resp +=' e ' +  unidades[3]
                break;
            case 3:
                resp +=' e ' +  unidades[2]
                break;
            case 2:
                resp +=' e ' +  unidades[1]
                break;
            case 1:
                resp +=' e ' +  unidades[0]
                break;
            }

    document.getElementById('resp').innerHTML = resp;
    }    