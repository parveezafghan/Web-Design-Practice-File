class oject_class{

    method1(){

        let obj={

            name:"parveez",
            last_name:"king",
            age:22,
            salary:30000,
        }

        for(let value in obj){

            console.log(value+"  "+ obj[value]);
        }


    }

     method2(){


        let obj_1=new object();

        obj_1.name="jamil";
        obj_1.last_name='khan';
        obj_1.salary=1000000;
        obj_1.fee=2000;



        for(let value in obj_1){

            console.log(value+"   "+obj_1[value]  );
        }
     }
     
}



// object1=new oject_class();
// //object.method1();

// o=new oject_class();
// o.method2();


class object_with_Array{

    constructor(){

        console.log("constractor first class Activite");

    }

    method(){

        let Array=[

            {name:"Parveez",last_name:"Afghtna",age:22},
            {name:"jamil",last_name:"khan",age:19},
            {name:"Amanullah",last_name:"Mobeen",age:19},

        ]


        for(let x=0;x<Array.length;x++){

            console.log(Array[x].name+"   "+Array[x].last_name+"   "+Array[x].age+"   ");
        }
    }
}



start=new object_with_Array();
start.method();











    // let Array=[

    //     {name:"Parveez",last_name:"Afghtna",age:22},
    //     {name:"jamil",last_name:"khan",age:19},
    //     {name:"Amanullah",last_name:"Mobeen",age:19},

    // ]


    // for(let x=0;x<Array.length;x++){

    //     console.log(Array[x].name+"   "+Array[x].last_name+"   "+Array[x].age+"   ");
    // }



class object_class1{


    constructor(developer_name){

        this.developer_name=developer_name;
        console.log("Developer name:"+this.developer_name);
    }


    first_obj(){

        let o=new object();

        o.color_1="wite",
        o.color_2='Red',
        o.color_3="orange",
        o.color_4="yellow";

        for ( value in o){

            console.log(value+"   "+o[value]);
        }
    }
}


ob=new object_class1("Parveez Afghan");
ob.first_obj();