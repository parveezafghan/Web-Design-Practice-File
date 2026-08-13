class KNO{

    student_info(full_name,age,f_name,addres){
           this.full_name=full_name
           this.age=age;
           this.f_name=f_name;
           this.addres=addres;
        console.log("name="+this.full_name+"Age="+this.age+"father name="+this.f_name+"address="+this.addres);
    }


    student_EX(salary,fess,tax,discount){
        let n_tax;
        this.salary=salary;
        this.fess=fess;
        this.tax=tax;
        this.discount=discount;
        this.tax=this.salary/100*this.tax;
        this.discount=this.fess/100*this.discount;
        this.fess=this.fess-this.discount;
        this.salary=this.salary-this.tax;
        this.salary=this.salary-this.fess;
        console.log("Your net salary:"+this.salary);
        console.log("Your fess:"+this.fess);
        console.log("Your tax:"+this.tax);
        console.log("Your discount:"+this.discount);
    }
}

let one=new KNO();
one.student_info("parveez AFghan",22,"Faiz mohammad","jalalabad");
console.log("----------------------------------------------");
one.student_EX(10000,3500,10,10);


