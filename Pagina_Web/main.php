<?php
	$conexion=mysqli_connect('labs.inspedralbes.cat', 'a21xavcabmil_user', 'Pedralbes22_23', 'a21xavcabmil_proyecto');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reclycapp</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shorthandcss@1.1.1/dist/shorthand.min.css" />
    <link rel="stylesheet" href="css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
        <link rel="shortcut icon" type="image/x-icon" href="Logo_1.png">
          <link rel="stylesheet" src="css.css">
            <img class="max-h-l10 w-auto" src="Logo.png"/>
 
</head>
<body>
 <div id="nav-items" class="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
  <button type="button"> <img src="25694.png" height="80" width="50" class="fs-s1 mx-3 py-3 indigo no-underline hover-underline" onclick="window.location='http://localhost/Project/Pagina_Web/'"></button>
  </div>
<body class="bg-black muli">
    <nav class="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black">
        <div class="flex justify-between">
            <a href="#" class="flex items-center p-2 mr-4 no-underline">
         

	<h1><table class="fs-s1 mx-3 py-3 indigo no-underline hover-underline">
</h1> 
		<tr>
		
			<td>idUsu&nbsp;&nbsp;</td>
			 
			<td>nickname&nbsp;&nbsp;&nbsp;</td>
			<td>email</td>
			<td>FirstName&nbsp;&nbsp;</td>
			<td>LastName&nbsp;&nbsp;&nbsp;</td>
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
			<td><?php echo $mostrar['email'] ?>&nbsp;&nbsp;</td>
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
