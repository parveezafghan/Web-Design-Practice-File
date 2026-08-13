class person{

    constructor(){

        console.log("this is the constructor of person class");
    }

    Eat(){

        console.log("i Need the Eat");
    }

    sleep(){

        console.log("I Need the sleep");
    }

    work(){

        console.log("work is Need the of Human");
    }

    salary_set(){

        console.log("my salary Defend of daly work");
    }
}


class Eng extends person{

    constructor(){
    super();
      console.log("this is the constractor of Engineer class");
    }

    work(){

        console.log("I can Code");

        super.Eat();
        super.sleep();

    }

    

}




class DOCTOR extends person{

    constructor(){
      super();
        console.log("this is the constractor of Doctor classs");
    }

    word(){

      console.log("I can help with pecient");

      super.eat();
      super.sleep();
    
    }

    salary_set(){

        console.log("my salary is so GOOD");
    }


}


class_DOCTOR_obj=new DOCTOR();
class_DOCTOR_obj.salary_set();
// class_Eng_obj=new Eng();

