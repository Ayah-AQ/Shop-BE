const  express= require("express")
const cors = require('cors');
const path = require("path");
const passport =require("passport")
const { localStrategy, jwtStrategy} = require("./middleware/passport");

//routes
const productRouter = require ("./routes/products")
const userRoutes = require("./routes/users");
const shopRouter = require("./routes/shops");
const orderRoutes = require("./routes/order");


// const db = require("./db/models")
const app = express();
app.use(cors())
const PORT = 8000
app.use(passport.initialize())
passport.use(localStrategy);
passport.use(jwtStrategy);
//methode
app.use(express.json());

app.use(userRoutes);
app.use(orderRoutes);
app.use("/products", productRouter)
app.use("/shops", shopRouter);
app.use("/media", express.static(path.join(__dirname, "media")));
// Not found middleware
app.use((req, res, next) => {
    next({
        status: 404,
        message: "Path not found"
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message || "Internal Server Error"});
});

//migration
app.get("/products", async(req,res,next)=>{
    const products= await product.findAll()
    res.json(products)
})
app.post("/products",async(req,res,next)=>{
    const products= await product.create(req.body)
    res.json(products)
})
// db.sequelize.sync()
// db.sequelize.sync({alter: true});
// db.sequelize.sync({force: true});

app.listen(8000,()=> 
console.log(`The app-location runs on localhost:${PORT}`)
);

