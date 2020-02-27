function showMessage() {
    let moneyin = parseInt(document.getElementById("moneyin").value);
    let month = parseInt(document.getElementById("month").value);
    let moneyout = 0;
    moneyout = moneyin * (Math.pow(1.0058, month));
    document.getElementById("result").innerHTML = "Tổng số tiền bạn nhận được là: " + moneyout + " VNĐ.";
}