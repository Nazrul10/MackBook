//memory cost function
function memoryCall(total){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = total;
    addTotal()
};

// storage cost function
function storageCall(total){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = total;
    addTotal()
};

//delivery cost function
function deliveryCall(total){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = total;
    addTotal()
};
//total price count
const totalCost = document.getElementById('total-cost');
const totalText = parseInt(totalCost.innerText);
const avgTotal = document.getElementById('avg-total');
const avgTotalText = parseInt('avgTotal.innerText')
function addTotal(){
const storageCost = document.getElementById('storage-cost');
const storagePriceCost = parseInt(storageCost.innerText);
const deliveryCose = document.getElementById('delivery-cost');
const deliveryPriceCost = parseInt(deliveryCose.innerText);
const memoryCost = document.getElementById('memory-cost');
const memoryPriceCost = parseInt(memoryCost.innerText);
const totalSum = storagePriceCost + deliveryPriceCost + memoryPriceCost;
totalCost.innerText = totalText + totalSum;
avgTotal.innerText = totalText + totalSum;
};
//Add Coupon Code
document.getElementById('cpn-apply').addEventListener('click', function(event){
    const cpnApply = document.getElementById('cpn-input');
    const cpnApplyValue = cpnApply.value;
    if(cpnApplyValue == 'stevekaku'){
        const DiscoutTotal = (totalCost.innerText / 100) * 20;
        avgTotal.innerText = totalCost.innerText - DiscoutTotal;  
    }
    cpnApply.value = '';
}) ;
//function call
document.getElementById('1tb-ssd').addEventListener('click',function(){
    storageCall(180)
});
document.getElementById('512bg-ssd').addEventListener('click',function(){
    storageCall(100)  
});
document.getElementById('256gb-ssd').addEventListener('click',function(){
    storageCall(0) 
});
document.getElementById('16gb-memory').addEventListener('click',function(){
    memoryCall(180)
});
document.getElementById('8gb-memory').addEventListener('click',function(){
    memoryCall(0)   
});
document.getElementById('delivery-paid').addEventListener('click',function(){
    deliveryCall(20)  
});
document.getElementById('delivery-Free').addEventListener('click',function(){
    deliveryCall(0)
});
