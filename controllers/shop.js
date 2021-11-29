const Product = require('../models/product')

exports.getIndex = (req, res, next) => {
    Product.fetchAllProducts(products => {
        res.render('shop/index', {
            prods: products, 
            path: '/', 
            pageTitle: 'Shop',
        })
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts(products => {
        res.render('shop/product-list', {
            prods: products, 
            path: '/products', 
            pageTitle: 'All Products',
        })
    })
}

exports.getProduct = (req, res, next) => {
    const prodID = req.params.productId
    Product.findById(prodID, product => {
        res.render('shop/product-details', {
            product: product,
            path: '/products',
            pageTitle: product.title
        })
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart', 
        pageTitle: 'Cart',
    })
}

exports.postCart = (req, res, next) => {
    const prodID = req.body.productId
    console.log(prodID)
    res.redirect('/cart')
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