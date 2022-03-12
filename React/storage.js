const addToLocalStorage = () => {
    const inInput = document.getElementById('storage-id');
    const id = inInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;


    if(id && value){
        localStorage.setItem(id, value);
    }
 
    //bring the value and keep on array
    inInput.value = '';
    valueInput.value ='';

    //We cannot keep obejct or array in local storage or session but we can with JSONparse/stringfy
}