let szinek = ["Zöld", "Kék"]
let helyek = ["erdőben"]
let cselek = ["jártam"]
let dolgok = ["ibolyát"]
let cselek2 = ["láttam"]
let cselek3 = ["hervadni"]

let vers = [rndList(szinek)+rndList(helyek)+rndList(cselek)+"c"+rndList(szinek)+rndList(dolgok)+rndList(cselek2)+"c"+"El akart"+rndList(cselek3)+"c"+"Szabad-e locsolni?"]

function rndList(list) {
    let num = Math.floor(Math.random*list.length)
    return list[num]
}

let versdiv = document.getElementById("vers")
let counter = 0
setInterval(() => {
    versdiv.innerHTML += vers[counter]
    counter++
}, 5);