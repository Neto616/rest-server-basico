const { response , request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre, apikey, page = 1, limit }  = req.query;

    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apikey, 
        page, 
        limit
    });

}

const usuariosPost = (req = request , res = response) => {
    
    const { nombre, edad } = req.body;

    res.status(200).json({
        msg: 'post Api - controlador',
        nombre, 
        edad
    });

}

const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;

    res.json({
    
        msg: 'put Api - controlador',
        id

    });

}

const usuariosPatch = (req, res = response) => {
    
    res.json({
    
        msg: 'Patch Api - controlador'
    
    });

}

const usuariosDelete = (req, res = response) => {
    
    res.json({
    
        msg: 'Delete Api - controlador'
    
    });

}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}