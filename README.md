# Responsive function body min-width

This is a feature that adds a min-width feature to the body in Firefox and Safari.
Full article at https://habr.com/en/post/686748/ (ru)

## How to use

### Select a scaling implementation option.
In both cases, the function is run when the screen width becomes less than or equal to the value passed to it.

In the transform-function.js file, scaling occurs by changing the body - transform: scale() and width properties. The advantage of this method is that the function works on both PC and mobile devices.

In the meta-width-function.js file, scaling is done by changing the viewport meta tag by adding a fixed width taken from min-width to it. The advantage of this method is that all changes are made by the browser. Because of this, the function works more reliably and is less invasive. The disadvantage of this method is that it only works in mobile browsers.
### Function setting.
Open the selected option and copy the code to your project, call the adaptiveSizePageScaleInit(300) function.

As an argument, pass the width of the browser window at which it should be launched, if the argument is not specified, the function will take the width value from the min-width body. When passing the argument manually, it's very important that the body's min-width be equal to the value passed to the function.

If you want the function to run only in certain browsers, remove the call to the adaptiveSizePageScaleInit() function, then copy the startOnSpecificBrowserInit() function to call the code in certain browsers.

In the startOnSpecificBrowserInit() function, select the browsers in which the function should work by replacing the string "REQUIRED BROWSER" from the cross-browser function condition with the desired option from the list: "other", "msEdge", "chrEdge", "opera", "chrome ", "ie", "firefox", "safari".

Condition in which to change the line: if (browser == "REQUIRED BROWSER") {adaptiveSizePageScaleInit()}

# Адаптивная функция body min-width 

Это функция, которая добавляет функциональность min-width к body в Firefox и Safari.
Полная статья на https://habr.com/ru/post/686748/

## Как использовать
### Выберите вариант реализации масштабирования. 
В обоих вариантах, функция запускается, когда ширина экрана становится меньше или равна переданному в нее значению.

В файле transform-function.js масштабирование происходит за счет изменения свойств body - transform: scale() и width. Преимуществом данного метода является то, что функция работает как и на ПК, так и на мобильных устройствах.

В файле meta-width-function.js масштабирование происходит за счет изменения мета-тега viewport путем добавления к нему фиксированной ширины взятой из min-width. Преимуществом данного метода является то, что все изменения происходят силами браузера. Из-за этого функция работает надежнее и менее инвазивно. Недостаток такого способа в том, что он работает только в мобильных браузерах.
### Настройка функции. 
Откройте выбранный вариант и скопируйте код к себе в проект, вызовите функцию  adaptiveSizePageScaleInit(300).

В качестве аргумента передайте в нее ширину окна браузера, при котором она должна запускаться, если аргумент не указан, функция возьмет значение ширины из min-width body. При передаче аргумента вручную, очень важно, чтобы ширина body min-width была равна значению переданному в функцию.

Если необходимо, чтобы функция запускалась только в определенных браузерах уберите вызов функции adaptiveSizePageScaleInit(), после чего скопируйте функцию вызова кода в определённых браузерах startOnSpecificBrowserInit().

В функции startOnSpecificBrowserInit()  выберете браузеры, в которых функция должна работать, путем замены строки "НЕОБХОДИМЫЙБРАУЗЕР" из условия кросс-браузерный функции на нужный вариант из списка: "other", "msEdge",  "chrEdge", "opera", "сhrome", "ie", "firefox", "safari".

Условие, в котором нужно менять строку: if (browser == "НЕОБХОДИМЫЙБРАУЗЕР") {adaptiveSizePageScaleInit()} 
