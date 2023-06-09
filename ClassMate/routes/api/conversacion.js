const { InsertConversation, getConversacionById, InsertMessage, getMensajeByConversacionId, getConversaciones, deleteMensajeById } = require('../../models/conversacion.model');

const router = require('express').Router();

//insertar conversacion
router.post('/', async (req, res) => {
    try {
        const [asunto] = await InsertConversation(req.body)
        console.log(asunto)
        res.json(asunto)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

//Recuperar Conversaciones
router.get('/', async (req, res) => {
    try {
        const [result] = await getConversaciones()
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

// Recuperar conversacion por Id
router.get('/:conversacionId', async (req, res) => {
    const { conversacionId } = req.params
    try {
        const [asunto] = await getConversacionById(conversacionId)
        if (asunto.length === 0) {
            return res.json({ fatal: 'No existe conversación' })
        }
        res.json(asunto)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



// insertar mensaje
router.post('/mensaje', async (req, res) => {
    try {
        const [mensaje] = await InsertMessage(req.body)
        res.json(mensaje)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

// Recuperar mensaje por Conversación
router.get('/mensaje/:conversacionId', async (req, res) => {
    const { conversacionId } = req.params

    try {
        const [mensaje] = await getMensajeByConversacionId(conversacionId)
        console.log(mensaje);
        if (mensaje.length === 0) {
            return res.json({ fatal: 'No hay mensajes en esta conversación' })
        }
        res.json(mensaje)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})
//Borrar mensaje by ID
router.delete('/mensaje/:idMensaje', async (req, res) => {
    const { idMensaje } = req.params
    try {
        const [removeMensaje] = await deleteMensajeById(idMensaje);
        res.json(removeMensaje)
    } catch {
        res.json({ fatal: error.message })
    }
})


module.exports = router;