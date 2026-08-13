// class First{

//     constructor(Developr_name){

//        this.Developr_name=Developr_name;
//        console.log("Develper name:"+this.Developr_name);
//     }


// method1(){


//    let obj={
    

//     name:"parveez",
//     age:22,
//     salary:300000,
//     text:10,
//     net_salary:text/100*salary,

//    }


//    for(let value in obj){

//     console.log(value+"   "+obj[value]);
//    }



//    }



// }

// objc1=new First("parveez Afghan");
// objc1.method1();




// method1(){


//     let obj={
     
 
//      name:"parveez",
//      age:22,
//      salary:300000,
//      text:10,
//     // net_salary:text/100*salary,
 
//     } 
 
//     for(let value in obj){
 
//      console.log(value+"   "+obj[value]);
//     }
 
 
 
// }    
 
 
 
 

//     method1();






class one{

    constructor(name){

        this.name=name;
    }



    first(){


        
// method1(){


    let obj={
     
 
     name:"parveez",
     age:22,
     salary:300000,
     text:10,
     //net_salary:text/100*salary,
 
    } 
 
    for(let value in obj){
 
     console.log(value+"   "+obj[value]);
    }
    }
}


o=new one("parveez");


o.first();












let x=100;


do{

    console.log(x);
    x--;
}while(x>1)




class loop{


    method2(num){
     let count=0;
     let count1=0;
        while(num<100){

            

            if(num%2==0){

            
            console.log(num);
            count++;

            }


            if(num%2!==0){

                count1++;
                console.log("odd:"+num);
            }
            num++;


            
        }

        
        console.log("Event:"+count);
        console.log("odd:"+count1);

    }
}


oo=new loop();
oo.method2(10);
