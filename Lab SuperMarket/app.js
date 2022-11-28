//VARIÁVEIS




const totalPrice = document.getElementById("totalPrice");
let priceController = 0;
const btn = document.getElementById('btn');
let itemInput = document.getElementById('div-input-form-input');
let textModal = document.getElementById('modal-titulo')
const list = document.getElementById("div-list-ul");
let listItems = []

//MODAL

function switchModal(){
  const modal = document.querySelector('.modal')
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }  
  
}

  window.onclick = function(event) {
    const modal = document.querySelector('.modal')
  if (event.target == modal) {
     switchModal()
  }
}

//criar botão para excluir item

function createCloseButton(li){
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => span.parentElement.style.display = "none";
}

//criar botão para comprar
function createBuyButton(li){
  let checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox")
  checkbox.name = li.getId
  let productName = checkbox.name.toString();

  checkbox.className = li.getId;
  li.appendChild(checkbox);

  checkbox.addEventListener("click", function(event) {

  
   let price = prompt("Insira Valor do produto.") 
  
   let checkNumber = isFinite(price);
   
   while(!checkNumber) {

    price = prompt("Insira valor válido.")
    checkNumber = isFinite(price)
   
   }

   while(price < 0) {
    price = prompt("Insira valor válido.")
   }
  if(price > 0) {


    priceController += Number(price)

  
    updatePrice()
  }
     

  })

}

//botão para adicionar item
btn.addEventListener("click", function() {
  let item =  itemInput.value
  if(item.length === 0){
   textModal.innerHTML="Insira um item."
  
  
 
  
  } else if(item.length <  8  || item.length > 64) {
  textModal.innerHTML= "Item Inválido"
 
    
  } else {

  textModal.innerHTML= "Item Adicionado"
   
   let li = document.createElement("li");
   let itemName = document.createTextNode(item)


   
   let produto =  {
    productName: item,
    productPrice: 0,
    alreadyHasPrice: false
   }

   listItems.push(produto)
   console.log(listItems)

 
   li.appendChild(itemName);
   list.appendChild(li);
   createCloseButton(li);
   createBuyButton(li);
   li.setAttribute.id = item;

  }
  switchModal()
  const labelText = document.getElementById('div-input-form-input')
  labelText.value = ''


}

)

function updatePrice(){
  
  totalPrice.innerHTML = "R$ " + priceController.toString();

}






















