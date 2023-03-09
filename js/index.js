// const loadChat = () =>{
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then(res => res.json())
//     .then(data => displayChat(data.data.tools));
// }

const displayChat = tools =>{
    const chatContainer = document.getElementById('chat-container');
    tools.forEach(tool => {
        console.log(tool);
        /* display 6 cards only
  const showAll = document.getElementById('show-all');
    if(tools.length > 6){
      tools = tools.slice(0, 6);
      showAll.classList.remove(d-none);
    }*/
// step 2: create child for each element
        const chatDiv = document.createElement('div');
        chatDiv.classList.add('col');
        // step-3 set content of the child
        chatDiv.innerHTML = `
        <div class="card h-100">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5> 
          <p class="card-text">${tool.features} </p> <br> 
        <hr>
        </div>
        <div class="card-footer">
          <h1 class="footer-title">${tool.name}</h1>
          <small class="text-muted"><i class="fa-solid fa-calendar-days"></i></small>
          <input type="date">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chatDetailModal">
  Show details
</button>
         
        </div>
      </div> `
        // step-4: appendChild
        chatContainer.appendChild(chatDiv)
    })    
}





// not the best way to load show ALL
document.getElementById('btn-see-more').addEventListener('click', function(){
  
})
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  
  }

  const loadChat = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayChat(data.data.tools));
}


const displayChatDetails = tools =>{
  console.log(tools);
  const modalTitle = document.getElementById('chatDetailModalLabel');
  modalTitle.innerText = data.data.name;
}






loadChat()







        