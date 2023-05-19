# Famous Quote Matcher Testing


Return back to the [README.md](README.md) file.


To ensure that Famous Quote Matcher works effectively over a number of sites and devices, I have prepared details and screenshots for you to see the testing I have done to ensure it is very reliable..




## Code Validation




### HTML


I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.




Below is a link for you to see live that my code is valid plus I have enclosed a screenshot in the case for some reason that fails;




| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FPimmz.github.io%2FProject-2%2Findex.html) | ![screenshot](documentation/testing/testing-images/w3validator-html.png) | Pass: No Errors |




### CSS


I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.


Below is a link for you to see live that my code is valid plus I have enclosed a screenshot in case, for some reason that fails;




| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FPimmz.github.io%2FProject-2) | ![screenshot](documentation/testing/testing-images/w3validator-css.png) | Pass: No Errors |




### JavaScript


I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.


Below is a screenshot of JShint validator to confirm no errors


| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/testing/testing-images/jshint.png) | No Errors |






## Browser Compatibility


I have tested Famous Quote Matcher on four different browsers. The first was Chrome, the second was Firefox, the third was Brave and the fourth was Opera. I would have liked to test on Safari but unfortunately, I don’t have access to an Apple device.


- [Chrome](https://www.google.com/chrome)
- [Firefox](https://www.mozilla.org/firefox)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)




I've tested my deployed project on multiple browsers to check for compatibility issues. To ensure that all are working correctly I have also tested for responsiveness on desktop, tablet and mobile


| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome Desktop | ![screenshot](documentation/testing/testing-images/chrome-desktop.jpg) | Works as expected |
| Chrome Tablet| ![screenshot](documentation/testing/testing-images/chrome-tablet.jpg) | Works as expected |
| Chrome Mobile| ![screenshot](documentation/testing/testing-images/chrome-mobile.jpg) | Works as expected |
| Firefox desktop| ![screenshot](documentation/testing/testing-images/Firefox.jpg) | Works as expected |
| Firefox Tablet| ![screenshot](documentation/testing/testing-images/firefox-tablet.png) | Works as expected |
| Firefox Mobile| ![screenshot](documentation/testing/testing-images/firefox-mobile.jpg) | Works as expected |
| Brave Desktop| ![screenshot](documentation/testing/testing-images/brave-desktop.jpg) | Works as expected |
| Brave Tablet| ![screenshot](documentation/testing/testing-images/brave-tablet.jpg) | Works as expected |
| Brave Mobile|![screenshot](documentation/testing/testing-images/brave-mobile.jpg) | Works as expected |
| Opera Desktop| ![screenshot](documentation/testing/testing-images/opera-desktop.jpg) | Works as expected |
| Opera Tablet| ![screenshot](documentation/testing/testing-images/opera-tablet.jpg) | Works as expected |
| Opera Mobile| ![screenshot](documentation/testing/testing-images/opera-mobile.jpg) | Works as expected |








## Responsiveness




I've tested my deployed project on multiple devices to check for responsiveness issues.


| Device | Screenshot | Notes |
| --- | --- | --- |
| ipad mini | ![screenshot](documentation/testing/testing-images/ipad-mini.jpg) | Works as expected |
| ipad air | ![screenshot](documentation/testing/testing-images/ipad-air.jpg) | Works as expected |
| iphonese | ![screenshot](documentation/testing/testing-images/iphone-se.jpg)| Works as expected |
| iphone 12 pro | ![screenshot](documentation/testing/testing-images/iphone12pro.jpg) | Works as expected |
| iphone xr | ![screenshot](documentation/testing/testing-images/iphone-xr.jpg) | Works as expected |
| Nest hub| ![screenshot](documentation/testing/testing-images/nest-hub.jpg) | Works as expected |
| Nest hub Max| ![screenshot](documentation/testing/testing-images/nest-hub-max.jpg) | Works as expected |
| Pixel 5 | ![screenshot](documentation/testing/testing-images/pixel-5.jpg) | Works as expected |
| Surface duo | ![screenshot](documentation/testing/testing-images/surface-duo.png) | Works as expected |
| Galaxy A51 / 71 | ![screenshot](documentation/testing/testing-images/a51.jpg) | Works as expected |
| Galaxy S8 | ![screenshot](documentation/testing/testing-images/s8.jpg) | Works as expected |
| Galaxy S20 Ultra | ![screenshot](documentation/testing/testing-images/s20.png) | Works as expected |




## Lighthouse Audit




I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.


| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Desktop | ![screenshot](documentation/testing/testing-images/lighthouse-desktop.png) | Works as expected |
| Home | Tablet | ![screenshot](documentation/testing/testing-images/lighthouse-tablet.png) | Works as expected |
| Home | Mobile | ![screenshot](documentation/testing/testing-images/lighthouse-mobile.png) | Works as expected |




## User Story Testing






| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to be able to switch off, so that I can relax my mind. | ![screenshot](documentation/testing/title-feature.png) |
| As a new site user, I would like to be challenged mentally, so that I can have a challenge myself. | ![screenshot](documentation/testing/timer-feature.png) |
| As a new site user, I would like to improve my memory, so that I can remember more things.| ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a new site user, I would like to have fun, so that I can enjoy myself and unwind from a busy day.| ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a new site user, I would like to learn something, so that I can improve my knowledge.| ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a returning site user, I would like to be able relax, so that I can unwind my mind. | ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a returning site user, I would like to be challenged mentally, so that I can have a challenge myself. | ![screenshot](documentation/testing/leaderboard-feature.png) |
| As a returning site user, I would like to improve my memory, so that I can remember more things. | ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a returning site user, I would like to have fun, so that I can enjoy myself and unwind from a busy day. | ![screenshot](documentation/testing/quote-card-feature.jpg) |
| As a site administrator, I should be able to understand why something has been written, so that I can navigate the code easily. | ![screenshot](documentation/testing/validator.jpg) |




## Bugs


While testing I found a couple of error commands that I have explained below with screenshots so you can see them for yourself;


- JS Expected an assignment or function call and instead saw an expression


   ![screenshot](documentation/testing/testing-images/error.png)


   - To fix this, I ensured it wasnt empty using the following code;


   ![screenshot](documentation/testing/testing-images/error-fix.png)


- JS `'let'` or `'const'` or `'arrow` or `'arrow function syntax (=>)'` is available in ES6.


   ![screenshot](documentation/testing/testing-images/error1.png)


   - To fix this, I included jshint esversion: 11 and it took the errors away.


   ![screenshot](documentation/testing/testing-images/error-fix1.png)






**Open Issues**


No open issues to report.


## Unfixed Bugs




There are no remaining bugs that I am aware of.



