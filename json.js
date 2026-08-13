
const json_file=`{


    "name":"parveez",
    "last_Name":"Afghan",
    "id":18890,
    "inf":{
        "Address":["Afghanistan","jalalabad","Hadi"],
        "Education":{"Univesity":"BCS","English":"DELL","Programing_Couress":["C++","java","python",["html","css","javaScript","Boostrap","React","Mysql"]]}
    }
}`

const json_con_To_js=JSON.parse(json_file);
const name=JSON.stringify(json_con_To_js.name);
const last_name=JSON.stringify(json_con_To_js.last_name);
const id=JSON.stringify(json_con_To_js.id);
const inf=JSON.stringify(json_con_To_js.inf);
const Addres=JSON.stringify(json_con_To_js.inf.Address);
const Education=JSON.stringify(json_con_To_js.inf.Education);
const University=JSON.stringify(json_con_To_js.inf.Education.Univesity);
const English_Deploma=JSON.stringify(json_con_To_js.inf.Education.English);
const Programing_coures=JSON.stringify(json_con_To_js.inf.Education.Programing_Couress);
const web_development=JSON.stringify(json_con_To_js.inf.Education.Programing_Couress[3]);
console.log(web_development);








