
public class Array{

    public static void main(String [] args){


       int [] [] Image={{10,20,30,40},
                       {102,30,40,40}};


    
       for(int I=0;I<Image.length;I++){


        System.out.println("Col:"+I);
         for(int Y=0;Y<4;Y++){

            System.out.println(Image[I][Y]);
            
         }
       }






    }
}