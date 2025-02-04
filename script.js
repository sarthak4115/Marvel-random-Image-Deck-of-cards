let a = document.getElementById("main"); // Corrected variable
let s = "";

let arr = [
    "https://i.pinimg.com/236x/26/85/f3/2685f3f51ea768380a343e33bc498b29.jpg",
    "https://i.pinimg.com/474x/3f/28/7a/3f287a000945262cd30887d0566d12c6.jpg",
    "https://i.pinimg.com/736x/f3/2a/94/f32a943936d178deaebca65a7728c3ab.jpg",
    "https://i.pinimg.com/236x/2e/5e/be/2e5ebe6bac9515a76ec4f8d5de7613e6.jpg",
    "https://i.pinimg.com/236x/ad/cd/3c/adcd3cbe4c77ea659871fef701ba0ae1.jpg",
    "https://i.pinimg.com/236x/e2/b8/42/e2b84257dde2555d9d7e30c0aa2a1a51.jpg",
    "https://i.pinimg.com/236x/1d/e1/8e/1de18e97a8fb35cb8c3082679ba56269.jpg"
];

for (let i = 0; i < 65; i++) {
    let r = Math.floor(Math.random() * 7);
    s += `<div class="card"><img src="${arr[r]}" /></div>`; // Fixed image tag
}

a.innerHTML = s; // Fixed variable usage



