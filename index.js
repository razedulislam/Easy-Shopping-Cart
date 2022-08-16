var removebtn= document.getElementsByClassName('btn-danger');
var len= removebtn.length;
for( i= 0; i < len ; i++ ){
    removebtn[i].addEventListener('click' , removebtns )
}
function removebtns(event){
    var e2= event.target;
    var parents= e2.parentElement.parentElement.remove()
   
}

var addToCart= document.getElementsByClassName('btn-primary');
var len=addToCart.length;
for(i=0; i<len ; i++){
     addToCart[i].addEventListener('click' , addToCarts)
}
function addToCarts(event){
    var addToCart = event.target;
    var addtocartE1 =addToCart.parentElement
    //console.log(addtocartE1);
    var imgname = addtocartE1.children[0].src;
    var titlename = addtocartE1.children[1].innerText;
    var price = addtocartE1.children[2].innerText;
    addToCartUpdate(imgname, titlename, price)

}

var tbody = document.getElementsByTagName('tbody')[0]

function addToCartUpdate(imgname, titlename, price){
var createElement = document.createElement('tr');

var titleNames = document.getElementsByClassName('item-name');
for( i=0 ; i< titleNames.length ; i++){
if(titleNames[i].innerText == titlename ){
alert('Already added');
return
}
}

createElement.innerHTML = `<tr>
<td> <img src="${imgname}" class="item-img" alt=""> </td>
<td> <h4 class="item-name">${titlename}</h4></td>
<td><h4 class="itrm-price">${price}</h4></td>
<td><input type="number" class="item-qty" value="0"></td>
<td> <h4 class="sub-total">AED 0</h4></td>
<td> <button class="btn btn-danger">Remove</button> </td> 
</tr>`

tbody.append(createElement);

for( i=0; i<qtyupdate.length; i++){
    qtyupdate[i].addEventListener('click' , qtyupdates)
    }
}


var qtyupdate = document.getElementsByClassName('item-qty');

function qtyupdates(event){
    var updateE1 = event.target;
    var parentE1 = updateE1.parentElement.parentElement
   // console.log(parentE1)
   var itemPrice = parentE1.getElementsByClassName('itrm-price')[0];
   var itemprices = itemPrice.innerText.replace('AED' ,' ');
   var subtotal = parentE1.getElementsByClassName('sub-total')[0];
   subtotal.innerHTML = updateE1.value * itemprices;

   if(isNaN(updateE1.value) || updateE1.value <= 0){
    updateE1.value = 1;
   }
   grandTotal()
}

function grandTotal(){
    var total = 0;
    var grands = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total');
    for( i=0 ; i < updates.length ; i++){
        var updatesAmout = parseInt(updates[i].innerText.replace('AED' ,  ''));
        total +=updatesAmout;
    }
    grands.innerHTML = 'AED' + '  = ' + total;
}