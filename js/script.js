let pingPong = document.querySelector(".pingPong")
pingPong.addEventListener('click', ping)

let showGift = document.querySelector(".showGifts")



function ping() {
    let babySurname = "Tomere";
    let answer =  prompt("what is the name of your Guy?");
    if(answer == babySurname){
        alert("Congratulations! You have Passed this stage");
        document.querySelector(".message").innerText = "Welcome my Love, It's Time for gifting."
        document.querySelector(".newMessage").innerText = "Click on the button below to view Your Gifts."
        showGift.classList.toggle('hidden')
        pingPong.classList.add('hidden')       
        
    }else{
        alert("You are cheating on me? BYE")
        }
    }

showGift.addEventListener('click', show)
let iLY = document.querySelector(".loveM")
let showG = document.querySelector("#showGs")

function show(){
    showGift.classList.add('hidden')
    iLY.classList.toggle('hidden')
    showG.classList.toggle('hidden')
    document.querySelector(".message").innerText = "Hoooraaay! my Love, It's Time for gifting."
    document.querySelector(".newMessage").innerText = "Go claim your gift"

}