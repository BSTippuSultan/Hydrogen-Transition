let final_input = document.querySelector('#final');
let initial_input = document.querySelector("#initial");

let submit = document.querySelector('#submit');

let energy_result = document.querySelector('#energy_result');
let eu = document.querySelector('#energy_units');  

let wavelength_result = document.querySelector("#wavelength_result");
let wu = document.querySelector("#wavelength_units");

let region = document.querySelector("#region");

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
});

function calRegion (f,i){

    let lambda = 10*1 ;
    lambda= Math.abs( (100/1.097) / (Math.pow(f , -2 ) - Math.pow(i , -2 )) ) ;
     if (lambda >= 1000000 ) {
        region.innerText = 'Radio Waves' ;
    } else if (lambda >= 25000 ){
        region.innerText = 'Microwave' ;
    } else if (lambda >= 2500 ){
        region.innerText = 'Infrared' ;
    } else if (lambda >= 800 ){
        region.innerText = 'Near Infrared';
    } else if (lambda >= 400) {
        region.innerText = 'Visible Light';
      // region.style.backgroundColor = '';
    } else if (lambda >= 1 ){
        region.innerText = 'Ultraviolet';
    } else if (lambda >= 0.001 ){
        region.innerText = 'X-Rays';
    } else {
        region.innerText = 'Unknown' ;
    }
}
function calAns (){    
    
let final = parseInt(final_input.value);
let initial = parseInt(initial_input.value);
let errortag = document.querySelector('.error');
/* another function */ 
calRegion(final,initial);

errortag.innerText = '';
errortag.style.backgroundColor = 'inherit';

energy_result.innerText = '' ;
wavelength_result.innerText = '';

if(final < 1 || initial < 1 || !(Number.isInteger(final)) || !(Number.isInteger(initial)) || final == initial){
    errortag.innerText = 'Invalid Values Entered';
    errortag.style.backgroundColor = 'red';
    region.innerText = '' ;
    setTimeout(() => {
        errortag.style.backgroundColor = 'rgb(210, 128, 145)';
    }, 300)
    
    return;
}

    if (eu.value == 'J') {

        ans_e = ( (2.18) * (Math.pow(final , -2 ) - Math.pow(initial , -2 )) )  ;
        energy_result.innerText = ans_e.toFixed(3) ;
    } else if (eu.value == 'eV') {
        ans_e = ( (2.18) * (Math.pow(final , -2 ) - Math.pow(initial , -2 )) * (6.2415) ); 
        energy_result.innerText = ans_e.toFixed(3) ;
    }  
    
    if (wu.value == 'nm') {
        ans_w_unit_nm = true ;
        ans_w = Math.abs( (100/1.097) / (Math.pow(final , -2 ) - Math.pow(initial , -2 )) );
        wavelength_result.innerText = ans_w.toFixed(3);
    } else if (wu.value == 'm') {
        ans_w_unit_nm = false ;
        ans_w = Math.abs((1/1.097) / (Math.pow(final , -2 ) - Math.pow(initial , -2 )));
        wavelength_result.innerText = ans_w.toFixed(5);
    }


/*
by using if else and variable ans_w_unit_nm = true ; we can assign remaining
*/
}
