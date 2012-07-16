<html>
<head>
	<link type="text/css" rel="stylesheet" href="./css/style.css" />
	<script type="text/javascript" src="./js/jquery.js" ></script>
	<script type="text/javascript" src="./js/global.js" ></script>
</head>
<body id="body">
	<div id="wrappper">
	
<?php

	$iRow = 25;
	$iCol = 20;

	$group = array("ajs","qge","grs","jer","ett","asd","vbn","ebs","nfs","yex");
	echo '
	<input type="hidden" id="totalrow" value="' . $iRow . '" />
	<input type="hidden" id="totalcol" value="' . $iCol . '" />
	<table width="100%" border=1 class="table">';
	echo "<tr>";
	for($j=0;$j<$iCol;$j++){
		echo "<td>".$j."</td>";
	}
	echo "</tr>";
	for($i=1;$i<=$iRow;$i++){
		echo "<tr>";
		for($j=1;$j<=$iCol;$j++){
			echo '<td><div class="container" id="way-'.$i . '-' .$j.'" ';
			$rand = rand(1,2);
			if($rand == 1  && $j!=$iCol){
				$array[$i][$j] = 1;
			}
			if($array[$i][$j] ==1 && $array[$i][$j-1] ==0 && $i!=$iRow){
				echo ' style="border-bottom:5px solid black;height:25px;" ';
			}
			echo '><div id="line-'.$i . '-' .$j.'" class="colorDiv">&nbsp;</div></div></td>';
		}
		echo '</tr>';
	}
	echo '<tr>';
	for($j=0;$j<$iCol;$j++){
		echo '<td id="result-$j"></td>';
	}
	echo '</tr></table>';
?>
	</div>
</body>
</html>
