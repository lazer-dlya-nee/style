const products = [

{
name:"Белый",
folder:"white",
images:11,
link:"https://www.ozon.ru/seller/marinas-hm/"
},

{
name:"Бежевый",
folder:"beige",
images:6,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-bezhevaya-3575044718/"
},

{
name:"Льняной",
folder:"linen",
images:4,
link:"https://www.ozon.ru/seller/marinas-hm/"
},

{
name:"Жёлтый",
folder:"yellow",
images:7,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfonа-18h13-sm-zheltaya-3585048294/"
},

{
name:"Розовый",
folder:"pink",
images:7,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-rozovaya-3577212912/"
},

{
name:"Черничный",
folder:"berry",
images:7,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-brusnichnaya-3585062226/"
},

{
name:"Серый-деним",
folder:"gray-denim",
images:6,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-temno-seraya-3577229192/"
},

{
name:"Сине-серый (джинс)",
folder:"blue-gray",
images:6,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-sine-seraya-3577009865/"
},

{
name:"Болотный",
folder:"olive",
images:6,
link:"https://www.ozon.ru/product/vyazanaya-sumka-chehol-dlya-smartfona-18h13-sm-olivkovyy-3585014918/"
}

];

const catalog = document.getElementById("catalog");

products.forEach(product => {

let imagesHTML = "";

for(let i=1;i<=product.images;i++){

imagesHTML += `<img src="assets/${product.folder}/${product.folder}-${i}.png" ${i===1?'class="active"':""}>`;

}

catalog.innerHTML += `

<div class="product-card">

<div class="product-gallery">
${imagesHTML}
</div>

<div class="product-info">

<h3>${product.name}</h3>

<p>
Вязаная сумка-чехол для смартфона ручной работы.
Телефон всегда рядом, а руки остаются свободными.
</p>

<a class="buy-btn" href="${product.link}" target="_blank">
Смотреть на Ozon
</a>

</div>

</div>

`;

});