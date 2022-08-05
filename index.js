const axios = require("axios").default;
const mainmodule = require("./mainmodule");
const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());

const mainProgram = async () => {
  let newdata = [];
  let myarr = [];
  let datacount = [];
  let minmaxavg = [];

  const api = axios.get("http://3.1.189.234:8091/data/ttntest");
  const [obj] = await Promise.all([api]);

  newdata = mainmodule.createArr(obj.data);
  myarr = mainmodule.createNewData(newdata, 200); //แบ่ง 200
  const myarrJson = mainmodule.newDataJson(myarr)
  minmaxavg = mainmodule.findMinMaxAvg(newdata);

  let lastdata = myarr.pop();

  datacount = mainmodule.createCount(lastdata);

  const linear = mainmodule.linearRegression(lastdata, datacount);

  const predictOne = mainmodule.predictData(linear.slope,1,linear.intercept)

  const predictSeven = mainmodule.predictMore(linear.slope,linear.intercept)

  app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname+'/index.html'));
  });

  app.get('/dataset',(req,res)=>{
    res.json(myarrJson)
  })

  app.get('/findMinMaxAvg',(req,res)=>{
    res.json(minmaxavg)
  })

  app.get('/predictOne',(req,res)=>{
    res.json({day1:predictOne})
  })

  app.get('/predictSeven',(req,res)=>{
    res.json(predictSeven)
  })

};

mainProgram()

app.listen(port,()=>{
    console.log("Complete")
})







