class parent{

    king(){

        console.log("have alot of Responsibilite");
    }

    president(){

        console.log("have same  Responsibilities with king");

    }
}





class child extends parent{


    cheif(){


        console.log("have Defense Responsibilities");
    }
}



// class_obj_child=new child();
// class_obj_child.king();
// class_obj_child.president();
// class_obj_child.cheif();


class person{

    constructor(){

        console.log("parent class constructor");
    }

    sleep(){
        console.log("i can sleep");
    }

    eat(){
        console.log("i can Eat");
    }

    work(){
        console.log("i can wrok");
    }
}

class Eng extends person{

    constructor(){
        super();
        console.log("Engineer class constructor");
    }

    work(){
        console.log("i can build software");
    }
}


// Eng_class_obj=new Eng();
// Eng_class_obj.sleep();
// Eng_class_obj.eat();
// Eng_class_obj.work();

class inf{

    constructor(name,last_name){
      this.name=name;
      this.last_name=last_name;
        console.log('inf class Constructor');
    }

    set_name(){

        console.log("YOur naame:"+this.name);
        console.log("Your last name:"+this.last_name);
    }
}


class Set_payment extends inf{

    constructor(salay,fee){
        super(last_name);
        this.salay=salay;
        this.fee=fee;
        
        console.log("payment class constructor");

    }


    Set_salary_method(){

        console.log("Your salary:"+this.salay);
        console.log("Your fess:"+this.fee);
    }



}

inf_class_obj=new Set_payment("parveez",'king',10000,350);
inf_class_obj.Set_name();
inf_class_obj.Set_salary_method();



