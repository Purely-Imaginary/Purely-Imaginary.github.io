<?php
/**
 * Created by PhpStorm.
 * User: amade
 * Date: 22.05.2016
 * Time: 20:12
 */

echo '<html><head>
<link rel="stylesheet" type="text/css" href="style.css">
</head>';

echo '
<script src="jquery-3.1.0.min.js"></script>
<body>
<div align="center"><table id="table">
        <tr>
            <td rowspan="2" colspan="2" id="dataCell"></td>
            <td colspan="2" id="firstHalf">2x</td>
            <td colspan="2" id="secondHalf">2x</td>
        </tr>
        <tr>
            <td id="Yellow">4x</td>
            <td id="Pink">4x</td>
            <td id="Blue">4x</td>
            <td id="Green">4x</td>
        </tr>
        <tr>
            <td rowspan="2" id="LVs 1-2">3x</td>
            <td id="Lv.1">6x</td>
            <td class="clickable">Yellow<br>Lv.1<br>24x</td>
            <td class="clickable">Pink<br>  Lv.1<br>24x</td>
            <td class="clickable">Blue<br>  Lv.1<br>24x</td>
            <td class="clickable">Green<br> Lv.1<br>24x</td>
        </tr>
        <tr>
            <td id="Lv.2">6x</td>
            <td class="clickable">Yellow<br>Lv.2<br>24x</td>
            <td class="clickable">Pink<br>  Lv.2<br>24x</td>
            <td class="clickable">Blue<br>  Lv.2<br>24x</td>
            <td class="clickable">Green<br> Lv.2<br>24x</td>
        </tr>
         <tr>
            <td rowspan="2" id="LVs 3-4">3x</td>
            <td id="Lv.3">6x</td>
            <td class="clickable">Yellow<br>Lv.3<br>24x</td>
            <td class="clickable">Pink<br>  Lv.3<br>24x</td>
            <td class="clickable">Blue<br>  Lv.3<br>24x</td>
            <td class="clickable">Green<br> Lv.3<br>24x</td>
        </tr>
        <tr>
            <td id="Lv.4">6x</td>
            <td class="clickable">Yellow<br>Lv.4<br>24x</td>
            <td class="clickable">Pink<br>  Lv.4<br>24x</td>
            <td class="clickable">Blue<br>  Lv.4<br>24x</td>
            <td class="clickable">Green<br> Lv.4<br>24x</td>
        </tr> <tr>
            <td rowspan="2" id="LVs 5-6">3x</td>
            <td id="Lv.5">6x</td>
            <td class="clickable">Yellow<br>Lv.5<br>24x</td>
            <td class="clickable">Pink<br>  Lv.5<br>24x</td>
            <td class="clickable">Blue<br>  Lv.5<br>24x</td>
            <td class="clickable">Green<br> Lv.5<br>24x</td>
        </tr>
        <tr>
            <td id="Lv.6">6x</td>
            <td class="clickable">Yellow<br>Lv.6<br>24x</td>
            <td class="clickable">Pink  <br>Lv.6<br>24x</td>
            <td class="clickable">Blue  <br>Lv.6<br>24x</td>
            <td class="clickable">Green <br>Lv.6<br>24x</td>
        </tr>
</table>';

echo '<br><button onclick="resetButton()">Reset</button>';
echo '</div>';
echo '<script src="script.js"></script></body>';
echo '</html>';

