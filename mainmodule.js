const findMinMaxAvg = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  arr.forEach((value) => {
    if (value > max) max = value;
    if (value < min) min = value;
    sum += value;
  });
  let avg = sum / arr.length;
  let mydata = { Min: min, Max: max, Avg: avg };
  return mydata;
};

module.exports.findMinMaxAvg = findMinMaxAvg;

const createNewData = (arr, limit) => {
  if (arr.length <= limit) return [arr];
  const num = Math.ceil(arr.length / Math.ceil(arr.length / limit));
  return [arr.slice(0, num)].concat(createNewData(arr.slice(num), limit));
};

module.exports.createNewData = createNewData;

function linearRegression(y, x) {
  var lr = {};
  var n = y.length;
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var sum_yy = 0;

  for (var i = 0; i < y.length; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += x[i] * y[i];
    sum_xx += x[i] * x[i];
    sum_yy += y[i] * y[i];
  }

  lr["slope"] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
  lr["intercept"] = (sum_y - lr.slope * sum_x) / n;
  lr["r2"] = Math.pow(
    (n * sum_xy - sum_x * sum_y) /
      Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
    2
  );

  return lr;
}

module.exports.linearRegression = linearRegression;

const createArr = (arr) => {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].data);
  }
  return newarr;
};

module.exports.createArr = createArr;

const newDataJson = (arr) => {
  var resJson = {};
  for (var i = 0; i < arr.length; i++) {
    resJson["Data Set " + (i + 1)] = arr[i];
  }
  return resJson;
};

module.exports.newDataJson = newDataJson;

const createCount = (arr) => {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(i + 1);
  }
  return newarr;
};

module.exports.createCount = createCount;

const predictData = (a, x, b) => {
  const y = a * x + b;
  return y;
};

module.exports.predictData = predictData;

const predictMore = (a, b) => {
  let predictList = [];
  for (let i = 2; i <= 8; i++) {
    predictList.push(predictData(a, i, b));
  }
  const jsonData = predictList.reduce((acc, item, index) => {
    acc[`day${index + 2}`] = item;
    return acc;
  }, {});
  return jsonData;
};

module.exports.predictMore = predictMore;
