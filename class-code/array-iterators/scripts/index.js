console.log("array iterators lesson")


const myNumbers = [10,20,30,40,50]

myNumbers.push(60)


console.log(myNumbers)


myNumbers.splice(0,2)


console.log(myNumbers)





myNumbers.forEach(function(mohammad){
    // console.log(mohammad*2)
})




// .map()
// map(): returns a new array of the SAME SIZE

const riyalPrices =  myNumbers.map(function(num){
    if(num >40)
     return num*10
})


console.log(riyalPrices)



const movieRatings = [8.8, 9.0, 8.6, 4, 7.3]


const goodMovies = movieRatings.filter(function(oneRating){
    if(oneRating > 7){
        return oneRating
    }
})

console.log(goodMovies)




const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 8.6
    },
    {
        title:"Fast And Furious",
        year: 2001,
        rating: 7.3
    }
]



const goodMoviesObjects = movies.filter(function(oneMovie){
    if(oneMovie.rating > 8){
        return oneMovie.title
    }
    else{
        return false
    }
})


console.log(goodMoviesObjects)




// exercise 1: given the following array of items in our shopping cart return only the items that ship to Bahrain:
const shoppingCart = [
    {
        name: "Laptop",
        price: 1200,
        shipsToBahrain: true
    },
    {
        name: "Smartphone",
        price: 800,
        shipsToBahrain: false
    },
    {
        name: "Headphones",
        price: 150,
        shipsToBahrain: true
    },
    {
        name: "Smartwatch",
        price: 300,
        shipsToBahrain: false
    }
];
// Bonus: now only return the elements that ship to Bahrain and cost less than 500 BHD
// console.log() your result here:



const shipToBahrain = shoppingCart.findIndex(oneItem => oneItem.price <500)


console.log(shipToBahrain)



// function decleration
function introduceSelf(){
    return "Hello I am Yusif"
}

console.log(introduceSelf())



// function expression

/* 
Advantages for Arrow functions

1. if I have 1 line of code I dont need the {}
2. if I have 1 line of code the return is implicit (I dont need it)
*/

const introduceSelf2 = name => "Hello My name is " + name



console.log(introduceSelf2("Zahraa"))


// every(): every element has to match the given condition for the return to be true

// some(): if 1 of the elements matches the condition. the returned value is true


const shoppingCartInvalid = shoppingCart.some((oneItem)=>{return oneItem.shipsToBahrain})


console.log(shoppingCartInvalid)




/* 
methods that change the original array:

splice()
push()
pop()
shift()
unshift()
sort()




Methods that DON't change the Original Array:

slice()
map()
filter()
find()
findIndex()
some()
every()
forEach()

*/





const studentNames = ["Mohammad","Ali","Hasan","Zahra","Yusif"]

studentNames.sort()


console.log(studentNames)



// sorting numbers
const myNums = [5,10,1,6,33,3,50]

myNums.sort(function(a,b){
    console.log("Iteration")
    return b-a
})

// myNums.sort((a,b)=>b-a)

console.log(myNums)