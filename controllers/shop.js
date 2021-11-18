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

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart', 
        pageTitle: 'Cart',
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout', 
        pageTitle: 'Checkout',
    })
}