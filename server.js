const express=require("express")
const app=express()
app.listen(3000)

let arr=[
    {
        id: 1,
        name: 'book_1',
        price: 10,
    },
    {
        id: 2,
        name: 'book_2',
        price: 20,
    },
    {
        id: 3,
        name: 'book_3',
        price: 30,
    },
]


app.get("/by_id/:id",(req,res)=>{

const id=req.params.id;
data=arr.filter((el)=>{
    return el.id==id;
})
let message=data.length<=0?`there is no product having the id ${id}`:`there ${data.length} product having this id ${id}`;


    res.json({content:data,message})
})


app.get("/by_name/:name",(req,res)=>{

    const name=req.params.name;
    data=arr.filter((el)=>{
        return el.name==name;
    })
    let message=data.length<=0?`there is no product having the name ${name}`:`there ${data.length} product having this name ${name}`;
    
        res.json({content:data,message})
    })