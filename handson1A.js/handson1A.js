function CheckGrade() {
    let midterm = document.getElementById("Midterm grade").value;
    let final = document.getElementById("final grade").value;

    console.log(midtermgrade);
    //midtermgrade > = 75 

    console.log(finalgrade);
    //finalgrade > = 76 

     if (finalgrade >= 75 && midtermgrade === "") {
     
        console.log("Please input your midterm & final grade");
     }

     else if (midtermgrade === "") {
         console.log("please input your midterm grade");

     } else if (finalgrade === "") {
          console.log("please input your final grade");

     } else if (midtermgrade >= 75 && finalgrade >= 75) {
         console.log("PASSED"); 
     } else if ("midtermgrade <75 && finalgrade <75") {
      console.log("FAILED");
     }
     }
     
     document.getElementById("Compute").onclick = function() {CheckGrade()};
      
     