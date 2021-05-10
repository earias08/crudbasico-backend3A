import Producto from '../models/producto';

const cafeteriaCtrl={};

cafeteriaCtrl.getPrueba = (req,res)=>{
    res.send('Hola desde el servidor');
};

cafeteriaCtrl.productoNuevo = async(req, res)=>{
    // console.log(req.body);
    try{
        // agregar validacion
        console.log(req.body.nombreProducto)
        // creo un objeto para guardar en la BD
        const nuevoProducto = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })
        // guardo el objeto en la BD
        await nuevoProducto.save();
        // enviar una respuesta al frontend
        res.status(201).json({
            mensaje:"Producto agregado a la BD ;)"
        })
    }catch(error){
        console.log(error);
        // enviar error al frontend
        res.status(500).json({
            mensaje:"ocurrio un error al intentar agregar un producto"
        })
    }
}


export default cafeteriaCtrl;



