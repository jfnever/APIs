/*count = 0;
sum = 0;
count= count+1;
//sum = sum+ parseFloat(input);
average = sum/count;*/
var count = 0;
var sum = 0;

function addData(){

    var input = document.getElementById('textarea').value;
    var inputType = isNaN(input);
    console.log(inputType);


    if(inputType == false){
        count++;
        sum += parseFloat(input);
        var average = sum/count;


        document.getElementById('numbercell').innerHTML += "<tr> <td>" + count + "</td> <td>" + sum + "</td> <td>" + average + "</td> </tr>";


    }
    else if(inputType == true){

        document.getElementById('words').innerHTML += input+ '&nbsp;';


    }

    else{
        window.location.reload();
    }

}

function resetInput(){


    //document.getElementById('numbercell').value = '';
    //document.getElementById('words').value ='';
    window.location.reload();

}

function clearText(){
    document.getElementById('textarea').value = '';
}