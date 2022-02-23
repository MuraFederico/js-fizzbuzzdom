let container = document.querySelector('.container');


for (let i = 0; i <= 100; i++) {
    let box = document.createElement('div');
    container.append(box)
    box.classList.add('box')
    // console.log(box)
    if (i % 15 == 0){
        box.append('fizzbuzz');
    }
    else if( i % 3 == 0){
        box.append('fizz');
    }
    else if(i % 5 == 0){
        box.append('buzz');
    }
    else {
        box.append(i);

    }
    
};
