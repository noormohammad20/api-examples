/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।  */
/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। */
/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 
 */
/* ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। */
/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।  */


const loadComment = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => displayComment(data))
}

loadComment()

const displayComment = (comments) => {
    const sliced = comments.slice(0, 100)


    const commentContainer = document.getElementById('main')
    sliced.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p> ${comment.id} </P>
        <h2> ${comment.name} </h2>
        <div> ${comment.body}</div>
        <button onclick=" loadData(${comment.id})"> ${'click'} </button>
        `
        commentContainer.appendChild(div)
    })

}

const loadData = commentId => {

    fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = comment => {
    console.log(comment)
    const commentDetails = document.getElementById('comment-details')
    const div = document.createElement('div')
    div.innerHTML = `
    <h2> ${comment.postId} </h2>
    <div> ${comment.body}</div>
     <h6> ${comment.gmail}<h6>
    `
    commentDetails.appendChild(div)

}