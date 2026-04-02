// Build an Email Masker

function maskEmail(email){
  
let atIndex = email.indexOf("@");
  
let userName = email.slice(0,atIndex);
let domainName = email.slice(atIndex);
  
let first = userName[0];
let last = userName[userName.length-1];
  
let maskedMiddle = "*".repeat(userName.length-2);
return first+maskedMiddle+ last+ domainName;
}
let email= "myEmail@email.com";
console.log(maskEmail(email))
