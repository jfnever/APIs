/**
 * Created by apple on 16/4/14.
 */
var submitBtn = document.getElementById("submit-btn");
var resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", onClickSubmit,false);
resetBtn.addEventListener("click",onClickReset,false);

var numberListAfter = document.getElementById("list");
var countAfter = document.getElementById("count");
var sumAfter = document.getElementById("sum");
var averageAfter = document.getElementById("average");
//var numberList = document.getElementById("list");
var numberList = "Numbers:";
var numberError = document.getElementById("error");

var count = 0;
var sum = 0;

function onClickSubmit(evt){

    evt.preventDefault();
    numberError.innerHTML = "";

    var input = document.getElementById('numbers').value;

    if(isNaN(input)){

        numberError.innerHTML = "Numbers only!";
        window.alert("Numbers only! Please reset!");

    }



        numberList +=input.toString() + " ";
        count++;
        sum = sum + parseFloat(input);





    numberListAfter.innerHTML = numberList;
    countAfter.innerHTML = "Count:" + count;
    sumAfter.innerHTML = "Sum:" + sum;
    averageAfter.innerHTML = "Average:" + (sum/count);

}

function onClickReset(evt){

    numberList = "Numbers:"+"";
    count = 0;
    numberListAfter.innerHTML = numberList;
    countAfter.innerHTML ="";
    sumAfter.innerHTML = "";
    averageAfter.innerHTML = "";
    numberError.innerHTML = "";

}

