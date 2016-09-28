var all  = [
  {
      date: 'July 29th, 2015',
  },
  {
      date: 'July 2nd, 2016',
  },
  {
      date: 'July 3rd, 2015',
  },
  {
      date: 'July 21st, 2015',
  }
]

function parsingDate(date) {
  var dateSuffix = ['st', 'nd', 'rd', 'th'];
  for(var i = 0; i <= dateSuffix.length; i++) {
    if(date.indexOf(dateSuffix[i]) != -1) {
      return Date.parse( date.replace(dateSuffix[i], ""));
    }
  }
}
all.sort(function (a, b) {
  if(parsingDate(a.date) > parsingDate(b.date)) {
    return -1;
  }
  if(parsingDate(a.date) < parsingDate(b.date)) {
    return 1;
  }
  return 0;
})
console.log("all", all);