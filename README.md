Reticulas cssframework
===================

Reticulas is a css framework to work faster using style sheets.

2009-2013.<br>
Copyright (c) Segundo Fdez: http://segundofdez.com - [@segundo_fdez](https://twitter.com/segundo_fdez) | Sond3: http://sond3.com - [@sond3](https://twitter.com/sond3)<br>
Distributed under the MIT license: http://www.opensource.org/licenses/mit-license.php

More Info: http://cssframework.reticulas.com


Install
-------
1.  Download the latest stable version of reticulas or install with bower:
   ```bash
   bower install reticulas 2.0.0
   ```

3.  Reticulas use less. You can use [lessphp][0], a compiler for LESS written in PHP or [lessjs][2] if you want to use for client-side (modern browsers only).

   You can install [lessphp][0] using [composer][1]. Inside the root directory execute:
   ```bash
   composer install
   ```
   This creates a directory called "vendor" inside "root" with all the necessary stuff.


4.  **If you don´t use [composer][1], and want to use [lessphp][0] you must to add manually:**
   * After download the latest stable version of reticulas, inside "root" create the directory structure "vendor/leafo/lessphp"
   * Download [lessphp][0]. Copy the file 'lessc.inc.php' and paste inside "vendor/leafo/lessphp"
   * To finish, you need to edit the file 'styles.php' (inside the folder "extended") and replace the line with the new route

   ```php
   include "../../vendor/leafo/lessphp/lessc.inc.php";
   ```
5.  **If you don´t use [bower][3], and want to use [lessjs][2] you must to add manually:**
   * After download the latest stable version of reticulas, inside "root" create the directory structure "vendor/lessjs"
   * Download [lessjs][2]. Copy the file 'less.js' and paste inside "vendor/lessjs"

How to use with lessphp
-----------------------
Link the styles.php:
```HTML
<link rel="stylesheet" href="less/extended/styles.php">
```
How to use with lessjs
----------------------
Link the import.less stylesheets with the rel set to “stylesheet/less”:

```HTML
<link rel="stylesheet" href="less/extended/import.less">
```
and include the less.js in the ```  <head> ``` element of your page, like so:

```HTML
<script src="vendor/lessjs/less.js" type="text/javascript"></script>
```

what's inside
----------

<ul>
   <li><strong>reticulas</strong>
      <ul>
         <li><strong>core</strong>
            <ul>
               <li>variables.less (general variables)</li>
               <li>reset.less (reset for html5 elements)</li>
               <li>base.less (basic styles for type, tables, lists...)</li>
               <li>form.less (basic form styles)</li>
               <li>utilities.less (utilities for image replacement, clearfix, float... )</li>
               <li>interface.less (round corners, gradients, tabs...)</li>
            </ul>
         </li>
      </ul>
      
      <ul>
         <li><strong>grids</strong>
            <ul>
               <li>fluid.less (fluid grid for responsive design)</li>
               <li>fixed.less (static grid)</li>
            </ul>
         </li>
      </ul>
   </li>
   <li><strong>extended</strong>
      <ul>
         <li>styles.php</li>
         <li>import.less (configure the files that you need)</li>
         <li>reticulas.less (add your own styles)</li>
      </ul>
   </li>
   <li><strong>vendor</strong></li>
   <li><strong>bower_components

   </strong></li>
</ul>


[0]:http://leafo.net/lessphp/
[1]:http://getcomposer.org/
[2]:http://lesscss.org/
[3]:http://bower.io/

