document.getElementById('noticeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const notice = { title, description };
    let notices = JSON.parse(localStorage.getItem('notices')) || [];
    notices.push(notice);
    localStorage.setItem('notices', JSON.stringify(notices));

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

    alert('Notice saved successfully! Check localStorage: "notices"');
});