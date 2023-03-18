const router = require('express').Router();

const pedidoController = require('../controller/pedido.controller');
const authMiddleware = require('../middleware/auth.middlaware');
const { validaPedido, validaId } = require('../middleware/validacao.middleware');

router.get('/find/:id', authMiddleware, validaId, pedidoController.findPedidoByIdController);
router.get('/findAll', authMiddleware, pedidoController.findAllPedidosController);

router.post('/create', authMiddleware, validaPedido, pedidoController.createPedidoController);

router.delete('/delete/:id', authMiddleware, validaId, pedidoController.deletePedidoController);

router.patch('/updateStatus/:id', authMiddleware, validaId, pedidoController.updateStatusPedidoController);

module.exports = router;