const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: 'admin/add-product',
      formCSS: true,
      productCSS: true,
      addProductActive: true
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts(products => {
        res.render('shop', {
            prods: products, 
            path: '/', 
            pageTitle: 'Shop',
            hasProducts: products.length > 0,
            productCSS: true,
            shopActive: true
        })
    })
}