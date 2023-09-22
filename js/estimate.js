var t = TrelloPowerUp.iframe();
window.estimate.addEventListener('submit', function(event) {
    // Stop the browser trying to submit the form itself.
    event.preventDefault();
    return t.set('card', 'shared', 'estimate', window.estimateSize.value)
        .then(function() {
            t.closePopup();
        })
});

t.render(function() {
    return t.get('card', 'shared', 'estimate')
        .then(function(estimate) {
            window.estimateSize.value = estimate;
        })
        .then(function() {
            t.sizeTo('#estimate');
            var period = window.estimateSize.value ? window.estimateSize.value * 60000 : 60000;
            printNumbers(period);
        });
});


function printNumbers(per) {
    let current = 0;
    console.log(per);
    let timerId = setInterval(function() {
        console.log(current);
        t.alert({
            message: randomSentence()
        })
        current++;
    }, per);
}

function randomSentence() {
    return ['This is a green thing.', 'I have a yellow desk.', 'I think it seems to be red.', 'I am a developer.', 'You are a student.', 'He is good pianist.', 'She is beautiful.', 'You are smart.', 'That is a good idea.', 'That music a fantastic.'][Math.floor(Math.random() * 10)];
};