document.addEventListener("DOMContentLoaded", function() {
   
    const scrapedData = [
        { title: "Web Scraping with JavaScript", description: "Learn how to scrape web data using JavaScript and Node.js." },
        { title: "Top 10 JavaScript Frameworks", description: "Discover the most popular JavaScript frameworks for web development." },
        { title: "Understanding Asynchronous JavaScript", description: "A guide to mastering asynchronous programming in JavaScript." },
        { title: "JavaScript ES6 Features", description: "Explore the new features introduced in JavaScript ES6." },
    
    ];

    const resultsList = document.getElementById("results-list");

    scrapedData.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.title}</strong><span>${item.description}</span>`;
        resultsList.appendChild(listItem);
    });
});
