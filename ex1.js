//przypisanie elementu strony do stałej czyli div z id="wynik" do stałej wynik  
const wynik=document.querySelector("#wynik");

let a=75;//tworzenie zmiennych 
let b=50;
//"wstrzyknięcie" - innerHTML() - kodu HTML do div-a wynik  
//wynik.innerHTML="wynik:"+(a+b)
wynik.innerHTML='<h1>'+a+'+'+b+'='+(a+b)
