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

cafeteriaCtrl.listaProductos = async(req,res)=>{
    try{
        // obtener un arreglo con los productos
        const arregloProductos = await Producto.find();
        // responder al frontend
        res.status(200).json(arregloProductos);

    }catch(error){
        console.log(error);
        // enviar error al frontend
        res.status(500).json({
            mensaje:"ocurrio un error al intentar listar los productos"
        })
    }
}

cafeteriaCtrl.eliminarProducto = async(req, res)=>{
    try{
        console.log(req.params.id);
        await Producto.findByIdAndDelete(req.params.id);
         res.status(200).json({
             mensaje: 'El producto fue eliminado'
         })

    }catch(error){
        console.log(error);
        // enviar error al frontend
        res.status(500).json({
            mensaje:"ocurrio un error al eliminar el producto"
        })
    }
}


export default cafeteriaCtrl;



