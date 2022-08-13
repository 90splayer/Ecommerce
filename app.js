let orders = []
let list = {}
let number = 0

const shoe = {
    name:"Fall Limited Edition Sneakers",
    price:"$125.00",
    image:"images/image-product-1.jpg"
  }


  function changeImage(clicked_id){
    if(clicked_id == 'img1'){
        document.getElementById('img2').classList.remove('clickImage')
        document.getElementById('img3').classList.remove('clickImage')
        document.getElementById('img4').classList.remove('clickImage')
        document.getElementById('mainImage').src = "images/image-product-1.jpg"
        document.getElementById('img1').classList.add('clickImage')
    } else if(clicked_id == 'img2'){
        document.getElementById('img1').classList.remove('clickImage')
        document.getElementById('img3').classList.remove('clickImage')
        document.getElementById('img4').classList.remove('clickImage')
        document.getElementById('mainImage').src = "images/image-product-2.jpg"
        document.getElementById('img2').classList.add('clickImage')
       
    }else if(clicked_id == 'img3'){
        document.getElementById('img2').classList.remove('clickImage')
        document.getElementById('img1').classList.remove('clickImage')
        document.getElementById('img4').classList.remove('clickImage')
        document.getElementById('mainImage').src = "images/image-product-3.jpg"
        document.getElementById('img3').classList.add('clickImage')
    }else if(clicked_id == 'img4'){
        document.getElementById('img2').classList.remove('clickImage')
        document.getElementById('img3').classList.remove('clickImage')
        document.getElementById('img1').classList.remove('clickImage')
        document.getElementById('mainImage').src = "images/image-product-4.jpg"
        document.getElementById('img4').classList.add('clickImage')
    }else{
    }
  }
function showCart(){
    document.getElementById('cart').classList.toggle('showCart')
    if (number>0){
        document.getElementById('emptyCart').classList.add('cartFull')
        document.getElementById('emptyCart').classList.remove('emptyCart')
        document.getElementById('buttn').classList.add('showCartItem')
    }
}
function addToCart(){
    imgSource = document.getElementById("mainImage").src
    document.getElementById("carImage").src = imgSource
    newName = document.getElementById('itemName').innerHTML
    singlePrice = document.getElementById('price').innerHTML
    totalPrice = singlePrice * number
    document.getElementById('finalPrice').innerHTML = totalPrice
    document.getElementById('cartPrice').innerHTML = singlePrice + ' x ' + number

    

    if (number>0){
        document.getElementById('checkNum').innerHTML = number
        document.getElementById("checkNum").classList.add("alert");
        document.getElementById('carItem').classList.add('showCartItem');
        document.getElementById('emptyCart').classList.add('cartFull')
        document.getElementById('emptyCart').classList.remove('emptyCart')
        document.getElementById('buttn').classList.add('showCartItem')
    }
   
}

function deleteItem(){
    document.getElementById('carItem').classList.remove('showCartItem');
    document.getElementById('buttn').classList.remove('showCartItem')
    document.getElementById('emptyCart').classList.remove('cartFull')
    document.getElementById('emptyCart').classList.add('emptyCart')
}

function showMenu(){
    document.getElementById('nav').classList.add('showMenu')
    document.getElementById('close').classList.add('close')
}

function closeMenu(){
    document.getElementById('close').classList.remove('close')
    document.getElementById('nav').classList.remove('showMenu')
}

function addOne(){
    number = number + 1
    document.getElementById("number").innerHTML = number
}

function subOne(){
    if (number == 0){
    document.getElementById("number").innerHTML = "0"
    } else{
        number = number - 1
        document.getElementById("number").innerHTML = number
    }
    
}

