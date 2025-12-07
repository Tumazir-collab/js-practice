const accountId= 14356
let accountEmail = "tumazir@.com"
var accountPasword ="123"
accountCity = "lslamabad"
let accountState;

// accountId = 2 not allowed
accountEmail = "tzay"
accountPasword = "12987"
accountCity = "Beawrw"
console.log(accountId);

console.table([accountId,accountEmail,accountPasword,accountCity,accountState])
/* prefer not to use var, because of tyhe issue in block scope and functional scope*/