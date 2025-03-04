function tablegenerate() {
    var m = document.getElementById("rowcount").value;
    var n = document.getElementById("columncount").value;

    let i;
    var tables = document.getElementById("tablespace");
    tables.innerHTML = "";


    for (i = 0; i < m; i++) {
        var row = tables.insertRow(i);
        for (j = 0; j < n; j++) {
            var col = row.insertCell(j);
            col.innerHTML = i + j;
        }
    }
    tables.border = "2px solid black";
    tables.cellspacing = "6px";
}


function buttongen() {
    var hold = document.getElementById("contain_add");
    var buttonh = document.createElement('button');
    buttonh.textContent = "Click here!";
    buttonh.id = "createdbutton";
    hold.innerHTML = "";
    buttonh.style = "background-color:red";

    buttonh.addEventListener("mouseover", function (event) {
        event.target.style = "background-color:green";
    });
    buttonh.addEventListener("mouseleave", function (event) {
        event.target.style = "background-color:red";
    });

    hold.appendChild(buttonh);

    var lb = document.createElement('br');
    var lb2 = document.createElement('br');
    hold.appendChild(lb);
    hold.appendChild(lb2);

    var textboxholder = document.createElement('textarea');
    textboxholder.textContent = "This is the text";
    hold.appendChild(textboxholder);

    textboxholder.style = "background-color:green";

    textboxholder.addEventListener("focus", function (event) {
        event.target.style = "background-color:red";
    });
    textboxholder.addEventListener("blur", function (event) {
        event.target.style = "background-color:green";
    });
}

function additem() {
    var el = document.getElementById("add-item").value;
    var list = document.getElementById("orderedlist");

    var hold = document.createElement("li");
    hold.innerHTML = el;

    list.appendChild(hold);
}

function addcount() {
    var v1 = document.getElementById("count");
    let ans = v1.value;
    ans=parseInt(ans);
    ans = ans + 1;
    v1.value = ans;

}
