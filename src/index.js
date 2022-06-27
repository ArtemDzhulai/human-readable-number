module.exports = function toReadable (number) {
  const lowNumber = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const decimalNumber = ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const numberZero = number.toString()[0];
  const numberOne = number.toString()[1];
  const numberTwo = number.toString()[2];
  const numberTwoSymbol = number.toString().slice(1, 3)
  const space = ' ';
 if (number === 0){
  return ('zero');
 } else if (number > 0 && number < 20) {
  return lowNumber[number];
 } else if (number >= 20  && number < 100 && numberOne === '0'){
   return decimalNumber[numberZero];
 } else if (number > 20  && number < 100 && numberOne !== '0'){
  return decimalNumber[numberZero] + space + lowNumber[numberOne];
 } else if (number >= 100 && numberTwoSymbol === '00'){
  return lowNumber[numberZero] + space + 'hundred';
 } else if (number > 100 && numberOne === '0' && numberTwo !== '0'){
  return lowNumber[numberZero] + space + 'hundred' + space + lowNumber[numberTwo];
 } else if (number > 100 && numberOne === '1' && numberTwo !== '0'){
  return lowNumber[numberZero] + space + 'hundred' + space + lowNumber[numberTwoSymbol];
 } else if (number > 100 && numberTwoSymbol === '10'){
  return lowNumber[numberZero] + space + 'hundred' + space + lowNumber[numberTwoSymbol];
 } else if (number > 100 && numberOne > 1 && numberTwo === '0'){
  return lowNumber[numberZero] + space + 'hundred' + space + decimalNumber[numberOne];
 } else if (number > 100 && numberOne > 1 && numberTwo !== '0'){
  return lowNumber[numberZero] + space + 'hundred' + space + decimalNumber[numberOne] + space + lowNumber[numberTwo];
 };
}
