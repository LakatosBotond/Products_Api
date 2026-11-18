fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('data').innerHTML = data.map(product => 
            `
            <div class="container-fluid card shadow-sm p-3 text-center" id="product-card" style="width: 18rem;">
                <ul id="list" class="list-unstyled mb-0">
                    <p class="fw-bold fs-5">${product.name}</p>    
                    <p class="text-primary fw-semibold">Ár:${product.price}</p>
                    <p class="text-success">Raktáron: ${product.stock}</p>
                    <p class="text-warning">Értékelés: ${product.rating}</p>
                    <p class="text-muted mb-0">${product.manufacturer.name}</p>
                    <p class="text-muted">Ország: ${product.manufacturer.country}</p>
                    <p><img src="${product.image}" id="image" class="img-fluid rounded"></img></p>
                </ul>
            </div>
            `
        ).join('');
    })


    document.getElementById("product-card").addEventListener("click", function(){
        
    })