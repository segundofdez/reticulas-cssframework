<?php

header('Content-type: text/css');
include "../reticulas/libraries/lessc.inc.php";

$less = new lessc("import.less");
//$less->setFormatter("compressed");
echo $css = $less->parse();

?>