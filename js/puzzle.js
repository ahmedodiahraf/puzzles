

// Declaring Variables
let numberOfAttempt = 0
let firstClick = ""
let secondClick = ""

document.querySelectorAll(".btn").forEach((btn) => {
     // OnClick
     btn.addEventListener("click", function () {
          // Conditioning
          if (this.classList.contains("btn")) {
               this.classList.replace("btn", "checked")
               if (firstClick === "") {
                    firstClick = this.innerHTML
                    console.log(firstClick)
               } else if (firstClick !== "") {
                    secondClick = this.innerHTML
                    console.log(secondClick)
               } if (secondClick !== "") {
                    if(secondClick === firstClick) {
                         document.querySelectorAll(".checked").forEach((done) => {
                              done.classList.replace("checked", "done")
                         })
                         firstClick = ""
                         secondClick = ""
                    } else if (secondClick !== firstClick) {
                         firstClick = ""
                         secondClick = ""
                         numberOfAttempt += 1
                         document.querySelector(".attempts").innerHTML = numberOfAttempt
                         setTimeout(function () {
                                   document.querySelectorAll(".checked").forEach((done) => {
                                   done.classList.replace("checked", "btn")
                                   })}, 400)
                    }
               }
          }
          // Checking Failed Attempts
          if (numberOfAttempt >= parseInt(document.querySelector(".range").innerHTML)) {
               setTimeout(function () {
                    document.querySelector(".main").style.display = "none"
                    document.querySelector(".loser").style.opacity = "1"
                    document.querySelector(".loser").style.display = "flex"
               }, 400)
          }
     },this)
})









