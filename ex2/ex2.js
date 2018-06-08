var num = []
function pushToList(number) {
  num.push(number); 
}

function getsortedList() {
  return num.sort(function (a,b){
    return a - b;
  })
}

module.exports = {
  pushToList : pushToList,
  getsortedList : getsortedList,
}

