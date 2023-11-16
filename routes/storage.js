
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {validatorGetItem} = require("../validators/storage")
const { getItems, getItem, updateItem, deleteItem, createItem } = require('../controllers/storage');


/**
 * Listas de item
 */
router.get("/", getItems)

/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * Eliminar item
 */
router.get("/:id", validatorGetItem, deleteItem)

/**
 * Crear items
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);









module.exports = router;