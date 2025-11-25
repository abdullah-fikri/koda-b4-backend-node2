const express = require('express')

const app = express()

app.use(express.json())

const dataAuth = []
let id = 1

//register
app.post("/auth/register", (req, res)=>{
    const {fullName, email, password} = req.body
    const newUser = {
        id: id++,
        fullName: fullName,
        email: email,
        password: password
    }
    dataAuth.push(newUser)
    res.status(200).json({
        success: true,
        message: "register success"
    })
 
    console.log(dataAuth)
})

//login
app.post("/auth/login", (req, res) => {
    const { email, password } = req.body;
    const found = dataAuth.find(el => el.email === email && el.password === password);
  
    if (!found) {
      return res.status(400).json({
        success: false,
        message: "wrong email or password"
      });
    }
  
    return res.status(200).json({
      success: true,
      message: "login success"
    });
  });
  

//products
let idProducts = 1
const products = [
    {
        id: idProducts++,
        name: "nasgor",
        price: 20000
    }, 
    {
        id: idProducts++,
        name: "mie",
        price: 1
    }
]

//get all products
app.get("/products", (req,res)=>{
    res.status(200).json({
        success: true,
        message: "list all products",
        results: products
    })
})


//get products by id
function getProductById(id){
    return products.filter(it => it.id === id)
}
app.get("/products/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const results = getProductById(id)
    if (!results){
        res.status(400).json({
            success: false,
            message: "product not found",
        })
        return
    }
    res.status(200).json({
        success: true,
        message: "product found",
        results: results
    })
})


//create products
app.post("/products", (req,res)=>{
    const {name, price}= req.body
    const newProduct = {
        id: idProducts++,
        name: name,
        price: price
    }
    products.push(newProduct)
    res.status(200).json({
        success: true,
        message: "create products success",
        results: newProduct
    })
})

// edit products
function editProduct(id, name, price) {
    const index = products.findIndex(item => item.id === id);
    if (index === -1) return null;
  
    products[index].name = name;
    products[index].price = price;
  
    return products[index];
  }
  

app.patch("/products/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const {name, price} = req.body
    const products = editProduct(id, name, price)
    if (!products){
        res.status(400).json({
            success: false,
            message: "products update error",
        })
        return
    }
    res.status(200).json({
        success: true,
        message: "product updated succesfully",
        results: products
    })
})

// delete products
function deleteProduct(id) {
    const index = products.findIndex(it => it.id === id);
    if (index === -1) return null;

    products.splice(index, 1); 
    return true;
  }
  

app.delete("/products/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const products = deleteProduct(id)
    if(!products){
        res.status(400).json({
            success: false,
            message: "products not found"
        })
        return
    }
    res.status(200).json({
        success: true,
        message: "product deleted",
    })
})

app.listen(9000, ()=>{
    console.log("app running on http://localhost:9000")
})
