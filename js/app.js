// defining an object literal
// an object is a set of key value pairs
// keys are name, color, isReal and values are Big Foot, Brown, 7

const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7,
    diet: 'plant based',
    woodlandFriends: [{name: 'bunny', age:4},{name:'squirrel',age:5}],
    eat(plant){ //new syntax on writing methods in objects
        console.log (`Lets eat ${plant}`)
    },
    hide (location){
        console.log(`Lets hide behind ${location}`)
    }
}

console.log(bigFoot.woodlandFriends[0].age)
console.log(bigFoot.woodlandFriends[1].name)

bigFoot.eat('tree')
bigFoot.eat('lettuce')
bigFoot.eat('kale')
bigFoot.hide('woods')
bigFoot.hide('cave')
bigFoot.hide('behind the car')

delete bigFoot.isReal //can delete a property and you can also create properties


// console.log(bigFoot, '<-------"big foot at point in time');
// console.log(bigFoot.isReal);
// console.log(bigFoot.diet);

// console.log(typeof bigFoot);

// bigFoot.color = 'strawberry blonde'

// console.log(bigFoot)
// console.log(bigFoot.color)

// bigFoot.diet = 'pescaterian';
// console.log(bigFoot)

// bigFoot.woodlandFriends[2] = 'deer'
// console.log(bigFoot)

// console.log(bigFoot.woodlandFriends[2]) //this is cool what she wrote.

// function sayHello(name){
//     return `Hello, ${name}`
// }
//     bigFoot.woodlandFriends.forEach((friend) =>{
//         console.log(sayHello(friend))
//     })
//     //    sayHello (bigFoot.woodlandFriends[0])

//     //to access values
//     bigFoot['name'][0]
