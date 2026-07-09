//Javascript data types defines the kind of a value that cane be stored in a variable.There are 2 types of data types in js
//they are primitive data types and non-primitive data types(reference)

//1.primitive data types: they are immutable and they are stored in stack memory and they used to stored single values and these are 7 types...
  //number,string,boolean,undefined,null,symbol and bigint

  //1.number:it is used to store numeric values and it can be integer or floating point values
  let num = 10;
  console.log(num);
  //2.string:it is used to store text values and it is enclosed in single or double quotes
  let name = "yoshithaa";
  let city ="bangalore";
  var country = 'india';
  console.log(name);
  console.log(city);
  console.log(country);
  //3.boolean: it is used to store true or false values
  let isTrue = true;
  let isFlase = false;
  let isgreater = 10>5;
  let issmaller =20<10;
  console.log(isTrue);
  console.log(isFlase);
  console.log(isgreater);
  console.log(issmaller);
  //4.undefined:it is used to store a variable that has not been assigned a value yet
  let a;
  console.log(a);
  let ysr;
  console.log(ysr);
  //5.null:it is used to stored a variable that has no value and it is an object ..it means it represents intentional absence of value
  let b=null;
  console.log(b);
  let data = null;
  console.log(data);
  //6.symbol:it is used to create a unique identifier for an object and it is immutable
  let sym1 = Symbol("id");
  let id = Symbol("userid");
  console.log(id);
  console.log(sym1);
  //7.biginit:it is used to store large integer values and it is denoted by n at the end of the number
  let bigint = 1234567890123456789012345678901234567890n;
  console.log(bigint);