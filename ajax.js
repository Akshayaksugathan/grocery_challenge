const grocerry_lst = document.querySelector("#grocerry_table > tbody");
//console.log(grocerry_lst);

function show_list(){
    const request = new XMLHttpRequest();
    request.open("get","list.json");
    request.onload=()=>{
        try {
            const json = JSON.parse(request.responseText);
            display(json);
        } catch (e) {
            console.warn("Error");
        }
    };
    request.send();
}

function display(json){
    //console.log(json);

    //  while(grocerry_lst.firstChild){
    //      grocerry_lst.removeChild(grocerry_lst.firstChild);
    //  }

    json.forEach((row) => {
        //console.log(row);
        const tr = document.createElement("tr");
        row.forEach((cell)=>
        {
            //console.log(cell);
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
       grocerry_lst.appendChild(tr);
    });

}

document.addEventListener("DOMContentLoaded",()=>{show_list();});



