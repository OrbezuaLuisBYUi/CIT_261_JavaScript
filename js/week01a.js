/**
 * Created by jloin on 9/18/2019.
 */
//Function to study the Loop
function myLoops()
{
    var numbers = "";
    for(var i = 1; i <= 100; i++)
    {
        numbers = numbers +","+ i;
    }
    document.getElementById("resultLoop").innerHTML = "The numbers are: "+ numbers;
}
// Function to study the Conditional If
function myConditionalIf()
{
    var odd = "";
    var even = "";
    for(var i = 1; i <= 100; i++)
    {
        if(i%2==0)
        {
            even = even +","+ i;
        }
        else
        {
            odd = odd +","+ i;
        }
    }
    document.getElementById("resultconditional").innerHTML = "The even numbers are with the <strong>'if'</strong>: "+ even +
    " <br>The odd numbers are with the <strong>'if'</strong>: " + odd;
}
// Function to study Conditional  Case
function myConditionalCase()
{
    var odd = "";
    var even = "";
    for(var i = 1; i <= 100; i++)
    {
        switch (i%2) {
            case 0:
                even = even +","+ i;
                break;
            default:
                odd = odd +","+ i;
        }
    }
    document.getElementById("resultconditional").innerHTML = "The even numbers are with the <strong>'case'</strong>: "+ even +
    "<br> The odd numbers are with the <strong>'case'</strong>: " + odd;
}
// Function to study pass Parameters
function myFunctionParameters()
{
    var number = prompt("Enter a number: ");
    var resultPrime=test_prime(number);
    var result = "";
    if(resultPrime == true)
    {
        result = "The number " + number + " is Prime"
    }
    else
    {
        result = "The number " + number + " is not Prime"
    }
    document.getElementById("resultFunctionAndParameters").innerHTML = result;
}

function test_prime(n)
{
    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}
// Functions for Arrays()
function myArrays()
{
var array1=[1,2,5,3,10,11];
var array2=[9,5,2,4,7];
    // calling function sumIndex
var arraySum3=sumIndex(array1, array2);
document.getElementById("resultArray").innerHTML = arraySum3;
}

function sumIndex(array1,array2)
{
    var theSum = [];
    for ( var i = 0; i < array1.length; i++)
    {
        if(array1[i]=="" || array1[i]== null)
        {
            array1[i]= 0;
        }
        if(array2[i]=="" || array2[i]== null)
        {
            array2[i]= 0;
        }
         theSum[i] = array1[i] + array2[i];
    }
    return theSum;
}

function yourInfo()
{
    var personalInfo = new Object();
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var phoneNumber = prompt("Enter your telephone number");
    personalInfo["firstName"]= firstName;
    personalInfo["lastName"]= lastName;
    personalInfo["phoneNumber"]= phoneNumber;
    var compleateInfo = "";
    for(var i in personalInfo)
    {
        compleateInfo += i + "=" + personalInfo[i] + '<br>';

    }
    document.getElementById("resultAsociative").innerHTML = "<strong>" + compleateInfo + "</strong>";
}
