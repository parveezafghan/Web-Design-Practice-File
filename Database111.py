import json as J 



json_file='''

 "name":"parveez",
 "id":18890,
 "age":22
'''


con_py=J.loads(json_file)


print(con_py)