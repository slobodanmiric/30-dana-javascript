var ispisNamirnica = '';

$('.dodavanje').on('click', function() {
    // na klik treba da prezmemo vredonosti iz input plja koju koirsnik unosi
    var noviUnos = $('.namirnica').val();
    //alert(noviUnos);
    if(noviUnos != '') {
        ispisNamirnica = '<tr>';
        ispisNamirnica += '<td>' + noviUnos + '</td>';
        ispisNamirnica += '<td><button class="btn btn-warning brisanje">Brisanje</button></td>';
        ispisNamirnica += '</tr>';
        $('.lista-namirnica tbody').append(ispisNamirnica); // apend dodajemo u DOM novi unos
        $('.namirnica').val('').focus();
    } else {
        alert('Niste uneli artikal za kupovinu');
    }
    // $('.brisanje').on('click', function() {
    //     //$(this).parent().parent('tr').remove();
    //     $(this).closest('tr').remove();
    // });
});
$('tbody').on('click', '.brisanje',  function() {
    $(this).closest('tr').remove();
});