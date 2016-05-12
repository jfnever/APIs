function getValue(x){
    var newValue = document.getElementById(x).value;
    //console.log(x);
    var a = document.getElementById(x);
    //console.log(a);
    var aParent = a.parentNode;
    //console.log(aParent);
    var aParentSibling = aParent.nextSibling;
    if (aParentSibling.tagName != "td")
        aParentSibling = aParentSibling.nextSibling;

    //console.log(aParentSibling);
    //console.log(newValue);
    aParentSibling.innerHTML = newValue;





}

$("#color").change(function() {
    $("#colorValue").text($("#color").val());
});

$("#date").change(function() {
    $("#dateValue").text($("#date").val());
});

$("#number").change(function() {
    $("#numberValue").text($("#number").val());
});

//$("#range").change(function() {
  //  $("#rangeValue").text($("#color").val());
//});

$("#checkbox").change(function() {
    if($('#checkbox').is(':checked')) {
        $('#checkboxValue').text("Checked")
    } else {
        $('#checkboxValue').text("NotChecked")
    }
});

$("input[name=gender]").change(function() {
    $("#radioValue").text($("input[name=gender]:checked").val());

});

$("#select").change(function() {
    $("#selectValue").text($("#select").val());
});