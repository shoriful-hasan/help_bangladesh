const donationbtn =  document.getElementById('donation_btn');
const historybtn =  document.getElementById('history_btn');
const donation_section_hide_show = document.getElementById('donation_section_hide_show');

// Donation and history button style here start 
historybtn.addEventListener('click',function(){
  
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





})

// Donation and history button style here end 


// Donation and history section show and hide code start here
document.getElementById('donation_btn')
 .addEventListener('click',function(){
    
    elementshowandhide('donation_section_hide_show','bangldesh')
    
 })

document.getElementById('history_btn')
.addEventListener('click',function(){
    elementshowandhide('bangldesh','donation_section_hide_show')
})

// Donation and history section show and hide code end here






document.getElementById('donate_now').addEventListener('click',function(){

    // parseFloat( document.getElementById('main_balance').innerText)

    const main_balance = textvalueInput('main_balance');

    // parseFloat(document.getElementById('donation_input_amount').value)
    const donation_input_amount = inputvalueTakeId('donation_input_amount');

    console.log(donation_input_amount);
    console.log(main_balance);
    
if(donation_input_amount <= main_balance && Number(donation_input_amount) ){

    // main_balance - donation_input_amount

    const donate_balance = subtractionfunc(main_balance,donation_input_amount);

    document.getElementById('main_balance').innerText = donate_balance;

    // parseFloat(document.getElementById('donate_take_balance').innerText)

    const donate_take_balance = textvalueInput('donate_take_balance') ;
     
    // donate_take_balance + donation_input_amount

    const new_donate_taka_balance =additionfunc(donate_take_balance,donation_input_amount);
    
    document.getElementById('donate_take_balance').innerText = new_donate_taka_balance;
    


    document.getElementById('my_modal_1').showModal();


    // document.getElementById('donate_take_balance').innerText += donation_input_amount;

  
    //  donate_take_balance = donation_input_amount;
console.log(donate_take_balance);



    //  donate_take_balance = donation_input_amount;

console.log(donate_take_balance);


// document.getElementById('flood_area').innerText

    const flood_area = textvalueonly('flood_area');
   

    const seconddiv = document.createElement('div');
    const thirddiv = document.createElement('div');


const div = document.createElement('div');

div.classList.add('p-10')
div.classList.add('mb-5')
div.classList.add('space-y-5')
div.classList.add('border')
    


const p = document.createElement('p');

p.innerText = `${new_donate_taka_balance}TK ${flood_area}`        
let span = document.createElement('span');
span.innerText = `time is ${new Date().toLocaleDateString()}`;    


thirddiv.appendChild(p);
seconddiv.appendChild(span);
div.appendChild(thirddiv);
div.appendChild(seconddiv);
   



    console.log(span);
    
    document.getElementById('bangldesh').appendChild(div)






}
else{
   alert('invalid')
    document.getElementById('my_modal_1').close();
    
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