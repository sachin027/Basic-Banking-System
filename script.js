let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

// Send Money
function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var name = ["naxu","G","B"];

   for(let i=0;i<10;i++){
      if(enterName!=name[0] && enterName!=name[1] && enterName!=name[2] ){
         alert(`This user has not account in our bank`)
         break;
      }
   }
   
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   if (enterAmount > 10000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      ₹ ${enterAmount} is sent to ${enterName}@email.com.`)

      // Transaction History 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹ ${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }

}
