const axios = require('axios').default;
const mainmodule = require('./mainmodule')


const mainProgram = async () => {
  let newdata = [];
  let myarr = [];
  let datacount=[];
  let minmaxavg=[];

  const api = axios.get("http://3.1.189.234:8091/data/ttntest");
  const [obj] = await Promise.all([api]);

  newdata = mainmodule.createArr(obj.data)

  myarr = mainmodule.createNewData(newdata, 200); //แบ่ง 200

  minmaxavg =mainmodule.findMinMaxAvg(newdata)

  let lastdata = myarr.pop();
  //console.log(a.length); //ชุดสุดท้ายมี 199
  datacount = mainmodule.createCount(lastdata)

  const linear = mainmodule.linearRegression(lastdata,datacount)
  

  return [minmaxavg,myarr]
  
};

module.exports.mainProgram = mainProgram;
