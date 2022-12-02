<?php
	$conexion=mysqli_connect('labs.inspedralbes.cat', 'a21xavcabmil_user', 'Pedralbes22_23', 'a21xavcabmil_proyecto');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reclicapp</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shorthandcss@1.1.1/dist/shorthand.min.css" />
    <link rel="stylesheet" href="css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
        <link rel="shortcut icon" type="image/x-icon" href="Logo_1.png">
 
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