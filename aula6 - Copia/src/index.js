
//EXEC1
function encontraMultiplos(quantidade){
    let m=0;
    let multiplo=0;
    let c=0;
    while(m<=quantidade){
        c++
        multiplo=Math.floor(Math.random()*100);
        if(multiplo % 7 == 0){
            m++
            console.log(multiplo+ " é multiplo de 7")
        }
        
    }
    console.log("sorteamos:  " + c + " para encontrar:" + quantidade+ "multiplos de 7")
}
encontraMultiplos(40);