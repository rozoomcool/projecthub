import $api from "../http/constatns";
import AuthResponse from "../models/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AuthResponse> {
        const response = await $api.post<AuthResponse>("/auth/login", {
            username,
            password
        });
        if (response.status == 200) {
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            return response.data;
        }
        throw Error("Failed Login");
    }

    static async register(username: string, password: string): Promise<Boolean> {
        const response = await $api.post("/auth/register", {
            username, password
        });
        return response.status == 201;
    }

    static checkAuthStatusFast(): boolean {
        return localStorage.getItem("token") != null;
    }

    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
    }
}