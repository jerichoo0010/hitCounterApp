// document.getElementById("count-el").innerHTML = 5

//variable

let myAge = 21


// math calculator

let num1 = 5, num2 = 4, 
    sum = num1 * num2



// reassigning and incrementing

sum = 1
sum++

// onClick

let count = 0
let docu = document.getElementById("count-el")

function increment(){

    count = count + 1
    console.log(count)
    docu.innerText = count
    
}


// string var
let u1 = "Jer"
let username = "You have three new notifications."

let temp = u1+", " + username

// console.log(temp)

// 

let name = "Jericho", greeting = "Hi, my name is ", myGreeting = greeting + name

// console.log(myGreeting)

//

let welcomeEl = document.getElementById("welcome-el")

let name1 = "Jericho, ", greeting1 = "welcome to the page!"

welcomeEl.innerText = name1 + "" + greeting1

// string concatenation

function save(){
    let total_save = document.getElementById("total-el")
    
    
    total_save.innerHTML += count + " - "
    
    count = 0
    docu.innerHTML = 0
    console.log(count)
}
