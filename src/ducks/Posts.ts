import { AnyAction} from "redux"
import firebase from 'firebase/app'
import {Dispatch} from 'redux'
import { IServices } from "../services"


const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'

export interface IDataposts{
    [key:string]: {
        comment: string
        userId : string
        createdAt: firebase.firestore.Timestamp 
        imageURL: string       
    }
} 
const fetchStart = () => ({
    type: START,
})
const fetchSuccess = (payload: IDataposts) => ({
    payload,
    type: SUCCESS
})
const fetchError = (error: Error) => ({
    error,
    type: Error
})
const initialState = {
    data: {},
    fetched: false,
    fetching: false,
}
export default function reducer (state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return{
                ...state,
                fetching : true,
            }
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                fetched: true,
                fetching: false,
            } 
        case ERROR:
            return{
                ...state,
            error: action.error, 
            fetching: false
            }
        default:
            return state
        }
        return state
}

export const fetchPosts = () => 
     async (dispatch: Dispatch, getState: () => any, { db, storage }: IServices) => {
        dispatch(fetchStart())
        try {
         const snaps = await db.collection('posts').get()
         const posts:any = {} 
         snaps.forEach(x => posts[x.id] = x.data())
         const imgIds = await Promise.all(Object.keys(posts)
         .map(async x => {
            const ref = storage.ref(`posts/${x}.jpg`)
            const url = await ref.getDownloadURL()
            return [x, url]
         }))
         const keyedImages:any = {}
         imgIds.forEach(x => keyedImages[x[0]] = x[1])
         
         Object.keys(posts).forEach(x=> posts[x] = {
            ...posts[x],
            imageURL: keyedImages[x],
         })
         dispatch(fetchSuccess(posts))
        } catch (e:any) {
            console.log(e)
            dispatch(fetchError(e))
        }
    }

export const like = (id:string) =>
    async (dispatch: Dispatch, getState: () => any, {auth}: IServices) => {
        console.log(id)
         if(!auth.currentUser) { //ejecutar la validación antes de obtener el token//si el usuario no ha iniciado sesión no deberiamos djarlo ejecutar la siguiente acion
            return
        } 
        const token = await auth.currentUser.getIdToken()
        const result =  await fetch('/api/posts', {
            headers: {
                authorization: token 
            }
        })
        const text = await result.text()

        console.log(text)
    }

    export const share = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, {}: IServices) => {
    //tslint: disable-next-line:no-console
    console.log(id)
} 
