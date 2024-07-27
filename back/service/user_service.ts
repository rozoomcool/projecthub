import prisma from '../config/database';
import bcrypt from 'bcryptjs';
import { UserModel } from '../model/user';
import { PrismaClient, User } from '@prisma/client';
import path from 'path';
import fs from 'fs';


interface UpdateUserParams {
    id: number;
    username?: string;
    password?: string;
    avatarUrl?: string;
  }


class UserService {

    private prisma: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    async createUser(user: UserModel) {
        const {username, password} = user
        const hashed = bcrypt.hashSync(password, 10);
        return await this.prisma.user.create({
            data: {
                username,
                password: hashed
            }
        });
    }

    async loginUser(requestUser: UserModel): Promise<UserModel | null> {
        const user = await this.getUserByUsername(requestUser.username);
        if (bcrypt.compareSync(requestUser.password, user!.password)) {
            return user as UserModel;
        }
        return null;
    }
    
    async getUserById (id: number) {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }

    async getUserByUsername(username: string) {
        return await this.prisma.user.findUnique({
            where: {username}
        })
    }
    
    async getUsers() {
        return await this.prisma.user.findMany();
    }
    
    // async updateUserAvatar(params: UpdateUserParams): Promise<User> {
    //     const { id, avatarUrl } = params;
    //     const user = await this.prisma.user.findUnique({ where: { id } });
    
    //     if (user && avatarUrl && user.avatarUrl) {
    //       const oldAvatarPath = path.join(__dirname, '../../', user.avatarUrl);
    //       fs.unlink(oldAvatarPath, (err) => {
    //         if (err) {
    //           console.error(`Failed to delete old avatar: ${err.message}`);
    //         }
    //       });
    //     }
    // }
}

export const userService = new UserService(prisma);