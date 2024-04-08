const form = document.forms.namedItem('add');
const inp = document.querySelectorAll('input');
const btn = document.querySelector('.Send');
const boxOne = document.querySelector('.boxOne .boxItem');
const boxTwo = document.querySelector('.boxTwo .boxItem');
const boxthree = document.querySelector('.boxthree .boxItem');
const arr = [];
const jojobaby = {
    under25: [],
    agess: [],
    over50: []
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let user = {
        name: new FormData(form).get('name'),
        year: new FormData(form).get('age')
    };

    if (user.name === '' || user.year === '') {
        alert ('Something is going wrong'); 
        return;   
    }
    
    arr.push(user);
    reload(arr);
});

function reload(arr) {
    boxOne.innerHTML = "";
    boxTwo.innerHTML = "";
    boxthree.innerHTML = "";
    
    for (let item of arr) {
        const boxes = document.createElement('div');
        const h2 = document.createElement('h2');
        const box_age = document.createElement('div');
        const p = document.createElement('p');
        const b = document.createElement('b');

        boxes.classList.add('mainBox');
        h2.innerHTML = item.name;
        box_age.classList.add('box-age');
        p.textContent = 'age:';
        b.textContent = item.year;

        boxes.append(h2, box_age);
        box_age.append(p, b);

        if (item.year > 0 && item.year <= 25) {
            boxOne.append(boxes);
            jojobaby.under25.push(item);
        }
        if (item.year > 25 && item.year <= 50) {
            boxTwo.append(boxes);
            jojobaby.agess.push(item);
        }
        if (item.year > 50) {
            boxthree.append(boxes);
            jojobaby.over50.push(item);
        }
    }
}
