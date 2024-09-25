const donationbtn =  document.getElementById('donation_btn');
const historybtn =  document.getElementById('history_btn');
const donation_section_hide_show = document.getElementById('donation_section_hide_show');

historybtn.addEventListener('click',function(){
    donation_section_hide_show.classList.add
    (
        'hidden'
    )
    historybtn.classList.add
    (
        'btn-success'
    )
    donationbtn.classList.remove(
        'btn-success'
    )
    donationbtn.classList.add(
        'text-black'
    )
})

donationbtn.addEventListener('click',function(){
    donationbtn.classList.add
    (
        'btn-success'
    )
historybtn.classList.remove
(
    'btn-success'
)
historybtn.classList.add('text-black');

donation_section_hide_show.classList.remove
(
    'hidden'
)

})





document.getElementById('donate_now').addEventListener('click',function(){
    const main_balance = parseFloat( document.getElementById('main_balance').innerText);

    const donation_input_amount = parseFloat(document.getElementById('donation_input_amount').value);

    console.log(donation_input_amount);
    console.log(main_balance);
    
if(donation_input_amount <= main_balance && Number(donation_input_amount) ){

    

    const donate_balance = main_balance - donation_input_amount;

    document.getElementById('main_balance').innerText = donate_balance;

    const donate_take_balance = parseFloat(document.getElementById('donate_take_balance').innerText);
     
    const new_donate_taka_balance = donate_take_balance + donation_input_amount;
    
    document.getElementById('donate_take_balance').innerText = new_donate_taka_balance;
    
    


    // document.getElementById('donate_take_balance').innerText += donation_input_amount;

  
    //  donate_take_balance = donation_input_amount;
console.log(donate_take_balance);



    //  donate_take_balance = donation_input_amount;

console.log(donate_take_balance);


    console.log(`the donation balance is ${donate_balance}`);

}
else{
    console.log('invalid ');
    
}

    
    

    
})















// document.getElementById('donate_now').addEventListener('click', function() {
//     const donation_input_amount = parseFloat(document.getElementById('donation_input_amount').value);
  
//     // Get the current main balance value
//     const currentMainBalance = parseFloat(document.getElementById('main_balance').innerText);
  
//     console.log(donation_input_amount);
//     console.log(currentMainBalance);
  
//     if (donation_input_amount <= currentMainBalance && Number(donation_input_amount)) {
//       const donate_balance = currentMainBalance - donation_input_amount;
  
//       document.getElementById('main_balance').innerText = donate_balance;
  
//       const donate_take_balance = parseFloat(document.getElementById('donate_take_balance').innerText);
//       const new_donate_taka_balance = donate_take_balance + donation_input_amount;
//       document.getElementById('donate_take_balance').innerText = new_donate_taka_balance;
  
//       console.log(`the donation balance is ${donate_balance}`);
//     } else {
//       console.log('invalid ');
//     }
//   });