$(document).ready(function(){
    $('.ll').on('click',function()
    {
    document.getElementById('ip1').value = this.innerHTML; 
    document.forms["myForm"].submit();
    })

    $('#del').on('click',function()
    {
        document.getElementById('ip2').value = prompt("Enter file to delete");
        document.forms["myForm2"].submit();
    })

    $('#edit').on('click',function()
    {
        document.getElementById('ip3').value = prompt("Enter file to edit");
        document.forms["myForm3"].submit();
    })
})
