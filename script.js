const list = document.getElementById("issue-name");
const nextBtn = document.getElementById("load_nex");
const prevtn = document.getElementById("load_prev");
const current_page =document.getElementById("currentPage")
let pageNo =1;
let array =[];
fetchData(pageNo)
prevtn.addEventListener("click",()=>{
    if(pageNo<=1) {
        alert("you can't go back")
    }
    else{
        pageNo--
        fetchData(pageNo)
    }
})
nextBtn.addEventListener("click",()=>{

        pageNo++
        fetchData(pageNo)
})

async function fetchData(pageNo){
    current_page.innerText =`Page Number ${pageNo}`
    await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`)
    .then(res=>res.json())
    .then(data=>array=data)
    .catch(e=>console.log(e))
    list.innerHTML =""
    array.map(data =>{
        list.innerHTML +=`<li>${data.title} </li>`
    })
}

