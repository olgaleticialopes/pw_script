
function encontraMultiplos(){
    let m=0;
    let multiplo=0;
    while(m<1){
        multiplo=Math.floor(Math.random()*100);
        if(multiplo % 7 == 0){
            m++
            console.log(multiplo+ " é multiplo")
        }
        else{
            console.log(multiplo+ " Não é multiplo.")
        }
    }
}
encontraMultiplos();

