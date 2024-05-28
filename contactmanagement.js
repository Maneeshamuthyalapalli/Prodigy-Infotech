document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    addContact(name, phone);
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});

function addContact(name, phone) {
    const contactList = document.getElementById('contactList');
    
    const li = document.createElement('li');
    li.textContent = `${name} - ${phone}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        contactList.removeChild(li);
    });
    
    li.appendChild(deleteButton);
    contactList.appendChild(li);
}
