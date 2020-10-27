function descobrirTriando(lado1,lado2,lado3){
    if(lado1==lado2 && lado1==lado3){
        console.log('Essse é um triango Equilátero')
    }else if(lado1 != lado2 && lado1!=lado3){
        console.log('Esse triangulo é Escaleno')
    }else{console.log('Esse trinago é Isóceles')}
}

descobrirTriando(1,2,3)
descobrirTriando(3,4,3)
descobrirTriando(7,7,7)