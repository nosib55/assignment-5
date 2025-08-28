1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans==
getElementById:   :এর মাধ্যমে একটি Element  সিলেক্ট করা হয়। 

getElementsByClassName  :  এর মাধ্যমে কোন নির্দিষ্ট ক্লাসের নাম দেওয়া যতগুলো element থাকবে সবগুলোকে সিলেক্ট করা হয়।

 querySelector  :  সিএসএস সিলেক্টর ব্যবহার করে শুধু প্রথম element কে সিলেক্ট করে।

 querySelectorAll  : সিএসএস এর একটা ব্যবহার করে সকল element সিলেক্ট করে।




 2.How do you create and insert a new element into the DOM?

ans===
let new = document.createElement("h1");
new.textContent="HELLO PH"
document.body.appendChild(new)

3..What is Event Bubbling and how does it work?

ans==
Event bubbling মানে হলো যখন কোনো element-এ event ঘটে, তখন সেই event ভেতর থেকে বাইরের parent element গুলো পর্যন্ত ছড়িয়ে যায়।যদি child বাটনে ক্লিক করি, আগে "Child clicked", তারপর "Parent clicked" হবে কারণ event bubble হয়ে parent পর্যন্ত যায়.....

4..What is Event Delegation in JavaScript? Why is it useful?

ans===
Event delegation হলো একটি parent element-এ event listener বসানো, তারপর সেই parent-এর ভিতরের child element গুলোকে event handle করা।

use...performance ভালো হয়, নতুন child যোগ হলেও কাজ করে।


5..What is the difference between preventDefault() and stopPropagation() methods?

ans===preventDefault()
কোনো element-এর default কাজ বন্ধ করে।
যেমন: link এ ক্লিক করলে normaly অন্য পেজে যাবে, কিন্তু preventDefault দিলে যাবে না।

stopPropagation()
Event bubbling বা capturing বন্ধ করে দেয়।
অর্থাৎ event উপরে parent element-এ আর যাবে না।