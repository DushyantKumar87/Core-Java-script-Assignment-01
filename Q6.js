let payment = "paytm";

switch(payment){
    case "debit":
    console.log("processing fee is 1.5%");
    break;
    case "credit":
    console.log("Processing fee is 2%");
    break;
    case "paypal":
        console.log("Processing fee is 3%");

    break;
    default:
        console.log("please try different payment method");

}