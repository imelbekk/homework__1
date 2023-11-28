let text = document.getElementById('text')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

btn.addEventListener('click', () =>{
    let split = text.value.split('')
    console.log(split);
    let total = 0
    let total2 = 0
    for(let i = 0; i < split.length; i++){
        if(split[i] == '(' ){
            total++
        }else if(split[i] == ')'){
            total2++
        }


        if(split[i] == ')' || split[i] == '('){
            if(total == total2){
                result.innerText = 'Qavslar soni teng'
            }else if(total > total2){
                result.innerText = "( bu qavs ko'p"
            }else if(total < total2){
                result.innerText = ") bu qavs ko'p"
            }
        }else{
            result.innerText = 'Qavslar mavjud emas'
        }
    
    }



})