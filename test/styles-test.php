<?php

header('Content-type: text/css');
include "../vendor/autoload.php";

$less = new lessc("test.less");
//$less->setFormatter("compressed");
echo $css = $less->parse();

?>