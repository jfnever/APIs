
function addFlowerValue(){

    var flowerName = document.getElementById('name').value;
    var flowerColor =  document.getElementById('color').value;
    var flowerPrice = document.getElementById('price').value;
    document.getElementById('flowerlist').innerHTML += "<tr> <td>" + flowerName + "</td> <td>" + flowerColor + "</td> <td>" + flowerPrice + "</td> </tr>";


    /*var flowerData = new Array(3);
     flowerData[0]= flowerName;
     flowerData[1]= flowerColor;
     flowerData[2]= flowerPrice;*/
    //document.write(flowerData[0]);
    //console.log(flowerData);

    //addRow(flowerData);
//}
    if(flowerName=="") {
        window.alert("Please give the flower a name!");
        return false;}




//Write a function that creates a table row (<code>tr</code>) for each object in the array, with a cell (<code>td</code>) for each property to be displayed. Append each of these rows to the table body.
//function addRow() {
//添加一行
    /*var newTr = document.getElementById("flowerlist").insertRow();
     //添加两列
     var newTd0 = newTr.insertCell();
     var newTd1 = newTr.insertCell();
     var newTd2 = newTr.insertCell();
     //设置列内容和属性
     /* var flowerName = document.getElementById("name").value;
     var flowerColor = document.getElementById("color").value;
     var flowerPrice = document.getElementById("price").value;
     newTd0.innerHTML = flowerName;
     newTd1.innerHTML = flowerColor;
     newTd2.innerHTML = flowerPrice;*/

    /*var row = document.createElement("tr"); //创建行

     var td1 = document.createElement("tr"); //创建单元格
     var td2 = document.createElement("tr"); //创建单元格
     var td3 = document.createElement("tr"); //创建单元格

     td1.appendChild(flowerName); //为单元格添加内容
     td2.appendChild(flowerColor); //为单元格添加内容
     td3.appendChild(flowerPrice); //为单元格添加内容

     row.appendChild(td1,td2,td3); //将单元格添加到行内

     document.getElementById("flowerlist").append(row); */

}
/*function addFlowerRow(){
 var flowerName = document.getElementById("name").value;
 var flowerColor = document.getElementById("color").value;
 var flowerPrice = document.getElementById("price").value;



 var td1 = "<tr><td>";
 var td2 = "</td><td>";
 var td3 = "</td></tr>";
 var tdcc = td1+flowerName+td2+flowerColor+td2+flowerPrice+td3;
 document.getElementById("flowerlist").innerHTML += tdcc;

 }*/

function refresh(){
    document.getElementById('section1').style.display="none";
    document.getElementById('section2').style.display="block";

}

function clear(){
    document.getElementById('name').value = "";
    document.getElementById('color').value = "";
    document.getElementById('price').value = "";
}