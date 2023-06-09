const { getAllAsignaturas, getAsignaturaByClaseId, crearAsignatura, getAsignaturaByAlumnoId } = require("../../models/asignatura.model");
const router = require('express').Router();



router.get('/', async (req, res) => {
    try {
        const [clases] = await getAllAsignaturas();
        res.json(clases);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})



router.get('/:claseId', async (req, res) => {
    const { claseId } = req.params;
    try {
        const [clases] = await getAsignaturaByClaseId(claseId);
        res.json(clases);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/:profesorId', async (req, res) => {
    const { profesorId } = req.params
    try {
        const [asignatura] = await crearAsignatura(req.body, profesorId)
        res.json(asignatura)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.get('/alumnoAsignatura/:alumnoId', async (req, res) => {
    const { alumnoId } = req.params
    try {
        const [asignaturas] = await getAsignaturaByAlumnoId(alumnoId)
        res.json(asignaturas)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


module.exports = router;