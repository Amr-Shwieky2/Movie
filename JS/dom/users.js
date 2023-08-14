const users = [
    {
      id: 167464,
      firstName: 'Jimmy',
      lastName: 'Arnold',
    },
    {
      id: 578447,
      firstName: 'Martha',
      lastName: 'Goldman',
    },
    {
      id: 864578,
      firstName: 'Tim',
      lastName: 'Burton',
    },
  ];

  let target = document.querySelector(".container"); 
  let olEl= document.createElement("ol"); 
  olEl.style.listStyleType="none"; 

 
    users.forEach(el => {
        let listItem = document.createElement("li"); 
        listItem.setAttribute("data-id",el.id); 
        listItem.textContent=el.firstName+" "+el.lastName; 
        olEl.appendChild(listItem); 
    });
    target.appendChild(olEl); 

