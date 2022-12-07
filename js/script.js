// console.log('JS OK');


// TRACCIA
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.


// prendo l'elemento dal DOM
const result = document.getElementById('target');


// Stampo in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    // console.log(i);

    // Se un numero è multiplo di 3 e di 5, allora stampo "FizzBuzz" al posto del numero 
    if(i % 3 === 0 && i % 5 === 0) {

        result.innerHTML += `<div class= col mb-3>
                                <div class="card fizz-buzz mb-4 d-flex align-items-center justify-content-center">
                                    <h6 class="fw-bold mb-0">Fiz zBuzz</h6>
                                </div>
                            </div>`
    // console.log('FizzBuzz')
    
    // Se è multiplo di 3, allora stampo "Fizz" al posto del numero
    } else if (i % 3 === 0) {

        result.innerHTML += `<div class= col mb-3>
                                <div class="card fizz mb-4 d-flex align-items-center justify-content-center">
                                    <h6 class="fw-bold mb-0">Fizz</h6>
                                </div>
                            </div>`
    // console.log('Fizz')
    
    // Se è multiplo di 5, allora stampo "Buzz" al posto del numero  
    } else if (i % 5 === 0) {

        result.innerHTML += `<div class= col mb-3>
                                <div class="card buzz mb-4 d-flex align-items-center justify-content-center">
                                    <h6 class="fw-bold mb-0">Buzz</h6>
                                </div>
                            </div>`
        // console.log('Buzz')
    
    // Altrimenti stampo il numero
    } else

        result.innerHTML += `<div class= col mb-3>
                                <div class="card number-result mb-4 d-flex align-items-center justify-content-center">
                                    <h6 class="fw-bold mb-0">${i}</h6>
                                </div>
                            </div>`
                                
    // console.log(i)
}

