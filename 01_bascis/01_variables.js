const accountId = 133553
let accountEmail = "aman@google.com"
var accountPassword = " 12345"
accountCity = "Kathmandu"
let accountState;

// accountId = 2  # Not allowed

accountEmail = "@gmail.com"
accountPassword = "212322"
accountCity = "Dhulikhel"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountCity,accountPassword,accountState])