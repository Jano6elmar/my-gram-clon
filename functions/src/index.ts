import * as functions from "firebase-functions";



export const api = functions.https.onRequest((request, response) => { //usamos una funcion para manejar todas las peticiones
    response.send("hello from Firebase!")
});