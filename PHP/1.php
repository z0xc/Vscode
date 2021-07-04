<?php
include './config.php';
if(false&&reset(array_keys($_GET))!="DEBUG"){
    header("HTTP/1.1 503 Service Temporarily Unavailable");
    die('<script>document.write(\'<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"><title>Service Temporarily Unavailable</title></head><body><br><hr><center><h1>This site is temporarily down for maintenance</h1></center><hr> <center><h5>\'+new Date()+\'<br>Powered by HBCHAN.TOP</h5></center></body></html>\')</script>');
}

if(!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == 'off'){
    Header("HTTP/1.1 301 Moved Permanently");
    header('Location: https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
}

if(!isset($_COOKIE["SID"])){
    Header("HTTP/1.1 303 See Other");
    Header("Location: ./validate");
}else{
    if (!verify($_COOKIE["SID"])) {
        //setcookie("SID",SIDGen($uuid,false),time()+3600*24*600);
        //header('HTTP/1.0 404 Not Found');
        header('HTTP/1.0 401 Unauthorized');
    }else{
        echo <<<EOF
        <!DOCTYPE html><html><head><meta charset=utf-8><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"><meta name="apple-mobile-web-app-capable" content="yes"/><meta name="theme-color" content="#4378be" /><link rel="apple-touch-icon-precomposed" sizes="144x144" href="./qywx.png"><link rel="apple-touch-icon-precomposed" sizes="120x120" href="./qywx.png"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="./qywx.png"><link rel="apple-touch-icon-precomposed" href="./qywx.png"><title>企业微信</title><link rel=manifest href=/imfree/manifest.114b637b7c6ff04173a10720ace83eed.json crossorigin=use-credentials><link href=/imfree/static/css/app.07adaabc51023a2540a034851aef6eef.css rel=stylesheet></head><body><div id=app></div><script type=text/javascript src=/imfree/static/js/manifest.8267cb8faad3d2a6a268.js></script><script type=text/javascript src=/imfree/static/js/vendor.b9ad295257e4a3e839eb.js></script><script type=text/javascript src=/imfree/static/js/app.7cc97ba07eb14402b5df.js></script></body></html>
EOF;
    }
}
?>
