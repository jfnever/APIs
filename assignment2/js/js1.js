function addFlowerValue(){
    var name = document.getElementById("name").value;
    var color =  document.getElementById("color").value;
    var price = document.getElementById("price").value;

    if (name==""){
        window.alert("Must have a name!");return false;
    }

    var flowerData = new Array(3);
    flowerData[0]= name;
    flowerData[1]= color;
    flowerData[2]= price;

    document.getElementById("flowerlist").innerHTML += "<tr> <td>" + name + "</td> <td>" + color + "</td> <td>" + price + "</td> </tr>";
}

function refresh(){
    document.getElementById("name").value = "";
    document.getElementById("color").value = "";
    document.getElementById("price").value = "";
}

function start() {
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "block";
}




