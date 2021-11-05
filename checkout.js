const productPanel = document.querySelector('#product-painel');
// Remove Item --Add product to cart ---Remove product to cart
const remove = document.querySelectorAll('.remove-product');
const product = document.querySelectorAll('.product');
const plus = document.querySelectorAll('.fa-plus');
const minus =  document.querySelectorAll('.fa-minus');
//Product quantity --Product price
const quantity = document.querySelectorAll('#product-quantity');
const productPrice = document.querySelectorAll('.product-line-price');
var subTotal= document.querySelector('#cart-subtotal').children[1] ;

const tax = document.querySelector('#cart-tax').children[1]
const shipping = document.querySelector('#cart-shipping').children[1]
const cartTotal = document.querySelector('#cart-total').children[1]


console.log(shipping.innerText)
if(cartTotal.textContent==='$0.00'){

    shipping.textContent='$0.00'
    
}


//Subtotal--Tax--Shipping--Total


function subTotAdd(ind){
    var total =  parseFloat( document.querySelector('#cart-subtotal').children[1].innerText)
    const quantityElement =parseFloat(quantity[ind].innerText)
    const price = parseFloat(productPrice[ind].innerText)

    
    total = (total +(price/quantityElement)).toFixed(2)
    subTotal.innerText=total
    tax.innerText = ((total*18)/100).toFixed(2)
    cartTotal.innerText=(parseFloat(shipping.innerText)+parseFloat(tax.innerText)+parseFloat(total)).toFixed(2);
    console.log(cartTotal.innerText)
}
function subTotMin(ind){
    
    var total =  parseFloat( document.querySelector('#cart-subtotal').children[1].innerText)
    const quantityElement =parseFloat(quantity[ind].innerText)
    const price = parseFloat(productPrice[ind].innerText)
    total = (total -(price/quantityElement)).toFixed(2)
    tax.innerText = ((total*18)/100).toFixed(2)
    subTotal.innerText=total
  
    cartTotal.innerText=(parseFloat(subTotal.innerText)+(parseFloat(tax.innerText))+parseFloat(shipping.innerText)).toFixed(2)
    console.log(price/quantityElement)
    
    console.log(parseFloat(shipping))
        
    
}

function removeSubTotal(ind){
    var total =  parseFloat( document.querySelector('#cart-subtotal').children[1].innerText)
    const price = parseFloat(productPrice[ind].innerText)
  
    total=(total-price).toFixed(2)
    
    tax.innerText = ((total*18)/100).toFixed(2)
    subTotal.innerText=total
    cartTotal.innerText=(parseFloat(subTotal.innerText)+ (parseFloat(shipping.innerText))+ (parseFloat(tax.innerText))).toFixed(2)
    if(tax.textContent==='$0.00'){

        shipping.append(tax)
        
    }
    console.log(subTotal.textContent)
}

















//########################## Add product to cart ####################
function adding(ind){
    let productQuantity = parseFloat(quantity[ind].innerText);
    
    let quantityPrice = parseFloat(productPrice[ind].innerText);
    
    productPrice[ind].innerText=parseFloat(quantityPrice+(parseFloat(productPrice[ind].innerText)/productQuantity)).toFixed(2)
    quantityPrice.toFixed(2)
    quantity[ind].innerText=productQuantity+1
    
}
 const plusNode = Array.from(plus)



plusNode.forEach(button =>{
    button.addEventListener('click',()=>{
        let ind = plusNode.indexOf(button)
       
        adding(ind)
        subTotAdd(ind)
    })
})

//######## Remove product from cart #####################
function removeProduct(ind){
    if(quantity[ind].innerText==='1') return

    let productQuantity = parseFloat(quantity[ind].innerText);
    
    let quantityPrice = parseFloat(productPrice[ind].innerText);
    
    productPrice[ind].innerText=parseFloat(quantityPrice-(parseFloat(productPrice[ind].innerText)/productQuantity)).toFixed(2)
    quantityPrice.toFixed(2)
    quantity[ind].innerText=productQuantity-1
    
}


const minusArr = Array.from(minus);

minusArr.forEach(button =>{
    button.addEventListener('click',()=>{
        let ind = minusArr.indexOf(button)
        if(quantity[ind].innerText==='1') return
        removeProduct(ind)
        subTotMin(ind)

    })
})
//##### Delete the product from the page #################
const removeArr = Array.from(remove)

function removeElement(ind){
    productPanel.removeChild(product[ind])
    const newArr = Array.from(productPanel.children)
    if(newArr.length ===4){

        shipping.textContent='0.00'
    }
   
};

removeArr.forEach(button =>{
   button.addEventListener('click',()=>{
       let ind = removeArr.indexOf(button)
      removeElement(ind)
        removeSubTotal(ind)
        
   })
})



