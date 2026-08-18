const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.getElementById('result-container');

// 'Yes' বাটনে ক্লিক করলে
yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
});

// 'No' বাটনে টাচ করলেই বা দ্রুত সরে যাওয়ার ফাংশন (মোবাইলের জন্য পারফেক্ট)
function moveNoButton() {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// কম্পিউটারের জন্য mouseover এবং মোবাইলের জন্য touchstart বা pointerover যুক্ত করা হলো
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // টাচ করার পর ডিফল্ট ক্লিক আটকে সাথে সাথে সরিয়ে দেবে
    moveNoButton();
});