<?php

header('Content-type: text/css');
include "../reticulas/libraries/lessc.inc.php";

$less = new lessc("import.less");
echo $css = $less->parse();

?>