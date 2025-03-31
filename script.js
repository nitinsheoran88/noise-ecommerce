let products = [
    {
        name: "Air clips",
        price: 2999,
        color: "White",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA10zWVQtLaT0D32jXPPgzjujqT2isxoytZQ&s"
    },
    {
        name: "ColorFit Pro6",
        price: 6499,
        color: "Black",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzks9rnGrfqzNlxqDsYJ_770Xly9dHRKbnQ&s"
    },
    {
        name: "Air wave max5 ",
        price: 6999,
        color: "White",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9YtlcVL8R5jrS1dAGIBXViTrV2L_mTiBL9DPbY2ZaTGThvuZf2OR8GQOVbN5Rntkcr4&usqp=CAU"
    },

    {
        name: "color fit pro 6 max ",
        price: 7499,
        color: "Black",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71WTpt9+7AL._AC_UL210_SR210,210_.jpg",
    },
    {
        name: "pure pods",
        price: 2999,
        color: "White",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxsKEaFSaAj38S1nFcme0ei6dNjDxkFFF_VOnqiA4Jmj5cjNS3SbTtDZz6KvKSxVlweQ&usqp=CAU"
    },
    {
        name: "tag 1 smart tracker",
        price: 1499,
        color: "Black",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxpkFZsaI79EwpFmPJMRk4cNkp_N3UljGZg&s"
    },
    

   
];

products.forEach(function (item) {
    console.log(item.imageUrl);
    
    document.querySelector(".product-list").innerHTML += `
          <div class="product">
                <div class="product-image">
                    <img src="${item.imageUrl}"/>
                </div>
              <h3>${item.name}</h3>
              <div class="price">Rs. ${item.price}</div>
              <button class="button">Buy Now</button>
           
          </div>
      `;
});
document.querySelectorAll('button').forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('clicked', item)

        document.querySelector('.popup').style.display = 'flex'

        setTimeout(() => {
            document.querySelector('.popup').style.display = 'none'
        }, 5000);

    })
})