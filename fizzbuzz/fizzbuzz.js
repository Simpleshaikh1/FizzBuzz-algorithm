for (let i = 1; i < 101;) 
console.log(
    (i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i
    )

