const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.getElementById('result-container');

// 'Yes' বাটনে ক্লিক করলে প্রশ্ন হাইড হয়ে লাভ অ্যানিমেশনসহ 'I Knew It' পেজটি আসবে
yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
});

// 'No' বাটনের ওপর মা우스 নিলে সেটি অন্যদিকে সরে যাবে
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
