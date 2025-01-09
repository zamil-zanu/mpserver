
// import json-server
const jsonServer=require('json-server')
// create server for media player application
const Mpserver=jsonServer.create()
// create middileware
const middileware=jsonServer.defaults()
// set up route for json file 
const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

Mpserver.use(middileware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`Mpserver started at port ${PORT} and waiting for client request`);
    
})

