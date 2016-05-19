//create
$('#create-submit').off( );
$('#create-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'fjiang'; //Use my own!
    var name = $('#create-name').val();
    var age = $('#create-age').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection,
        {
            method: 'POST',
            data: {
                name: name,
                age: age
            },
            success: logCreateResult,
            error: logAjaxError
        } );
} );

function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

//read search

$('#search').off( );
$('#search').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'fjiang'; //Use your own!
    var id = $('#read-id').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
        {
            method: 'GET',
            success: logReadResult,
            error: logAjaxError
        } );
} );

function logReadResult( data ) {
    console.log(data);
    document.getElementById("tablewrite").innerHTML += "<tr> <td>" + data + "</td> <tr/>" ;
}
    function logAjaxError( jqXHR, textStatus, errorThrown ) {
        console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
    }

//update

$('#submitUpdate').off( );
$('#submitUpdate').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'fjiang'; //Use your own!
    var id = $('#updateId').val();
    var wish = $('#updateName').val();
    var priority = $('updateAge').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
        {
            method: 'PUT',
            data: {
                wish: wish,
                priority: priority
            },
            success: logUpdateResult,
            error: logAjaxError
        } );
} );

function logUpdateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}


// Delete
$('#deleteSubmit').off( );
$('#deleteSubmit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'fjiang'; //Use your own!
    var id = $('#deleteId').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
        {
            method: 'DELETE',
            success: logDeleteResult,
            error: logAjaxError
        } );
} );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}