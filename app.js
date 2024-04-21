let final_input = document.querySelector('#final');
let initial_input = document.querySelector("#initial");
let submit = document.querySelector('#submit');

let energy_result = document.querySelector('#energy_result');
let eu = document.querySelector('#energy_units');  

let wavelength_result = document.querySelector("#wavelength_result");
let wu = document.querySelector("#wavelength_units");

submit.addEventListener('click',() => {
    let final = parseInt(final_input.value);
    let initial = parseInt(initial_input.value);

    eu.value = 'J';
    wu.value = 'nm';

    if(eu.value == 'J'){
        let ans = 1*1;
        ans = (-2.18)*(Math.pow((1/final),2)-Math.pow((1/initial),2));
        console.log( ans );
        energy_result.innerText = ans.toFixed(4) ;
    }

})