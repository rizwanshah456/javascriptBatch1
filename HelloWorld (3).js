var array = [5, 9,0, -4,  2,  -25,0, 64, -45 ,0];
var positive = 0, negative = 0, zero = 0;
for (var i = 0; i < 10; ++i)
{
if (array[i] > 0)
{
positive += 1;
}
else if(array[i] < 0)
{
negative += 1
}
else
{
zero+= 1;
}
}
console.log("Given numbers : "+ array);
console.log("Number of +ve numbers are: "+ positive);
console.log("Number of -ve numbers are: "+ negative);
console.log("Number of zeros numbers are: "+ zero);