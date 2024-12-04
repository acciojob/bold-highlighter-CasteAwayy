const strongWords = document.querySelectorAll('strong');
function highlight() {
  //Write your code here
 strongWords.forEach((ele)=>{
    ele.style.color = 'green';
 })

}

function return_normal() {
  //Write your code here
  strongWords.forEach((ele)=>{
    ele.style.color = 'black';
 })
  
}
