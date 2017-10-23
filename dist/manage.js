$('#download').css('visibility', "hidden");

$('#save').on("click", function(e) {
    var jsonToSave = $('#order-form').serializeArray();
    var jsonData = JSON.stringify(jsonToSave);
    $('#download').css('visibility', "visible");
    var downloadAnchor = $('#download').attr("href", "data: text/json;charset=UTF-8," + jsonData);
    downloadAnchor = $('#download').attr("download", "data.json");
    
    $('#order-form').append(downloadAnchor);
    e.preventDefault();
    return false;
});

document.getElementById('import').onclick = function() {
	var files = document.getElementById('selectFiles').files;
  if (files.length <= 0) {
    return false;
}
var fr = new FileReader();
fr.onload = function(e) {
console.log(e);
    var result = JSON.parse(e.target.result);
    var formatted = JSON.stringify(result, null, 2);
    var NewResult = document.getElementById('result').value = formatted;
    for(var i = 0; i< result.length; i++) {
        $('<li> ').html(result[i].value).appendTo('#newresult');
    }
    alert($('#result').val());
}
    fr.readAsText(files.item(0));
}
$('#newSave').click(function() {
    alert($('#result').val());
})


