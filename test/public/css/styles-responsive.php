<?php

header('Content-type: text/css');
include "../../vendor/leafo/lessphp/lessc.inc.php";

$less = new lessc("import-responsive.less");
//$less->setFormatter("compressed");
echo $css = $less->parse();

?>