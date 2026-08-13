class Enamil_count_in_zoo{

    constructor(Dog,cat,line,lepart,fox,tiger,got,cow,garapa,eap){

        this.Dog=Dog;     this.got=got;
        this.cat=cat;     this.cow=cow;
        this.line=line;   this.garapa=garapa;
        this.lepart=lepart; this.eap=eap;
        this.fox=fox;
        this.tiger=tiger;
    }


    wild_Enamil(){
        console.log("Dog:"+this.Dog);
        console.log("Cat:"+this.cat);
        console.log("line:"+this.line);
        console.log("lepart:"+this.lepart);
        console.log("Fox:"+this.Fox);
        console.log("Tiger:"+this.tiger);
    }

    A_N_Catagory_Enamil(){
        console.log("Got:"+this.got);
        console.log("Cow:"+this.cow);
        console.log("Garapa:"+this.garapa);
        console.log("Eap:"+this.eap);
    }
}



let Kabul_ZOO=new Enamil_count_in_zoo(10,5,2,3,1,3,10,2,2,4);
// Kabul_ZOO.wild_Enamil();
// Kabul_ZOO.A_N_Catagory_Enamil();