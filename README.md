Reticulas cssframework
===================

Reticulas css framework is a library​ that allows to work faster using css.
Html5 and Css3 support (IE8+). 

More Info:
http://cssframework.reticulas.com

Reticulas cssframework Licence:
Distributed under the MIT license, http://www.opensource.org/licenses/mit-license.php

2009-2013.
Copyright (c) Segundo Fdez (http://segundofdez.com) - @segundo_fdez | Sond3 (http://sond3.com) - @sond3

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Install 
-------
1- Download the latest stable version (v1.5)
2- Reticulas use [lessphp][0], a compiler for LESS written in PHP. 
   You can install it using [composer][1]. Inside the css folder execute
   ```bash
   composer install
   ```
   This creates a directory called "libraries" inside "core" with all the necessary stuff.

3- If you don´t use [composer][1], you must to add lessphp[0] manually:
   * After download the latest stable version of reticulas, inside "core" create the directory structure "libraries/leafo/lessphp"
   * Download lessphp[0] copy the file 'lessc.inc.php' and paste inside "libraries/leafo/lessphp"
   * To finish, you need to edit the file 'styles.php' inside the folder "extended" and replace content with this
   ```php
   <?php

      header('Content-type: text/css');
      include "../reticulas/libraries/leafo/lessphp/lessc.inc.php";

      $less = new lessc("import.less");
      //$less->setFormatter("compressed");
      echo $css = $less->parse();

   ?>
   ```

How to use
----------
Link the stylesheet to your html document.
```HTML
<link rel="stylesheet" href="css/extended/styles.php">
```

Components
----------
* reticulas
** core
*** reset.css (reset for html5 elements)
*** base.css (basic styles for type, tables, lists...)
*** form.css (basic styles for forms)
*** interface.less (round corners, gradients, tabs...)
*** utilities.less (utilities for image replacement, clearfix, float... )
** grids
*** fixed.less (static grid)
*** fluid.less (fluid grid for responsive design)
** libraries (lessphp[0])
* extended
** styles.php
** import.less (configure the files that you need)
** reticulas.less (add your own styles)



[0]:http://leafo.net/lessphp/
[1]:http://getcomposer.org/

