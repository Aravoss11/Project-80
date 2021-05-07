var name_guest=[];

function storename()
{var store_Textbox = document.getElementById("name_input").value;
 name_guest.push(store_Textbox);
 document.getElementById("unsorted_div").innerHTML=name_guest};
 
 function show_list()
 {var show="";
     for(var i=0; i<name_guest.length;i++){
          show=show+name_guest[i]+"<br>";}
         document.getElementById("show").innerHTML=show;
         console.log(show)};
         
         function sort()
         {name_guest.sort()
            var show="";
            for(var i=0; i<name_guest.length;i++){
                show=show+name_guest[i]+"<br>";}
               document.getElementById("sorted_show").innerHTML=show;
               console.log(show)
         }