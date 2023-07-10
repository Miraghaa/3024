let card_btns = document.querySelectorAll('.credit-card .card-buttons button')

for( let btn of card_btns){
  btn.onclick = () => {
    let actv = document.querySelector('.active')
    actv.classList.remove('active')
    btn.classList.add('active')


    let id = btn.id
    let div = document.querySelectorAll('.credit-info .credit-info1')

         for(let dv of div){
           
            if(dv.id===id){
                dv.classList.remove('d-none')
            }else{
                dv.classList.add('d-none')

            }
         }
  }
}