# getQueryParamFromURL
A better method to get the value of the query param from url in web front pages.

To use this JS function, you should add the main function into your own JS file or let your HTML file related to the file link or path!

```url
https://github.com/lipeilin375/getQueryParamFromURL/blob/main/getQueryParamFromURL.js
```

To get the value of the query param, you could follow the instruction below!

> If the origin link is like: `https://.../?Name=John&Sex=true&Age=100`
```JS
getQueryParamFromURL("Name")
// John
getQueryParamFromURL("Hello")
// null
```