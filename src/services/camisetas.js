import api from "../plugins/api";

class CamisetaService {
    async getAllCamisetas() {
        const response = await api.get('/camisetas/')
    }
}