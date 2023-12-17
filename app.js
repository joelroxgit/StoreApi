require('dotenv').config();
const express = require('express');
const connectDb = require('./Database/connect');
const app = express();
const productRoutes = require('./Routes/Routerproducts')


// const notFoundMiddleware =  require('./middlewares/not-found');
// const errorMiddleware = require('./middlewares/error-handler')

//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/productsroute"<a>')
})


// products route
app.use('/api/v1/products',productRoutes)

// app.use(notFoundMiddleware)
// app.use(errorMiddleware)



const start = async()=>{
    try {
        //connect Db
        await connectDb();
        app.listen(PORT = process.env.PORT,()=>{
            console.log("server successfully started at:" + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

start();