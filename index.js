const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1EL = document.getElementById("password1-el")
let password2EL = document.getElementById("password2-el")


function gnrt_rdm_password() {
    let password = ''
    password1EL.value = ''
    password2EL.value = ''

    for(let i = 0; i < 15; i++) {
    let rdm_char = Math.floor(Math.random()*characters.length)
    password = characters[rdm_char]
    password1EL.value += password
    }

    for(let i = 0; i < 15; i++) {
        let rdm_char = Math.floor(Math.random()*characters.length)
        password = characters[rdm_char]
        password2EL.value += password
        }
        
    
}




