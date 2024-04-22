let final_input = document.querySelector('#final');
let initial_input = document.querySelector("#initial");

let submit = document.querySelector('#submit');

let energy_result = document.querySelector('#energy_result');
let eu = document.querySelector('#energy_units');  

let wavelength_result = document.querySelector("#wavelength_result");
let wu = document.querySelector("#wavelength_units");

let region = document.querySelector("#region");
let color = document.querySelector("#color");

let ans_e = 1 ; 
let ans_w =  1 ;
let ans_w_unit_nm ;

eu.addEventListener('click',(event) => {
    event.preventDefault();
    calAns();
})

wu.addEventListener('click' , (event) => {
    event.preventDefault();
    calAns();
})

submit.addEventListener('click',(event) => {
    event.preventDefault();
    calAns();
})
function calAns (){
    let final = parseInt(final_input.value);
    let initial = parseInt(initial_input.value);

    if(final < 0 ){final = 0; }
    if(final > 10 ){final = 10; }

    if (initial < 0) { initial = 0 ;}
    if (initial > 10) { initial = 10 ;}
    
    if (eu.value == 'J') {

        ans_e = (-2.18) * (Math.pow(final , -2 ) - Math.pow(initial , -2 )) ;
        energy_result.innerText = ans_e.toFixed(3) ;
    } else if (eu.value == 'eV') {
        ans_e = (13.6) * ((1/final)*(1/final) - (1/initial)*(1/initial)) ;
        energy_result.innerText = ans_e.toFixed(3) ;
    }  
    
    if (wu.value == 'nm') {
        ans_w_unit_nm = true ;
        ans_w = (100/1.097) * (Math.pow(final , -2 ) - Math.pow(initial , -2 ));
        wavelength_result.innerText = ans_w.toFixed(3);
    } else if (wu.value == 'm') {
        ans_w_unit_nm = false ;
        ans_w = (1/1.097) * (Math.pow(final , -2 ) - Math.pow(initial , -2 ));
        wavelength_result.innerText = ans_w.toFixed(5);
    }

/*
by using if else and variable ans_w_unit_nm = true ; we can assign remaining
*/
}



