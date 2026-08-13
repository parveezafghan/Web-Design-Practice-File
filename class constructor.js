class info{

    constructor(name,second_name){

        this.name=name;
        this.second_name=second_name;
    }

    
    set_inf(){
        
        console.log("Your name:"+this.name);
        console.log("Your second name"+this.second_name);

    }



}


class info1 extends info{

    constructor(age,addres,name,second_name){
       super(name,second_name)
        this.age=age;
        this.addres=addres;

    }

    set_inf1(){

        console.log("Your age:"+this.age);
        console.log("Your addres:"+this.addres);
    }

}

class info2 extends info1{


    constructor(salary,fees,age,addres,name,second_name){
        super(age,addres,name,second_name)
        this.salary=salary;
        this.fees=fees;


    }


    set_inf2(){

        console.log("Your salary:"+this.salary);
        console.log("Your fees:"+this.fees);
    }

}


class info3 extends info2{

    constructor(f_name,nationality,salary,fees,age,addres,name,second_name)
          
    {
        super(salary,fees,age,addres,name,second_name)
        this.f_name=f_name;
        this.nationality=nationality;


    }

    set_inf3(){
        console.log("YOur father name:"+this.f_name);
        console.log("Your nationality:"+this.nationality);
    }


}



object_info3=new info3("faiz mohammad","Afghan",300000,3500,22,"jalalabad","parveez","AFghan");
object_info3.set_inf();
object_info3.set_inf1();
object_info3.set_inf2();
object_info3.set_inf3();