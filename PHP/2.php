<?php
include './config.php';

function getIp()
{
    if ($_SERVER["HTTP_CLIENT_IP"] && strcasecmp($_SERVER["HTTP_CLIENT_IP"], "unknown")) {
        $ip = $_SERVER["HTTP_CLIENT_IP"];
    } else {
        if ($_SERVER["HTTP_X_FORWARDED_FOR"] && strcasecmp($_SERVER["HTTP_X_FORWARDED_FOR"], "unknown")) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
            if ($_SERVER["REMOTE_ADDR"] && strcasecmp($_SERVER["REMOTE_ADDR"], "unknown")) {
                $ip = $_SERVER["REMOTE_ADDR"];
            } else {
                if (isset ($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'],"unknown")
                ) {
                    $ip = $_SERVER['REMOTE_ADDR'];
                } else {
                    $ip = "unknown";
                }
            }
        }
    }
    return ($ip);
}

if(isset($_COOKIE["SID"])){
    Header("Location: ./");
}
elseif(isset($_POST["id"])){
    try{
        if(strlen($_POST["id"])<5&&strlen($_POST["name"])<2){
            //setcookie("SID",SIDGen("0x00000000","0x00000000",false),time()+3600*24*600);
            //echo "<script>window.location.href='./'</script>";
            Header("HTTP/1.1 401 Unauthorized");
        }
        $id=str_escape($_POST["id"]);
        $name=str_escape($_POST["name"]);
        if(strlen($id)<9&&strlen($name)<2){
            Header("HTTP/1.1 401 Unauthorized");
        }
        $time=date("Y-m-d H:i:s",time());
        $ua=$_SERVER['HTTP_USER_AGENT'];
        //echo str_escape($id);
        $db = new MyDB();
        if(!$db){
            die("DBERROR");
        } else {
            $sql ="SELECT * FROM user WHERE id = '".$id."' and ok = 1;";
            //echo $sql;
            $ret = $db->query($sql);
            $count=0;
            //echo(json_encode($ret));
            while($row = $ret->fetchArray(SQLITE3_ASSOC)){
                $count++;
                //echo "ID = ". $row['id'] . "\n";;
            }
            if($count==1){
                setcookie("SID",SIDGen($id,$name,true),time()+3600*24*600);
                Header("HTTP/1.1 303 See Other");
                Header("Location: ./");
            }else{
                ban:
                setcookie("SID",SIDGen($id,$name,false),time()+3600*24*600);
                //$sql ="INSERT OR IGNORE INTO ban (id,name,time,device) VALUES ('".$id."', '".$name."', '".$time."', '".$ua."'); UPDATE ban SET time = '".$time."',device = '".$ua."' WHERE id LIKE '".$id."';";
                $sql ="INSERT INTO ban (id,name,time,device) VALUES ('".$id."', '".$name."', '".$time."', '".getIp().'; '.$ua."');";
                $ret = $db->exec($sql);
                if(!$ret){
                    die("ERROR");
                    //echo $db->lastErrorMsg();
                }
                echo "<script>window.location.href='./'</script>"; 
                //header('HTTP/1.0 401 Unauthorized');
            }
            $db->close();
            exit;
       }
    }catch(Exception $e){
        //echo $e;
        die("DBERROR");
    }
}else{
    echo<<<EOF
<!doctype html><html><head><meta charset=utf-8><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"><meta name="apple-mobile-web-app-capable" content="yes"/><title>纺大猖行码-LOGIN</title><script id='disable-devtool' src='https://cdn.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js'></script></head>
<body style="text-align:center;vertical-align:middle;text-font:20px">
<form action="./validate" method="post"><br><br><br><br>STUID<br>
<input type="text" name="id" pattern="[0-9]{8,12}" title="学号格式错误"></input><br><br>NAME<br><input type="text" name="name" pattern="[\u4E00-\u9FA5]{2,5}" title="姓名格式错误"></input><br><br><input style="width:100px;height:30px" type="submit" value="LOGIN"></input>
</form><div style="position:absolute;bottom:11px;right:15px;font-size:24px"><a href="./welcome" style="text-decoration:none;color:#ccc">w</a></div>
</body><style>input{width: 95%;height: 30px;font-size: 20px;text-align:center;}button{font-size: 17px;}</style></html>
EOF;
}
?>