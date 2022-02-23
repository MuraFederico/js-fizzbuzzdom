let container = document.querySelector('.container');


for (let i = 0; i <= 100; i++) {
    let box = document.createElement('div');
    container.append(box);
    box.classList.add('box');
    // console.log(box)
    if (i % 15 == 0){
        box.classList.add('fizz-buzz');
        box.append('fizzbuzz');
    }
    else if( i % 3 == 0){
        box.classList.add('fizz');
        box.append('fizz');
    }
    else if(i % 5 == 0){
        box.classList.add('buzz');
        box.append('buzz');
    }
    else {
        box.classList.add('number');
        box.append(i);

    }
    
};
