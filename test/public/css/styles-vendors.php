<?php

header('Content-type: text/css');
include "../../vendor/leafo/lessphp/lessc.inc.php";

$less = new lessc("import-vendors.less");
//$less->setFormatter("compressed");
echo $css = $less->parse();

?>