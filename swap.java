import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class swap{

   public static void main(String[] args) throws Exception {
    
     Class.forName("con.mysql.jdbc.Driver");

     Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/scholl","root","pass");


     String Add_Recored="insert into Student(name,F_name,age) values(?,?,?)";

     String name="parveez";
     String F_name="Faiz Mohammad";
     int age=23;

    PreparedStatement PR=con.prepareStatement(Add_Recored);

    PR.setString(1,name);
    PR.setString(2,F_name);
    PR.setInt(3,age);

    PR.execute();

     
    con.close();



   }
}