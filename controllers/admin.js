const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: 'admin/add-product',
      formCSS: true,
      productCSS: true,
      addProductActive: true
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts(products => {
        res.render('admin/products', {
            prods: products, 
            path: '/admin/products', 
            pageTitle: 'Admin Products',
        })
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
}