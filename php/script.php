<!DOCTYPE html>
<html>
<?php
    function check($x, $y, $z){
        if ($x < 0 and $y > 0){
            return 0;
        }
        else if($x >= 0 and $y >= 0){
            if($x <= $r / 2 and $y <= $r){
                return 1;
            }
            else{
                return 0;
            }
        }
        else if($x <= 0 and $y <= 0){
            if(abs($x+$y) <= $r / 2){
                return 1;
            }
            else{
                return 0;
            }
        }
        else if($x >= 0 && $y <= 0){
            if($x*$x + $y*$y <= $r*$r / 4){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    $x = $_POST["X"];
    $y = $_POST["Y"];
    $r = $_POST["R"];
?>
<table>
  <tr>
    <th>Значение X</th>
    <th>Значение Y</th>
    <th>Значение R</th>
    <th>Точка в пределах фигуры?</th>
  </tr>
  <tr>
    <td><?php echo $x?></td>
    <td><?php echo $y?></td>
    <td><?php echo $r?></td>
    <td><?php echo check($x, $y, $r)?>
  </tr>
</table>
</html>