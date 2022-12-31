//  (() => console.log('First'))();
// const timed = () => console.log('Timed') ;
// setTimeout(() => console.log('Timed2'), 1000);
// (function second(){console.log('second')})();

const btn = document.querySelector('#btn');
btn.addEventListener('click', manos);

function manos() {
    console.log('clicked');
    willGetYouaDog = new Promise((resolve, reject) => {
        setTimeout(() => {
            let numb = Math.random();
            console.log(numb);
            if (numb > 0.5) {
                resolve({status: 200});
            } else {
                reject({status: 404});
            }
        }, 2000);
    })
    .then((res) => {
        console.log(res);
        console.log('Got a dog')
    })
    .catch((res) => {
        console.log(res);
        console.log('No dog')}
    );
};