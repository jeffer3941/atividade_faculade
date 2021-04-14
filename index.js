const dateLimit = {day:18, month:03, year:2021};
var dataUsers = [];
const compareDate = ( dataReserved = String)=>{
    let datefilter = dataReserved.split('/');

    if(datefilter.length>0){
        if(Number.parseInt(datefilter[2]) <= dateLimit.year){
            if(Number.parseInt(datefilter[1]) <= dateLimit.month){
               return Number.parseInt(datefilter[0]) < dateLimit.day;
            }
        }
    }
    return false;
}
do{
    let yourName = prompt('Seu Nome?');
    let yourContact = prompt('Seu contato ?');
   
    let totalChildren = prompt('Quantas crianças ?');
    let totalAdults = prompt('Quantas adultos ?');

    let CorrentDate = prompt('Data da reserva?(ex. 6/12/2021)');
    let reserved = false;


    let totalPeopleCorrent = Number.parseInt(totalChildren)+Number.parseInt(totalAdults);
    if(compareDate(CorrentDate)){
        reserved = true;
        alert('Reserva Realizada com Sucesso!');
        alert(`---- INFORMAÇÃO ----
               Nome: ${yourName} \n
               Contato: ${yourContact} \n
               Total de crianças: ${totalChildren} \n 
               Adultos: ${totalAdults} \n 
               Total de Pessoas: ${totalPeopleCorrent}`);
    }else{
        alert('Data não disponível!!');
    }
   
    dataUsers.push({CorrentDate,yourName,yourContact,totalChildren,totalAdults, reserved, totalPeopleCorrent});
}while (confirm('Deseja fazer sua reserva?!'));