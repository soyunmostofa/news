// variable declear
const extraMemory = document.getElementById('extra-Memory-Cost')
const extraStorage = document.getElementById('extra-storage')
const extraDeliveryCharge = document.getElementById('delivery-charge-20')
const total = document.getElementById("total-Price")
const finalTotal = document.getElementById("final-Total")
const promoCode = document.getElementById("apply-promo")

// Changing innertext 
document.getElementById('memory-8GB').addEventListener('click', function () {
    extraMemory.innerText = '0'
    totalPrice(1);
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    extraMemory.innerText = '180'
    totalPrice(1);
})
document.getElementById('SSD-256GB').addEventListener('click', function () {
    extraStorage.innerText = '0'
    totalPrice(1);
})
document.getElementById('SSD-516GB').addEventListener('click', function () {
    extraStorage.innerText = '100'
    totalPrice(1);
})
document.getElementById('SSD-1TB').addEventListener('click', function () {
    extraStorage.innerText = '180'
    totalPrice(1);
})

document.getElementById('free-shipping').addEventListener('click', function () {
    extraDeliveryCharge.innerText = '0'
    totalPrice(1);
})
document.getElementById('delivery-charge').addEventListener('click', function () {
    extraDeliveryCharge.innerText = '20'
    totalPrice(1);
})

function totalPrice(code) {
    const finalMemory = Number(extraMemory.innerText);
    const finalStorage = Number(extraStorage.innerText);
    const finalShippingCharge = Number(extraDeliveryCharge.innerText);

    const subTotal = finalMemory + finalStorage + finalShippingCharge + 1299
    total.innerText = subTotal
    finalTotal.innerText = subTotal * code
    return subTotal

}


// Promo code 

function applypromo() {

    const promoKaku = document.getElementById("promo-kaku").value;

    if (promoKaku == 'stevekaku') {
        totalPrice(0.8)

    }
    else {

        console.log("faltu alap")
    }

}

