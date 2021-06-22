import  * as express from 'express'

export default () => {
    const app  = express()
    app.use((req:any, res, next)=>{
        console.log('soy un middleware!')
        req.user = 'lolol'
        next()
    })
    app.get('/posts', (req:any, res) => {
        console.log(req.user)
        res.send('Hola mundo!')
        
    })
    return app
}