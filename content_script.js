
// Inject the reminder buttons into the DOM
function addReminderButtons() {
    console.log("Content Script: Running on page!");

    // Use data-testid selector to get each conversation
    const conversations = document.querySelectorAll("div[data-testid='conversation']");

    console.log(`Content Script: Found ${conversations.length} conversations.`);
    
    conversations.forEach( convo => {
        console.log('Content Script: Now injecting button...');

        // Prevent adding a button twice
        if (convo.classList.contains('reminder-button-added')) {
            return;
        }

        const reminderButton = document.createElement('button');
        reminderButton.innerText = 'Reply Later';
        reminderButton.classList.add('reminder-button');

        reminderButton.addEventListener('click', (event) => {
            // Stop the click from opening the conversation
            event.stopPropagation();

            alert('Reminder button clicked!');
        })

        // Append to main container
        // Maybe append to end of conversation element
        convo.appendChild(reminderButton);

        // Mark conversation asprocessed
        convo.classList.add('reminder-button-added');
    });
}

const observerCallback = (mutationList, observer) => {
    // Any time page changes, we re-run search
    addReminderButtons();
}

const observer = new MutationObserver(observerCallback);

// Watch entire body of page for new elements added/removed
observer.observe(document.body, {
    childList: true,
    subtree: true
});

addReminderButtons();