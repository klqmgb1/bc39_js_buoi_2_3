// Bài tập 1
// Đầu vào:
document.getElementById("btnTinh").onclick = function(){
    var luong = document.getElementById("luong").value * 1;
    var ngaylam = document.getElementById("ngaylam").value * 1;
// xử lí:
    var tongLuong =  luong * ngaylam;
// Đầu ra:
    var result =""
    result += "<p> Tổng tiền lương là: " + tongLuong +"</p>"
    document.getElementById("infoLuong").innerHTML = result;
}


// bài tập 2
// Đầu vào:
document.getElementById("btnTinhtrungbinh").onclick = function(){
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;
// xử lí:
    var tong = number1 + number2 + number3 + number4 + number5;
    var trungbinh = tong / 5 ;
// Đầu ra:  
    var result = "";
    result += "<p> Trung bình là: " + trungbinh + "</p>";
    document.getElementById("infoTinhtrungbinh").innerHTML = result;
}

// Bài tập 3
// Đầu vào:
document.getElementById("btnquydoi").onclick = function(){
    var sotien = document.getElementById("sotien").value * 1;
// xử lí:
    var quydoi = sotien *23500;
    var currentformat = Intl.NumberFormat("VN-vn");
// Đầu ra:  
    var result = "";
    result += "<p> " + currentformat.format(quydoi) + "</p>";
    document.getElementById("infoquydoi").innerHTML = result;
}

// bài tập 4
// Đầu vào:
document.getElementById("btnHcn").onclick =function(){
    var chieudai = document.getElementById("chieudai").value *1;
    var chieurong = document.getElementById("chieurong").value *1;
// xử lí:
    var dientich = chieudai * chieurong;
    var chuvi = (chieudai + chieurong) *2;
// Đầu ra:  
    var result = "";
    result += "<p>Diện tích là: " + dientich + "</p>";
    result += "<p>Chu vi là: " + chuvi + "</p>"      
    document.getElementById("infoHcn").innerHTML = result;
}

// Bài tập 5:
// Đầu vào:
document.getElementById("btnkyso").onclick = function(){
    var kyso = document.getElementById("kyso").value *1;
// xử lí:
    var kyso1 = Math.floor(kyso%10);
    var kyso2 = Math.floor(kyso /10);
    var kyso_2 = Math.floor(kyso2%10)   
    var kyso3 = Math.floor(kyso /100);
// Đầu ra:    
    var tongkyso = kyso1 + kyso_2 + kyso3;
    var result = "";
    result += "<p>Tổng 3 ký số là: "+ tongkyso +"</p>"
    document.getElementById("infokyso").innerHTML = result;
}