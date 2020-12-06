 <?php
 $id	=$_POST['id'];
 $name	=$_POST['name'];
 $email	=$_POST['email'];
 $phone =$_POST['phone'];
 $password	=$_POST['password'];

 $conn= new mysqli('localhost','root', '','shindory');
 if($conn->connect_error){
 	die('Connection Failed : '.$conn->connect_error);

 }else{
 	$stmt = $conn->prepare("insert into user (id,name,email,phone,password) values(?,?,?,?,?)");
	$stmt->bind_param("issis",$id,$name,$email,$phone,$password);
 	$stmt->execute();
 	echo "registration successfully...";
 	header("location: home2.html");
 	$conn->close();
 }