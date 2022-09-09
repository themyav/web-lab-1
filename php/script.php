<!DOCTYPE html>
<html lang="en">
<?php
    $start=microtime(true);
    //add data validation (ok?)
    //find how to save previous requests
    //how to see the time of script's work
    //current time
    function validate($x, $y, $r){
        echo $x;
        /*foreach ($x as $i){
            echo $i;
        }*/
        $number_pattern = '/^[[:blank:]]*-?\d+[[:blank:]]*$/';
        if(preg_match($number_pattern, $x) and
           preg_match($number_pattern, $y) and
           preg_match($number_pattern, $r)){
            return true;
        }
        else return false;
    }
    function check($x, $y, $r){
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
        else {
            if($x*$x + $y*$y <= $r*$r / 4){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    $x = $_GET["X"];
    $y = $_GET["Y"];
    $r = $_GET["R"];

    if(!validate($x, $y, $r)){
        //header('Location: ' . $_SERVER['HTTP_REFERER']);
        echo "<script type='text/javascript'>alert('Введены некорректные данные!');</script>";
    }
?>
<table>
  <tr>
    <th>Значение X</th>
    <th>Значение Y</th>
    <th>Значение R</th>
    <th>Точка в пределах фигуры?</th>
    <th>Время выполнения скрипта</th>
  </tr>
  <tr>
    <td><?php echo $x?></td>
    <td><?php echo $y?></td>
    <td><?php echo $r?></td>
      <td><?php echo check($x, $y, $r)?></td>
     <td><?php echo round(microtime(true) - $start, 5)?></td>
  </tr>
    <?php setcookie("username", $x, time()+30*24*60*60);
    if(isset($_COOKIE["username"])) {
        echo "Hi " . $_COOKIE["username"];
    }
    ?>
</table>
</html>