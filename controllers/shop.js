const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getIndex = (req, res, next) => {
    Product.findAll().then(products => {
        res.render('shop/index', {
            prods: products, 
            path: '/', 
            pageTitle: 'Shop',
        })
    }).catch(err => console.log(err))
}

exports.getProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.render('shop/product-list', {
            prods: products, 
            path: '/products', 
            pageTitle: 'All Products',
        })
    }).catch(err => console.log(err))
}

exports.getProduct = (req, res, next) => {
    const prodID = req.params.productId
    Product.findByPk(prodID).then(product => {
        res.render('shop/product-details', {
            product: product,
            path: '/products',
            pageTitle: product.title
        })
    }).catch(err =>{
        console.log(err)
    })
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAllProducts(products => {
            const cartProducts = []
            for (const product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id)
                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                path: '/cart', 
                pageTitle: 'Cart',
                products:cartProducts
            })
        }) 
    })
}

exports.postCart = (req, res, next) => {
    const prodID = req.body.productId
    Product.findById(prodID, product => {
        Cart.addProduct(prodID, product.price)
    })
    res.redirect('/cart')
}

exports.postDeleteItem = (req, res, next) => {
    const prodID = req.body.productId
    Product.findById(prodID, product => {
        Cart.deleteProduct(prodID, product.price)
        res.redirect('/cart')
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout', 
        pageTitle: 'Checkout',
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders', 
        pageTitle: 'Orders',
    })
}