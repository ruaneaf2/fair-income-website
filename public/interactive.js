document.addEventListener('DOMContentLoaded', function () {
    const round1 = document.getElementById('round1');
    const round2 = document.getElementById('round2');
    const round3 = document.getElementById('round3');
    const round4 = document.getElementById('round4');
    const finalOutcome = document.getElementById('finalOutcome');

    const nextRound1 = document.getElementById('nextRound1');
    const nextRound2 = document.getElementById('nextRound2');
    const nextRound3 = document.getElementById('nextRound3');
    const showOutcome = document.getElementById('showOutcome'); // Corrected ID

    nextRound1.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="round1"]:checked');

        if (selectedOption) {
            console.log('Selected option for Round 1:', selectedOption.value);
            round1.style.display = 'none';
            round2.style.display = 'block';
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    nextRound2.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="round2"]:checked');

        if (selectedOption) {
            console.log('Selected option for Round 2:', selectedOption.value);
            round2.style.display = 'none';
            round3.style.display = 'block';
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    nextRound3.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="round3"]:checked');

        if (selectedOption) {
            console.log('Selected option for Round 3:', selectedOption.value);
            round3.style.display = 'none';
            round4.style.display = 'block';
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    showOutcome.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="round4"]:checked');

        if (selectedOption) {
            console.log('Selected option for Round 4:', selectedOption.value);
            round4.style.display = 'none';
            showOutcome.style.display = 'none';
            finalOutcome.style.display = 'block';
            displayOutcomeMessages(selectedOption.value);
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    function displayOutcomeMessages(selectedOption) {
        finalOutcome.innerHTML = '<h2>Final Outcome Based on Choices:</h2>';
        switch (selectedOption) {
            case 'A':
                finalOutcome.innerHTML += '<p>If Most Choices Were A: ""Oh no, prioritizing housing in a safer neighborhood meant you had to cut back on healthcare and groceries. As winter approached, the lack of proper nutrition and heating led to a severe flu. Missing work for a week cost you $400 in lost wages, putting you further behind on your bills. Your decision to ignore the medical bill also came back to haunt you, as it damaged your credit score, making future financial assistance or rentals more challenging to secure.""</p>';
                break;
            case 'B':
                finalOutcome.innerHTML += '<p>If Most Choices Were B: ""By trying to save and pay off unexpected bills, youve ended up in a precarious situation. Skipping rent to cover the sudden medical bill resulted in receiving an eviction notice. The stress of potentially losing your home worsened your health, but without sufficient funds, you couldnt afford another doctors visit. Public transportation didnt cover your work hours fully, leading to a $300 cut in your monthly income. This reduction made it impossible to catch up on rent, pushing you closer to eviction.""</p>';
                break;
            case 'C':
                finalOutcome.innerHTML += '<p>If Most Choices Were C: ""Deciding to borrow money and skip bills for immediate relief has led to accumulating debts. The high-interest loan for the medical bill now amounts to $700, far more than the original expense. Additionally, borrowing money strained your relationships, leaving you feeling isolated. When you chose to skip other bills to afford heating, utility companies sent final notices, and your water was cut off. The financial strain has become overwhelming, leading to constant anxiety and uncertainty about the future.""</p>';
                break;
            default:
                break;
        }
    }
});
