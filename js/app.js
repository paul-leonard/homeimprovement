'use strict';

function reactToCustomerContactSubmit(event) {
  event.preventDefault();
  console.log('function being called');

  var incomingUserName = event.target.userName.value;
  var incomingUserEmail = event.target.userEmail.value;
  var incomingUserPhone = event.target.userPhone.value;

  alert('Hello, ' + incomingUserName + '!  Thanks for visiting our site and your interest in our services!  Sadly, this form currently goes nowhere.  Please give us a call or shoot us an email instead.  Thanks and hope to talk to you soon!');

}

var customerSubmitButtonEL = document.getElementById('customercontact');
customerSubmitButtonEL.addEventListener('submit',reactToCustomerContactSubmit);

console.log('JS ran');
