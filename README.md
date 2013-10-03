Reticulas cssframework
===================

Reticulas is a css framework to work faster using style sheets.

2009-2013.<br>
Copyright (c) Segundo Fdez: http://segundofdez.com - [@segundo_fdez](https://twitter.com/segundo_fdez) | Sond3: http://sond3.com - [@sond3](https://twitter.com/sond3)<br>
Distributed under the MIT license: http://www.opensource.org/licenses/mit-license.php

More Info: http://cssframework.reticulas.com


Install 
-------
1.  Download the latest stable version of reticulas.
2.  Reticulas use [lessphp][0], a compiler for LESS written in PHP. You can install it using [composer][1]. 
   
   Inside the css folder execute
   ```bash
   composer install
   ```
   This creates a directory called "libraries" inside "core" with all the necessary stuff.

3.  **If you don´t use [composer][1], you must to add [lessphp][0] manually:**
   * After download the latest stable version of reticulas, inside "core" create the directory structure "libraries/leafo/lessphp"
   * Download [lessphp][0]. Copy the file 'lessc.inc.php' and paste inside "libraries/leafo/lessphp"
   * To finish, you need to edit the file 'styles.php' (inside the folder "extended") and replace the line with the new route

   ```php
   include "../reticulas/libraries/leafo/lessphp/lessc.inc.php";
   ```

How to use
----------
Put in your html document.
```HTML
<link rel="stylesheet" href="css/extended/styles.php">
```

what's inside
----------

<ul>
   <li><strong>reticulas</strong>
      <ul>
         <li><strong>core</strong>
            <ul>
               <li>reset.css (reset for html5 elements)</li>
               <li>base.css (basic styles for type, tables, lists...)</li>
               <li>form.css (basic form styles)</li>
               <li>interface.less (round corners, gradients, tabs...)</li>
               <li>utilities.less (utilities for image replacement, clearfix, float... )</li>
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
      <ul>
         <li><strong>libraries</strong></li>
      </ul>
   </li>
   <li><strong>extended</strong>
      <ul>
         <li>styles.php</li>
         <li>import.less (configure the files that you need)</li>
         <li>reticulas.less (add your own styles)</li>
      </ul>
   </li>
</ul>


[0]:http://leafo.net/lessphp/
[1]:http://getcomposer.org/

