const container = document.querySelector(".container");

function generateGrid(num) {
    for (let i = 0; i < (num ** 2); i++) {
        const div = document.createElement("div");
        
        div.classList.add("square");
        container.appendChild(div);
    };

    const grid = document.querySelectorAll(".square")

    grid.forEach(square => {
        square.addEventListener("mouseover", event => {        
            event.target.classList.add("hover");
        })
    });

};

generateGrid(16);




const generate = document.querySelector(".button");

generate.addEventListener("click", event => {
    let test = +prompt("number");
    
    if (test > 0 && test < 100) {
        const grid = document.querySelectorAll(".square");
    
        grid.forEach(element => {
            element.classList.remove("hover");
            element.remove();
        })
    
        generateGrid(test);
    };
});



const reset = document.querySelector(".reset");
reset.addEventListener("click", event => {
    const grid = document.querySelectorAll(".square");

    grid.forEach(element => {
        element.classList.remove("hover");
    })
});



// const grid = document.querySelectorAll(".square")

// grid.forEach(square => {
//     square.addEventListener("mouseover", event => {        
//         event.target.classList.add("hover");
//     })
// });


// 1. Add a function for the hover
// 2. Add a function for generate button
// 3. Change of the varibles