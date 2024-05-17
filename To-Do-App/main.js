function addTask(){
    var input = document.querySelector('#inputtask').value; 
    var value = input.trim();
    if(input === ''){
        alert('Please Enter Task!');
    }else{
        var lists = document.querySelector('.list-group');
        var listItem = document.createElement('li');
        listItem.innerHTML = input;
        listItem.className= 'list-group-item d-flex justify-content-between align-items-center';
        var rmicon = document.createElement('i');
        rmicon.className = 'fa-solid fa-trash';
        var completeIcon = document.createElement('i');
        completeIcon.className = 'fa-solid fa-check';
        rmicon.onclick = function(){
            listItem.removeChild(rmicon);
            listItem.appendChild(completeIcon);
            alert('Task Completed!');
            // listItem.classList.add('bg-info');
        listItem.style.backgroundImage ="url('https://wallpapercave.com/wp/wp7664129.jpg')";
            // listItem.remove();
        }
        completeIcon.onclick = function(){
            listItem.removeChild(completeIcon);
            listItem.appendChild(rmicon);
            alert('Task Re-Assign!');
            listItem.classList.remove('bg-info');
            listItem.style.background='white';
            // listItem.remove();
        }
        listItem.appendChild(rmicon);
        lists.appendChild(listItem);


    }
}
