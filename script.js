document.addEventListener('DOMContentLoaded', function() {
    const contributionsList = document.getElementById('contributions-list');

    const contributions = [
        "Pioneered the Green Revolution in India",
        "Introduced high-yielding wheat and rice varieties",
        "Established the Indian Council of Agricultural Research (ICAR)",
    ];

    
    contributions.forEach(contribution => {
        const li = document.createElement('li');
        li.textContent = contribution;
        contributionsList.appendChild(li);
    });
});
