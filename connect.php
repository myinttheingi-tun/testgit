 <?php


 $id	=$_POST['id'];
 $name	=$_POST['name'];
 $email	=$_POST['email'];
 $phone =$_POST['phone'];
 $password	=$_POST['password'];
 $confirmrpw=$_POST['confirmrpw'];

 $conn= new mysqli('localhost','root', '','shindory');
 if($conn->connect_error){
 	die('Connection Failed : '.$conn->connect_error);

 }else if($password!=$confirmrpw){
	echo'<script> alert("Passwords do not match!!!")</script>';
}
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Invalid email format";
    echo'<script> alert("Invalid email!!!")</script>';
}



 else{
 	$stmt = $conn->prepare("insert into user(id,name,email,phone,password) values(?,?,?,?,?)");
 	$stmt->bind_param("issis",$id,$name,$email,$phone,$password);
 	$stmt->execute();
 	echo "registration successfully...";
 	header("location: login.html");
 	$stmt->close();
 	$conn->close();
 }

 

 ?>