<?php
function str_escape($string) {
       if (is_string($string)) {
            $string = str_replace('%20','',$string);
            $string = str_replace('%27','',$string);
            $string = str_replace('%2527','',$string);
            $string = str_replace('*','',$string);
            $string = str_replace('"','"',$string);
            $string = str_replace("'",'',$string);
            $string = str_replace('"','',$string);
            $string = str_replace(';','',$string);
            $string = str_replace('<','<',$string);
            $string = str_replace('>','>',$string);
            $string = str_replace("{",'',$string);
            $string = str_replace('}','',$string);
            $string = str_replace('\\','',$string);
            $string = str_replace('script','',$string);
            $string = str_replace('insert','',$string);
            $string = str_replace('update','',$string);
            $string = str_replace('delete','',$string);
            $string = str_replace('select','',$string);
            $string = str_replace('drop','',$string);
            $string = str_replace('eval','',$string);
            //防sql注入
            $string=preg_replace("/insert/i", "",$string);
            $string=preg_replace("/update/i", "",$string);
            $string=preg_replace("/delete/i", "",$string);
            $string=preg_replace("/select/i", "",$string);
            $string=preg_replace("/drop/i", "",$string);
            $string=preg_replace("/load_file/i", "",$string);
            $string=preg_replace("/outfile/i", "",$string);
            $string=preg_replace("/into/i", "",$string);
            $string=preg_replace("/exec/i", "",$string);
            $string=preg_replace("/caipiao_/i", "",$string);
            $string=preg_replace("/union/i", "",$string);
            $string=preg_replace("/(add|change)\s+column/i", "",$string);
            $string=preg_replace("/(select|update|delete)\s+\S*\s+from/i", "",$string);
            $string=preg_replace("/insert\s+into/i", "",$string);
            $string=preg_replace("/show\s+(databases|tables|index|columns)/i", "",$string);
            $string=preg_replace("/alter\s+(database|table)/i", "",$string);
            //防js注入
            $string=preg_replace("/(eval|alert|prompt|msgbox)\s*\(.*\)/i", "",$string);
            $string=preg_replace("/script/i", "",$string);
            $string=preg_replace("/\w+\s*=\s*(\"|')?(java|vb)script:\S*(\"|')?/i", "",$string);
            return $string;
    }
    return "";
}

?>