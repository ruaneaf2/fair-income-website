// contact.js
document.addEventListener('DOMContentLoaded', function () {
    const postcodeForm = document.getElementById('postcodeForm');
    const nameForm = document.getElementById('nameForm');
    const templateForm = document.getElementById('templateForm');

    function submitPostcode() {
        const postcode = document.getElementById('postcode').value;
        const mpDetails = findMPDetails(postcode);

        console.log(`Postcode: ${postcode}, MP Name: ${mpDetails.name}`);

        document.getElementById('templateMPName').innerText = mpDetails.name;

        postcodeForm.style.display = 'none';
        nameForm.style.display = 'block';
    }

    function submitName() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

        // Template text with placeholders
        const templateText = `Dear ${document.getElementById('templateMPName').innerText},\n\nI am writing to you today as a concerned member of [Your Electorate] about the pressing issue of income support payments in Australia. Specifically, I seek your support for the necessary and overdue increase of daily income support from $54 to at least $76.\n\n...`; // Include the rest of the template

        // Set the template text with placeholders
        document.getElementById('templateText').innerText = templateText;

        nameForm.style.display = 'none';
        templateForm.style.display = 'block';

        document.getElementById('finalFirstName').value = firstName;
        document.getElementById('finalLastName').value = lastName;
    }

    function findMPDetails(postcode) {
        // Simulate fetching MP details from your data source
        // Replace this with actual code to fetch MP details
        return {
            name: 'Your MP Name',
            email: 'your.mp@example.com',
            electorate: 'Your Electorate'
        };
    }

    // Attach the submitPostcode function to the form submit 
    postcodeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        submitPostcode();
    });

    // Attach the submitName function to the form submit 
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        submitName();
    });
});
