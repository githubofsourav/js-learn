const accountId = 12345;
let accountEmail = "sourav@gmail.com"; 
var accountPassword = "123";
accountCity = "Agartala";
let accountState;
// accountId = 2; // not allowed to modify constants

accountEmail = "sd@sd.com";
accountPassword = "54321";
accountCity = "Bengaluru";

console.log(accountId);

/**
 * Prefer not to use 'var'
 * because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
