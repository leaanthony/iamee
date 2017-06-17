
#some normal register
echo ""
echo  "----------------------------"
echo "start test normal register"
curl -H "Content-Type: application/json" -X POST -d '{"email":"user1@email1.com","name":"user1","password":"user1password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user2@email2.com","name":"user2","password":"user2password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user3@email3.com","name":"user3","password":"user3password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user4@email4.com","name":"user4","password":"user4password"}' "http://localhost:8080/api/register"
echo ""
echo "--------------------------------------"
echo "normal register test end"

#repeat add
echo ""
echo  "----------------------------"
echo "start test repeat register"
curl -H "Content-Type: application/json" -X POST -d '{"email":"user1@email1.com","name":"xxx","password":"qq"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user2@email2.com","name":"sss","password":"wwww"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user3@email3.com","name":"fff","password":"ttt"}' "http://localhost:8080/api/register"
echo ""
echo "--------------------------------------"
echo "repeat register test end"


#lack of field
echo ""
echo  "----------------------------"
echo "start test lack of field"
curl -H "Content-Type: application/json" -X POST -d '{"email":"user5@email1.com","password":"user1password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user6@email1.com"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user7@email3.com","name":"fff"}' "http://localhost:8080/api/register"
echo ""
echo "--------------------------------------"
echo "lack of field test end"


#some normal register again
echo ""
echo  "----------------------------"
echo "start test normal register again"
curl -H "Content-Type: application/json" -X POST -d '{"email":"user5@email1.com","name":"user1","password":"user1password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user6@email2.com","name":"user2","password":"user2password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user7@email3.com","name":"user3","password":"user3password"}' "http://localhost:8080/api/register"

curl -H "Content-Type: application/json" -X POST -d '{"email":"user8@email4.com","name":"user4","password":"user4password"}' "http://localhost:8080/api/register"
echo ""
echo "--------------------------------------"
echo "normal register test end again"


#test login
#normal login
echo ""
echo "start normal login"
echo  "----------------------------"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user1@email1.com","password":"user1password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user2@email2.com","password":"user2password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user3@email3.com","password":"user3password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user4@email4.com","password":"user4password"}' "http://localhost:8080/api/login"

echo ""
echo "normal login test end"
echo  "----------------------------"

#login lack of field
echo ""
echo "start lack of field login"
echo  "----------------------------"

 curl -H "Content-Type: application/json" -X POST -d '{"password":"user1password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user2@email1.com"}' "http://localhost:8080/api/login"
echo ""
echo "lack of field login test end"
echo  "----------------------------"

#login wrong password
echo ""
echo "start wrong password login"
echo  "----------------------------"
 curl -H "Content-Type: application/json" -X POST -d '{"email":"user1@email1.com","password":"wronguser1password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user2@email1.com","password":"wronguser2password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user5@email1.com","password":"user3password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user6@email1.com","password":"user4password"}' "http://localhost:8080/api/login"
echo ""
echo "wrong password login test end"
echo  "----------------------------"
#normal login again
echo ""
echo "start normal login again"
echo  "----------------------------"
 curl -H "Content-Type: application/json" -X POST -d '{"email":"user5@email1.com","password":"user1password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user6@email2.com","password":"user2password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user7@email3.com","password":"user3password"}' "http://localhost:8080/api/login"

 curl -H "Content-Type: application/json" -X POST -d '{"email":"user8@email4.com","password":"user4password"}' "http://localhost:8080/api/login"
echo ""
echo "normal login test end again"
echo  "----------------------------"