//Desafio final parte 1
const express = require('express')                              //Importamos el modulo express

const app = express();                                          //Iniciamos nuestro servidor con express

//Configuración del puerto
app.listen(8080, ()=>{
	console.log('Escuchando en el puerto 8080');
})

//URL encoder
app.use(express.urlencoded({extended: true}));
app.use(express.json());											//Si no agregamos este middleware, no recibiremos el req.body de forma correcta

//Importamos la configuracion de nuestras rutas
const productRouter = require('./routes/products.router.js');  	//en userRouter viene toda la configuración de nuestras rutas de users.
const cartRouter = require('./routes/carts.router.js');        

app.use('/api/products', productRouter)	                        //api es por convención
app.use('/api/carts', cartRouter)
