const products = []

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
    products.push({title: req.body.title})
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products, 
      path: '/', 
      pageTitle: 'Shop',
      hasProducts: products.length > 0,
      productCSS: true,
      shopActive: true
    })
}