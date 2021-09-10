const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let resultArray = [];

  each(collection, function (element, index, array) {
    if (callback(element) === true) {
      resultArray.push(element);
    }

  })
  return resultArray;


};


//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = function (collection, callbackTest) {
  let resultArray = [];

  each(collection, function (element, index, array) {
    if (callbackTest(element) === false) {
      resultArray.push(element);
    }

  })
  return resultArray;


};

//use indexOf to solve this
const uniq = function (array) {

  let resultArray = []

  each(array, function (element, index, list) {
    console.log(indexOf(array, element), resultArray);
    if (!resultArray.includes(element)) {
      resultArray.push(element)
    }
  })
  console.log(resultArray);
  return resultArray;

};

const reduce = function (collection, iterator, accumulator) {

  if (accumulator !== undefined) {

    each(collection, function (element) {
      accumulator = iterator(accumulator, element)

    })
    return accumulator;
  } else {

    let total = +collection.splice(0, 1)
    each(collection, function (element) {
      total = iterator(total, element)
    })
    return total;
  }

};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};