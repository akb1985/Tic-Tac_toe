var turn = 0;
var a = [2,3,4,5,6,7,8,9,10]

// if(sessionStorage.winner1)
// {
//    document.getElementById("winner1").innerHTML = sessionStorage.winner1
// }
// else{
//     document.getElementById("winner1").innerHTML = 0;
// }
// if(sessionStorage.winner2)
// {
//    document.getElementById("winner2").innerHTML = sessionStorage.winner2
// }
// else{
//     document.getElementById("winner2").innerHTML = 0;
// }
// if(sessionStorage.draw)
// {
//    document.getElementById("draw").innerHTML = sessionStorage.draw
// }
// else{
//     document.getElementById("draw").innerHTML = 0;
// }


function s(t)
{
        
        if(t.innerHTML.length == 0)
        {
            if(turn%2 == 0)
            {
            t.innerHTML = "X"
            document.getElementById(t.id).style.backgroundColor ="red"
            }
             else{
            t.innerHTML = "O"
            document.getElementById(t.id).style.backgroundColor ="blue"
            }    
            turn++;
        }
        a[t.id] = t.innerHTML
        if((a[1]=="X" && a[2]=="X" && a[3]=="X") || (a[4]=="X" && a[5]=="X" && a[6]=="X") || (a[7]=="X" && a[8]=="X" && a[9]=="X") || (a[1]=="X" && a[4]=="X" && a[7]=="X") || (a[2]=="X" && a[5]=="X" && a[8]=="X") || (a[3]=="X" && a[6]=="X" && a[9]=="X") || (a[1]=="X" && a[5]=="X" && a[9]=="X") || (a[3]=="X" && a[5]=="X" && a[7]=="X"))
        {
            alert("X wins");
            if(sessionStorage.winner1)
            {
                   
                    sessionStorage.winner1 = Number(sessionStorage.winner1) + 1;
            }
            else{
                sessionStorage.winner1 = 1;
            }
            document.getElementById("p").innerHTML = "Player <strong style='color:red;'>X</strong> Win"
                       
            document.getElementById("winner1").innerHTML = sessionStorage.winner1;
            // document.getElementById("winner2").innerHTML = sessionStorage.winner2;
            
            for(var i=1;i<=9;i++)
            {
               
                document.getElementById(i).onclick = null;
            }
            
            // winner1++;

        }
        if((a[1]=="O" && a[2]=="O" && a[3]=="O") || (a[4]=="O" && a[5]=="O" && a[6]=="O") || (a[7]=="O" && a[8]=="O" && a[9]=="O") || (a[1]=="O" && a[4]=="O" && a[7]=="O") || (a[2]=="O" && a[5]=="O" && a[8]=="O") || (a[3]=="O" && a[6]=="O" && a[9]=="O") || (a[1]=="O" && a[5]=="O" && a[9]=="O") || (a[3]=="O" && a[5]=="O" && a[7]=="O"))
        {
            alert("O  wins");
            if(sessionStorage.winner2)
            {
                    
                    sessionStorage.winner2 = Number(sessionStorage.winner2) + 1;
            }
            else{
                sessionStorage.winner2 = 1;
            }
            document.getElementById("p").innerHTML = "Player <strong style='color:blue;'>O</strong> Win"
            document.getElementById("winner2").innerHTML = sessionStorage.winner2;
            // document.getElementById("winner1").innerHTML = sessionStorage.winner1
           
            for(var i=1;i<=9;i++)
            {
                
                document.getElementById(i).onclick = null;        
            }

            // winner2++   
        }
    if(turn == 9)
    {   
        // if(sessionStorage.draw)
        //  {  
        //         document.getElementById("draw").innerHTML = Number(sessionStorage.draw)  + 1;
               
        // }
        // else{
           
        //     sessionStorage.draw = 1;
        // }
        document.getElementById("p").innerHTML = "Draw";
       
        // document.getElementById("draw").innerHTML = sessionStorage.draw;
        
    }
}
//  let restart = function(){
//     sessionStorage.remove("winner1");
//     sessionStorage.remove("winner2");
//  }

