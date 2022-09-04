# Adaptive body min width function
This is the function which adds min-width functionality to body in Firefox and Safari.
For more info go to the

## How to use
Call the ```adaptiveSizePageScaleInit(300)``` function and pass as an argument the width of the browser window (number) at which it should start (320 by default).

If you want the function to run only in certain browsers, copy the ```startOnSpecificBrowserInit()``` function and replace the line "REQUIRED BROWSER" from the condition
```if (browser == "REQUIRED BROWSER") {adaptiveSizePageScaleInit}```
with the desired option from the list:
"other", "msEdge", "chrEdge", "opera", "chrome", "ie", "firefox", "safari"


# Адаптивная функция body min-width 

Это функция, которая добавляет функциональность min-width к body в Firefox и Safari.
Для получения дополнительной информации перейдите на

## Как использовать

Вызовите функцию  ```adaptiveSizePageScaleInit(300)``` и передайте в качестве аргумента ширину окна браузера (число), при котором она должна запускаться (по умолчанию 320).

Если вы хотите чтобы функция запускалась только в определенных браузерах скопируйте функцию ```startOnSpecificBrowserInit()``` и замените строку "НЕОБХОДИМЫЙБРАУЗЕР" из условия 
```if (browser == "НЕОБХОДИМЫЙБРАУЗЕР") {adaptiveSizePageScaleInit()}``` нужным вариантом из списка:
"other", "msEdge",  "chrEdge", "opera", "сhrome", "ie", "firefox", "safari"
