<?php
	$conexion=mysqli_connect('labs.inspedralbes.cat', 'a21xavcabmil_user', 'Pedralbes22_23', 'a21xavcabmil_proyecto');
?>
<!DOCTYPE html>
<html>
<head>
	<title>RecyclApp</title>
</head>
<body>

<br>

	<table>
		<tr>
			<td>idUsu</td>
			<td>nickname</td>
			<td>email</td>
			<td>FirstName</td>
			<td>LastName</td>
			<td>tokenUser</td>
		</tr>
		
		<?php
		$sql="SELECT * from Persona";
		$result=mysqli_query($conexion, $sql);
		
		while($mostrar=mysqli_fetch_array($result)){
		?>
		<tr>
			<td><?php echo $mostrar['idUsu'] ?></td>
			<td><?php echo $mostrar['nickname'] ?></td>
			<td><?php echo $mostrar['email'] ?></td>
			<td><?php echo $mostrar['FirstName'] ?></td>
			<td><?php echo $mostrar['LastName'] ?></td>
			<td><?php echo $mostrar['tokenUser'] ?></td>
		</tr>
		<?php
		}
		?>
	</table>
</body>
</html>