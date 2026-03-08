const express = require("express");
const router = express.Router();

const Order = require("../models/order");

router.post("/order", async (req, res) => {
    try {

        const data = req.body;

        const newOrder = {
            orderId: data.numeroPedido,
            value: data.valorTotal,
            creationDate: data.dataCriacao,
            items: data.items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        };

        const order = await Order.create(newOrder);

        res.status(201).json(order);

    } catch (error) {

        res.status(500).json({
            message: "Erro ao criar pedido",
            error: error.message
        });

    }
});

router.get("/order/list", async (req, res) => {
    try {

        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: "Erro ao listar pedidos",
            error: error.message
        });

    }
});

router.get("/order/:id", async (req, res) => {
    try {

        const orderId = req.params.id;

        const order = await Order.findOne({ orderId: orderId });

        if (!order) {
            return res.status(404).json({
                message: "Pedido não encontrado"
            });
        }

        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({
            message: "Erro ao buscar pedido",
            error: error.message
        });

    }
});

router.put("/order/:id", async (req, res) => {
    try {

        const orderId = req.params.id;
        const data = req.body;

        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: orderId },
            data,
            { new: true } // retorna o documento atualizado
        );

        if (!updatedOrder) {
            return res.status(404).json({
                message: "Pedido não encontrado"
            });
        }

        res.status(200).json(updatedOrder);

    } catch (error) {

        res.status(500).json({
            message: "Erro ao atualizar pedido",
            error: error.message
        });

    }
});

router.delete("/order/:id", async (req, res) => {
    try {

        const orderId = req.params.id;

        const deletedOrder = await Order.findOneAndDelete({
            orderId: orderId
        });

        if (!deletedOrder) {
            return res.status(404).json({
                message: "Pedido não encontrado"
            });
        }

        res.status(200).json({
            message: "Pedido deletado com sucesso"
        });

    } catch (error) {

        res.status(500).json({
            message: "Erro ao deletar pedido",
            error: error.message
        });

    }
});

module.exports = router;