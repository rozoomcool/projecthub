import { Router } from "express";
import { authMiddleware } from "../middleware/auth_middleware";
import { userService } from "../service/user_service";
import upload from "../config/multer_config";

export const userRouter = Router();

// userRouter.post('/', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await createUser({ username, password, role: null });
//         res.status(201).json(user);
//     } catch (error) {
//         if (error instanceof Error) {
//             res.status(400).json({ error: error.message });
//         } else {
//             res.status(400).json({ error: 'An unexpected error occurred' });
//         }
//     }
// });

userRouter.get('/', authMiddleware, async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
});

userRouter.get('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(Number(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

userRouter.put('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const user = await userService.updateUser(Number(id), data);
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }
});

userRouter.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(Number(id));
        res.status(204).end();
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unexpected error occurred' });
        }
    }
});

userRouter.post("/avatar", upload.single("avatar"), authMiddleware, (req, res) => {
    
})