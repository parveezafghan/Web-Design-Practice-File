  WITH
--- drop column , Database ,Table
alter table std drop COLUMN name;


drop table std;

drop database school;

--- rename column
alter table std change F_Name f_name varchar(222);



--- Rename Table Name;
alter table std Rename to Student;


-- Modify Name datatype and Add  constrain and deafult
aler table student modify COLUMN name nvarchar(222);
alter table student modify column name varchar(111) not null;
alter table student modify column name varchar(222) default 'Student';


-- drop Default Constraint
alter table  std alter column drop name;

-- Delete database

drop database Shool;

-- Delete Table


drop table std;

-- Delete column

alter table std drop column std ;




--- add Column
alter table stdd  add Address varchar(22);

-- add unique Constraint
alter table std add UNIQUE(Account_Number);


-- Athoer way To add Unique
create table std (id int  ,Account_number int  ,password varchar(222) , constraint unique(id,Account,password));



--- Remove unique constraint 


show index from std;

show index from std;
alter table std drop index Account_Number;

alter table std drop index Acount_id;

alter table std drop index Account_id;

Alter table std drop index name;

alter table std drop index name
-- primary constraint add multiful column
create table std (id int  ,Account_Number  int ,primary key(id,Account_Number));




-- add primary key

alter table stdd add primary key(id);


-- drop primary key

alter table std drop constraint primary key;


 
-- add Foreign key


alter table std add constraint fk foreign key (customer_id) references Customer(customer_id);


-- drop foreign key


alter table std drop foreign key fk;








alter table std add constraint KF foreign key(Coures_id) references Cours(Coures_id);


atler table std drop foreign key FK;

 


-- change table name , change colum  name , Modify column datatype size add default constraint

-- drop colunm






---insert full Row


insert into std values(1,"jamil",22);

insert into std values(2,"Amanullah",22) , (3,"parveez",23);


---insert with column Name


insert into std (id,Name ,age) values(1,"parveez",23);


-- insert with specific column 


insert into std(id) values(1),(2);
insert into std(id,Name) vlaues(4,"jamil"),(5,"Norullah");


--- insert with multifull rows


insert into std (id,Name ,age) values(1,"jamil",22),(2,"khan",22);




--single update 
update std set name="parveez" where id=1;


--- update mutiful Columns

update std set Name="jamil",age=33 where id=2;


---update all Row



update std set Name="jamil",age=33; --in this case All Record will update with Name jamil and age 33


---delte single tupe or Record


delete from std where id=1;




--- select all Column


select * from std ;


--- select Specific Column


select Name , age , Eamil from std;



--- select data condition base


select * from std where id=1;
select Name, Eamil from std where id=5;


--select data width limit

select * from std limit 3;
select Name from std limit 9;


--- select data with offset 



select * from std limit 10  OFFSET 5; -- it skip 5 Record start from 6


select * from std limit 100 offset 50-- it will skip 50 Record and start from 51 <=100



--- limt with condtion


select Department from shcool where Departent="BCS" limit 10; -- it will show BCS 10 REcord;
 