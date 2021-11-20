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
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(title, imageUrl,price, description)
    product.save()
    res.redirect('/');
}