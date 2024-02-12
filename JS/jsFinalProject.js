function billingFunction(){
    var x=document.getElementById("same");
    if(x.checked){
        var y=document.getElementById("shippingName");
        var z=document.getElementById("shippingZip");
        document.getElementById("billingName").value=y.value;
        document.getElementById("billingZip").value=z.value;
    }
    else{
        document.getElementById("billingName").value="";
        document.getElementById("billingZip").value="";
        document.getElementById("billingName").removeAttribute("required");
        document.getElementById("billingZip").removeAttribute("required");
    }
}