var targetNode;

function init(){
    targetNode = document.getElementById("hasil").firstChild;
}

function hitungKurs(id){
    var inputE1 = document.getElementById(id);
    var hasilUsd = parseFloat(inputE1.value) / 18246;

    targetNode.data = hasilUsd.toFixed(2);

    var li = document.createElement("li");

    var catatan = document.createTextNode("Rp" + inputE1.value + " = US$" + hasilUsd.toFixed(2));

    li.appendChild(catatan);

    var riwayat = document.getElementById("riwayat");
    riwayat.appendChild(li);
}