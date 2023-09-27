// window.onload = function () {
//     alert("Book your favorite movie today!!");
// };
 
 // JavaScript code
 document.getElementById("numTickets").addEventListener("input", function() {
    const numTickets = parseInt(this.value);
    const totalAmount = numTickets * 10; // Assuming $10 per ticket
    document.getElementById("totalAmount").textContent = totalAmount;
    if (numTickets < 0) {
        document.getElementById("numTickets").classList.add("error");
        document.getElementById("totalAmount").classList.add("error");
    } else {
        document.getElementById("numTickets").classList.remove("error");
        document.getElementById("totalAmount").classList.remove("error");
    }
});

   // JavaScript code
   let numTickets = 0; // Initialize the number of tickets
  
   // Function to increment the number of tickets
   function incrementTickets() {
       numTickets++;
       updateTicketCount();
   }

   // Function to decrement the number of tickets
   function decrementTickets() {
    
       if (numTickets > 0) {
           numTickets--;
           updateTicketCount();
       }
   }
   // Function to update the ticket count and total amount
   function updateTicketCount() {
       const ticketInput = document.getElementById("numTickets");
       const totalAmount = numTickets * 10; // Assuming $10 per ticket

       // Update the input value and total amount
       ticketInput.value = numTickets;
       document.getElementById("totalAmount").textContent = totalAmount;

       // Highlight the input and total amount if there's an error (negative value)
       if (numTickets < 0) {
           document.querySelectorAll(".active").forEach(element => {
               element.style.backgroundColor = "red";
           });
       } else {
           document.querySelectorAll(".active").forEach(element => {
               element.style.backgroundColor = "";
           });
       }
   }

    // Function to check age eligibility
    function checkAge() {
        const ageInput = document.getElementById("age");
        const age = parseInt(ageInput.value);

        if (age < 20) {
            alert("You are not eligible");
            ageInput.classList.add("error");
        } else {
            ageInput.classList.remove("error");
        }
    }


function selectShowTime(element) {
    const showTimes = document.querySelectorAll(".showTimes li");
    showTimes.forEach(time => time.classList.remove("active"));
    element.classList.add("active");
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Get form data and store it in localStorage
    checkAge();

    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        city: document.getElementById("city").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to the next page
    if (formData.age >=20){
        window.location.href = "submitted.html";
    }

});

