<?php
    //add data validation (ok?)
    //find how to save previous requests
    //how to see the time of script's work
    //current time
    function validate($x, $y, $r){
        //echo 'Current data'.$x;
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
    $start=microtime(true);
    $x = $_GET["X"];
    $y = $_GET["Y"];
    $r = $_GET["R"];

    if(!validate($x, $y, $r)){
        echo "<script type='text/javascript'>alert('Введены некорректные данные!');</script>";
    }
    else{
        $result = check($x, $y, $r);
        $scripttime = number_format(microtime(true) - $start, 5, '.');
        $currentdate = date("Y-m-d H:i:s");
        $response = "<tr><td>$x</td><td>$y</td><td>$r</td><td>$result</td><td>$scripttime</td><td>$currentdate</td></tr>";
        echo $response;
    }