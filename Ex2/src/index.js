//#region Calculo de Pitagoras
function pitagorasH(ca,co) {
    return (Math.sqrt(Math.pow(ca,2) + Math.pow(co,2)));
}
function pitagorasCA(co,h) {
    return (Math.sqrt(Math.pow(h,2) - Math.pow(co,2)));
}
function pitagorasCO(ca, h) {
    return (Math.sqrt(Math.pow(h,2) - Math.pow(ca,2)));
}
function calculaPitagoras(h,ca,co) {
    debugger;
    if (h == 0) {
        return pitagorasH (ca,co)
    }
    else if (ca == 0 ) {
        return pitagorasCA (co,h);
        
    }
    else {
        return pitagorasCO (ca,h)
    }
}
//#endregion

//#region Regra de Tres
function calculaA(b,c,d){
    return (b*c/d);
}
function calculaB(a,c,d){
    return (a*d/c);
}
function calculaC(a,b,d){
    return (a*d/b);
}
function calculaD(a,b,c){
    return (b*c/a);

}
function calculaRegra(a,b,c,d){
    debugger;
    if(a == 0){
        return calculaA(b,c,d);
    }
    else if(b == 0){
        return calculaB(a,c,d);
    }
    else if (c == 0){
        return calculaC(a,b,d);
    }
    else{
        return calculaD(a,b,c)
    }
}
//#endregion

//#region Calculadora
function calculaNumeros(op ,n1, n2,){
    debugger;
    if(op == "+"){
        return (n1 + n2);
    }
    if(op == "-"){
        return (n1 - n2);
    }
    if(op == "*"){
        return (n1 * n2);
    }
    if(op == "/"){
        return (n1 / n2);
    } 
    if(op == "raiz"){
        return Math.sqrt(n1+n2);
    }
    if(op == "potencia" ){
        return Math.pow(n1, n2);
    }
}
//#endregion

function calculaAvancado(opcao, p1, p2, p3, p4){
    switch (opcao){
        case "pitagoras":
            return calculaPitagoras(p1,p2,p3);
            break;
        case "regra":
            return calculaRegra(p1,p2,p3,p4);
            break;
        case "calculadora":
            return calculaNumeros(p1,p2,p3);
            break;
        default:
            return "Não existe."
    }
}
console.log(calculaAvancado("pitagoras", 0, 20, 21));
console.log(calculaAvancado("regra", 100 , 15000, 20 , 0));
console.log(calculaAvancado("calculadora", "+", 26, 52 ,null));