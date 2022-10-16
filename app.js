const axios = require('axios');
const express = require('express');
const morgan =require('morgan');
const app = express();

app.use(morgan('tiny'));

app.get('/api/breakingbad/characters',async(req,res)=>{
   const fetchData = async ()=>{
      const getData = await axios.get('https://breakingbadapi.com/api/characters')
      .then((response)=>{
         const BreakingObject =[
            {
            name:response.data[0].name,
            birthday:response.data[0].birthday,
            img:response.data[0].img,
            nickname:response.data[0].nickname
            },
            {
               name:response.data[1].name,
               birthday:response.data[1].birthday,
               img:response.data[1].img,
               nickname:response.data[1].nickname
            },

      ]
         console.log(`The Name : ${BreakingObject.name} and the Birthday is : ${BreakingObject.birthday}`);
         res.send({BreakingObject});
      })
      .catch((err)=>{
         console.log(err)
      })
   }
   
   fetchData();
  
})

app.listen(3000,()=>{
   console.log('connected');
})