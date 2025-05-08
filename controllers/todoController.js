const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTodos = async (req, res, next) => {
    try {
        const todos = await prisma.todo.findMany({ where: { userId: req.user.id } });
        res.json(todos);
    } catch (error) {
        next(error);
    }
};

const createTodo = async (req, res, next) => {
    try {
        const { title } = req.body;
        const todo = await prisma.todo.create({
            data: { title, userId: req.user.id }
        });
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
};

const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = await prisma.todo.update({
            where: { id: parseInt(id) },
            data: { title, completed }
        });
        res.json(todo);
    } catch (error) {
        next(error);
    }
};

const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.todo.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
