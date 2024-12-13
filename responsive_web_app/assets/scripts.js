// إضافة طلب إلى السلة
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to the cart.`);
}

// وظيفة الرجوع إلى الصفحة الرئيسية
function goBack() {
    window.location.href = "index.html";
}
