// 500701-->
$(document).ready(function () {
	var d = new Date();
	var yyyy = d.getFullYear().toString();
	var mm = '';
	var dd = '';
	if(d.getMonth()<10){
		mm = '0' + d.getMonth().toString();
	}else{
		mm = d.getFullYear().toString();
	}
	if(d.getDay()<10){
		dd = '0' + d.getDay().toString();
	}else{
		dd = d.getDay().toString();
	}
	
	var date = yyyy + '/' + mm + '/' + dd;
	
	
	var accountList = [];
	var dataCount = $(".txn-data table tbody tr").length
	for(i = 0; i < dataCount; i++){
		var account = $(".txn-data table tbody tr").eq(i).find('td').eq(9).find('nobr').eq(0).html()
		if(account.includes("9")){
			accountList.push(account)
		};
	};
	
	return accountList
	
});




//案件編號
$(".txn-form table tbody tr").eq('0').find('td').eq('3').find('span nobr').eq('0').html()
//帳號
$(".txn-data table tbody tr").eq(0).find('td').eq(9).find('nobr').eq(0).html()
//資料量
$(".txn-data table tbody tr").length
//下一筆BUTTON
$(".search_box_btn").eq(0).find('button').eq(5).is('[disabled=disabled]')



//501001-->

//-外來文
//備註
$("#query_table").find("tbody tr").eq(i).find("td").eq(5).html()
//案件編號
$("#query_table").find("tbody tr").eq(1).find("td a")[0].click()
//點選附件 機器人調閱
$("#divUploadList").find("tbody tr td").eq(0).find("a")[0]

-PCMS
//點開帳務查詢
$("#ulBI01").attr("style", "display: block;");
//點歷史交易查詢
$("#liBI01001 span a").click();
//點選依帳號
$("#funcType33").attr("checked", true);
//選擇
$("#list1 option[value='0107131033027013']").attr("selected", true);
//右移
moveOption(document.myform.list1, document.myform.list2)
//全移
count = $("#list1 option").length
for(i = 0; i < count; i++){
    $("#list1 option").eq(0).attr("selected", true)
    moveOption(document.myform.list1, document.myform.list2)
}





//忘記在幹嘛---->
$("#attachment_table").find("tbody tr").eq(0).find("td").eq(1).find("a")[0].click()
$("#attachment_table tbody tr").length

//------------------------------------------------------------------------------------------------------
$(".txn-data table tbody tr").eq(0).find('td').eq(9).find('nobr').eq(0).html()
$(".txn-data table tbody tr").length
$(".txn-data table tbody tr")[0]
$(".search_box_btn").eq(0).find('button').eq(5).is('[disabled=disabled]')


$(document).ready(function () {
    var isDisabled =$(".search_box_btn").eq(0).find('button').eq(5).is('[disabled=disabled]')
    alert(isDisabled); //this always returns falseif
