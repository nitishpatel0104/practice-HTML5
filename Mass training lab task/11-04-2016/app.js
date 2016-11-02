
// var num = 0;

// var a = prompt("enter your desire table number");

// function tableFunction(){
//     for(var i=1; i<=20; i++){ 
//        document.write( "<span>" + a + "</span>" + "*" +"<span>"+i+"</span>" + "=" + "<span>"+ a*i +"</span>"+ "<br/>");
//     }
// }

// function diamond( n ) 
// {
//     n = parseInt(n,20);

//     var i, s;

//     // top: 1 to n
//     document.write("<pre>");
//     for(i = 1; i <= n; i++ )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; s++ )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; s++ )
//         {
//             document.write(" *");
//         }
//         document.write("\n");
//     }
//     // bottom: n-1 down to 1
//     for(i = n-1; i >= 1; i-- )
//     {
//         // write n-i spaces:
//         for ( s = 1; s <= n-i; s++ )
//         {
//             document.write(" ");
//         }
//         // then write i asterisk+space sets:
//         for ( s = 1; s <= i; s++ )
//         {
//             document.write(" *");
//         }
//         document.write("\n");
//     }
// }

// diamond(20);

//  var num;
// function fibonacci(num){
//     var temp;
//     var p1 = 0;
//     var p2 = 1;
//     var num = prompt("Enter Number of terms",num);
    
//     for (var i = 0; i < num; i++){
//         if (i <= 1){
//             temp = i; 
//         }
//         else {
//             temp = p1 + p2;
//             p1 = p2;
//             p2 = temp;
//         }
//          document.write(temp + "</br>");
//     }
       
//     }

// fibonacci(num);