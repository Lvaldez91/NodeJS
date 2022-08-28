console.log('Start Program');

setTimeout(() => {
    console.log('First TimeOut');
}, 3000);

setTimeout(() => {
    console.log('Second TimeOut');
}, 0);

setTimeout(() => {
    console.log('Thrid TimeOut');
}, 0);
console.log('End Program');