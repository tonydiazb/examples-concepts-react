const express = require('express');
const bodyParser = require('body-parser').json();;
const app = express();

const port = 8080;
let response = {
    notification:{},
    data:{}
};
let customers =[
    {id:1, firstName:'Tony',lastName:'Diaz'},
    {id:2, firstName:'Henry',lastName:'Diaz'},
    
    {id:3, firstName:'Gloria',lastName:'Diaz'},
    {id:4, firstName:'Gabriel',lastName:'Diaz'},
];
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World Tony!');
  });


app.route('/api/customers')
    .get((req,res)=>{
        const notification ={
            error:false,
            message:'ok'
        }
        response.notification=notification;
        response.data = [...customers];
        res.json(response);
    })
    .put((req,res)=>{
        const notificationError ={
            error:false,
            message:'ok'
        }
        
        console.log(req.params.cliente);
        console.log(req.body);
        console.log(req.headers);
        //adding new user
        const obj = req.body;
        if (obj!=null)
        {
            const find = customers.find((item)=>item.id===obj.id);
            if(find)
            {
                notificationError.error=true;
                notificationError.message="User already exists";
                response.notification=notificationError;
            }
            else
            {
                customers.push(req.body)
                response.notification=notificationError;
                response.data = [...customers];
            }
            
            res.json(response);
        }
        
    })
    .post((req,res)=>{
        const notificationError ={
            error:false,
            message:'ok'
        }
        
        console.log(req.params.cliente);
        console.log(req.body);
        console.log(req.headers);
        //adding new user
        const obj = req.body;
        if (obj!=null)
        {
            const find = customers.find((item)=>item.id===obj.id);
            if(find)
            {
                notificationError.error=true;
                notificationError.message="User already exists";
                response.notification=notificationError;
            }
            else
            {
                customers.push(req.body)
                response.notification=notificationError;
                response.data = [...customers];
            }
            
            res.json(response);
        }
        
    })
/*
app.get('/api/customers',(req,res)=>{
    const notification ={
        error:false,
        message:'ok'
    }
    response.notification=notification;
    response.data = [...customers];
    res.json(response);
})*/



app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
});
