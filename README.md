# Adaptive body min width function
This is the function which adds min-width functionality to body in Firefox and Safari.
For more info go to the

## How to use
Copy the code to project and call the ```adaptiveSizePageScaleInit(300)``` function and pass as an argument the width of the browser window at which it should start (320 by default).

If you want the function to run only in certain browsers, copy the ```startOnSpecificBrowserInit()``` function and replace the line "REQUIRED BROWSER" from the condition
```if (browser == "REQUIRED BROWSER") {adaptiveSizePageScaleInit}```
with the desired option from the list: (  "other", "msEdge", "chrEdge", "opera", "chrome", "ie", "firefox", "safari"  )


# Адаптивная функция body min-width 

Это функция, которая добавляет функциональность min-width к body в Firefox и Safari.
Для получения дополнительной информации перейдите на

## Как использовать
Скопируйте код к себе в проект и вызовите функцию  ```adaptiveSizePageScaleInit(300)``` в качестве аргумента передайте ширину окна браузера, при котором она функция должна запускаться (по умолчанию 320).

Если вы хотите чтобы функция запускалась только в определенных браузерах скопируйте функцию ```startOnSpecificBrowserInit()``` и замените строку "НЕОБХОДИМЫЙБРАУЗЕР" из условия 
```if (browser == "НЕОБХОДИМЫЙБРАУЗЕР") {adaptiveSizePageScaleInit()}``` нужным вариантом из списка: (  "other", "msEdge",  "chrEdge", "opera", "сhrome", "ie", "firefox", "safari"  )
