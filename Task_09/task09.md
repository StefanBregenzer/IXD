## Task #09
<br>
<h1>Erstellen eines <b>Reaktions Spiels</b></h1><br>
<h3>Aufgabe</h3><br>
<i>Das Ziel dieser Aufgabe ist es, eine interessante Interaktion zu entwerfen, unter Zuhilfenahme eines ESP32. Ich habe mich dafür entschieden, ein Spiel zu kreieren, welches auf der Reaktionsschnelligkeit des Spielers beruht.</i><br>
<br>
<h3>Konzept</h3><br>
Das Spiel besteht aus 3 unterschiedlich farbigen LEDs und jeweils einem zugehörigen Button. Sobald ein Buzzer ertönt, leuchtet eine der LEDs auf und der Spieler muss innerhalb eines gewissen Zeitraums den zugehörigen Button drücken. Schafft er es, wiederholt sich das Spiel mit einer kürzerer Zeit zu reagieren. Um dem Spieler nicht zu schnell zu überfordern, wird von der Reaktionszeit nicht linear sondern prozentual abgezogen. Ziel ist es, so viele Durchgänge wie möglich zu schaffen.<br>
<br>
<h3>Testphase</h3><br>
Da ich bisher noch nie mit einem ESP oder Arduino gearbeitet habe, möchte ich als ersten Test, um mit der Funktionsweise vertraut zu werden, einen generellen Reaktionstest bauen. Dafür brauche ich nur einen Button und den ESP32. Dieser Test dient auch dazu, direkt die wichtigste Funktion des Spiels, das Messen der Reaktionszeit, zu testen.<br>
<b>hier Bild des Aufbaus</b>
