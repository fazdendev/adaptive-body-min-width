# Responsive function body min-width

This is a feature that adds a min-width feature to the body in Firefox and Safari.
Full article at https://habr.com/en/post/686748/ (ru)

## How to use

### Selecting the desired scaling option 
Select a scaling implementation option.
In both cases, the function is run when the screen width becomes less than or equal to the argument passed to it.
In the transform-function.js file, scaling is done by changing the body - transform: scale() and width properties. The advantage of this method is that the function works on both PC and mobile devices.
In the meta-width-function.js file, the scaling is done by fixation the viewport-width in meta tag. The advantage of this method is that all changes are natural. Because of this, the function works more reliably and is less invasive. The disadvantage of such good quality is that it only works in mobile browsers.

### Function setting
Open the selected file and copy the code to your project. Call the ```adaptiveSizePageScaleInit(300)``` function and pass the viewport width when it shold start working as an argument, if no argument is given, the function will take the value from the min-width body.
If you want the function to run only in certain browsers, call the ```startOnSpecificBrowserInit()``` function and load the document reference "REQUIREDBROWSER" from the conditions required to apply from the list: ("other", "msEdge", " chrEdge", "opera" , "chrome", "ie", "firefox", "safari")
Condition in which to change code ```if (browser == "REQUIREDBROWSER" || browser == "REQUIREDBROWSER") {adaptiveSizePageScaleInit()```

# Адаптивная функция body min-width 

Это функция, которая добавляет функциональность min-width к body в Firefox и Safari.
Полная статья на https://habr.com/ru/post/686748/

## Как использовать

### Выбор варианта масштабирования
Выберите вариант реализации масштабирования.
В обоих вариантах, функция запускается, когда ширина экрана становится меньше или равна переданному в нее значению.
В файле transform-function.js масштабирование происходит за счет измения свойств body - transform: scale() и width. Преимуществом данного метода является то, что функция работает как и на ПК, так и на мобильных устройствах.
В файле meta-width-function.js масштабирование происходит за счет измения мета-тега viewport путем добавления к нему фиксированной ширины взятой из min-width. Преимуществом данного метода является то, что все изменения происходят силами браузера. Из-за этого функция работает надежнее и менее инвазивно. Недостаток такого способа в том, что он работает только в мобильных браузерах.

### Настройка функции
Откройте выбранный файл и скопируйте код к себе в проект. Вызовите функцию  ```adaptiveSizePageScaleInit(300)``` и в качестве аргумента передайте в нее ширину окна браузера, при котором она должна запускаться, если аргумент не указан, функция возьмет значение из min-width body.
Если вы хотите чтобы функция запускалась только в определенных браузерах вызовите функцию ```startOnSpecificBrowserInit()``` и замените строку "НЕОБХОДИМЫЙБРАУЗЕР" из условия нужным вариантом из списка: (  "other", "msEdge",  "chrEdge", "opera", "сhrome", "ie", "firefox", "safari")
Условие, в котором нужно менять код ```if (browser == "НЕОБХОДИМЫЙБРАУЗЕР" || browser == "НЕОБХОДИМЫЙБРАУЗЕР") {adaptiveSizePageScaleInit()``` 
