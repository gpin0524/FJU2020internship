$("#attachment_table").find("tbody tr").eq(0).find("td").eq(1).find("a")[0].click()
$("#attachment_table tbody tr").length

------------------------------------------------------------------------------------------------------
$(".txn-data table tbody tr").eq(0).find('td').eq(9).find('nobr').eq(0).html()
$(".txn-data table tbody tr").length
$(".txn-data table tbody tr")[0]
$(".search_box_btn").eq(0).find('button').eq(5).is('[disabled=disabled]')


$(document).ready(function () {
    var isDisabled =$(".search_box_btn").eq(0).find('button').eq(5).is('[disabled=disabled]')
    alert(isDisabled); //this always returns falseif
});

