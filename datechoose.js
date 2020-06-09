//學姊RC
// The First Injected Script, 點開小日曆
window.frames["Bottom"].document.getElementById('btnCal1').click();

// The Second Injected Script, 檢查月份是否正確
// 日期格式統一yyyy年mm月dd日

// var date = '2020年10月11日';//測試參數

function checkMonth(date) {
	
    var month = "";
        
    var frameDom = window.frames["Bottom"].document.getElementById("Calendar1");
    var trList = frameDom.getElementsByTagName("tr");
    var currentMonth = trList[1].getElementsByTagName("td")[1].innerText.slice(5, 8);

    if (month != currentMonth) {
        trList[1].getElementsByTagName("a")[1].click();
        return true;
    }
    return false;
}
checkMonth(date);

// The Third Injected Script, 選日期
// 日期格式統一yyyy年mm月dd日

// var date = '2020年10月11日';//測試參數
function pickDate(date) {
    if (Number(date.slice(5, 7)) < 10) {
        var month = date.slice(6, 8);
    } else {
        var month = date.slice(5, 8);
    }
    if (Number(date.slice(8, 10)) < 10) {
        var day = date.slice(9, 11);

    } else {
        var day = date.slice(8, 11);
    }
    var curDate = month + day;
    var frameDom = window.frames["Bottom"].document.getElementById("Calendar1");

    for (let i = 3; i < 8; i++) {
        var tr = frameDom.getElementsByTagName("tr")[i];

        for (let j = 0; j < 7; j++) {
            var td = tr.getElementsByTagName("td")[j];
            var tempDate = td.getElementsByTagName("a")[0].title;
    
            if (curDate == tempDate) {
                td.getElementsByTagName("a")[0].click();
                return true;
            }
        }
    }
    return false;
}
pickDate(date);
