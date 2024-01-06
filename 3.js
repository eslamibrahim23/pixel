var btn = document.getElementById("btn");
var table = document.createElement("table");
var c = document.getElementById("color");
document.body.append(table);
btn.addEventListener('click', changetable)
function changetable() {
    var colinput = document.getElementById("colinput").value;
    var rowinput = document.getElementById("rowinput").value;
    // var theader = '<table border="1">\n';
    // var tbody = '';
  table.innerHTML="";
    for (var n = 0; n < rowinput; n++) {
        // tbody += "<tr>";
        var row = document.createElement("tr");
        for (var i = 0; i < colinput; i++) {
           var td =document.createElement("td");
           td.addEventListener('click', function (e) {
            console.log(c.value);
            changecolor(e.target);
    
                    })

        // tbody += "<td onclick='ttt(this)'></td>";
        // (function ttt(r){
        //     console.log("fgjg");
        // });
        row.append(td);
        console.log(row);
       
        }
      
        table.append(row);
        console.log(table);

    }
    
    function changecolor(td){
        if(td.style.backgroundColor === ""){
            td.style.backgroundColor = c.value;
        }
       
    }
  
    // var tfooter = '</table>';
    // document.getElementById('table').innerHTML = theader+tbody+tfooter;



    // var td = document.getElementsByTagName("td");
   
   
    




        
}


//  for (var r = 0; r < z; r++) {
//     console.log(td[r]);
 
// } 