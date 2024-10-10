//toLocaleString() = Returns a string with a language-sensitive representation

// number.toLocaleString(locale, {options});

// 'locale' = Specify the language
// 'options' = Object with formatting options

let myNum = 100;

// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("hi-IN");
// myNum = myNum.toLocaleString("de-DE");

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// myNum = myNum.toLocaleString(undefined, {style: "percent"});

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);