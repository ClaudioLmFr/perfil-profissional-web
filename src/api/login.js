import { mande } from "mande"

const api = mande("http://localhost:3000/login", {})

export function login(usuario) {
    return api.post(usuario)
}
