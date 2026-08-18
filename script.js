const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.querySelector('.question-container');
const resultContainer = document.getElementById('result-container');

// 'Yes' বাটনে ক্লিক করলে
yesBtn.addEventListener('click', () => {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
});

// No বাটন সরানোর ফাংশন (মোবাইল ও ল্যাপটপের জন্য সুপার ফাস্ট)
function moveButton(e) {
    if (e) e.preventDefault(); // ডিফল্ট স্লো রেসপন্স ব্লক করবে
    
    // স্ক্রিনের ভেতরে যেকোনো random জায়গায় সরে যাবে
    const randomX = Math.floor(Math.random() * 250) - 125;
    const randomY = Math.floor(Math.random() * 250) - 125;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// ল্যাপটপের জন্য hover এবং মোবাইলের জন্য touch/pointer ইভেন্ট
noBtn.addEventListener('pointerenter', moveButton);
noBtn.addEventListener('touchstart', moveButton);
noBtn.addEventListener('click', moveButton); // যদি কেউ ক্লিক করে ফেলে তবুও সরে যাবে
