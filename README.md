# Tutty.js

Library for Angular 5 for creating simple interactive tutorials for your website!

### How to use?
               
1. Make sure that your project is run on Angular 5.2+ and has Bootstrap v.3.3.7 included in its package.json. Remember to add proper ID to those HTML elements where you would like to display hints.

2. Create `tutty-configuration.json` file which has format like this:
```
{
    "data": [
      {
        "name": "firstHintCollection",
        "hints":[
          {
            "id": "firstElementId",
            "direction": "top",
            "message": "text to display "}
        ]
      },
      {
        "name":"secondHintCollection",
        "hints": [
          {
            "id": "secondElementId",
            "direction" : "right",
            "message" : "other text to display"
          },
		  {
            "id": "thirdElementId",
            "direction" : "bottom",
            "message" : "yet another text to display"
          }
        ]
    }
    ]
}
```
3. Import `TuttyService` from `tutty.js`  inject it to your component, and start it:
```javascript
import {TuttyService} from 'tutty.js'
constructor(private tutty: TuttyService) { }
ngAfterViewInit(): void { this.tutty.displayHints("firstHintCollection", 'inner'); }
```
where `firstHintCollection` is hint collection name and `inner` is ID of HTML element where you want to inject this component. 

**NOTE:**  to make sure that hints will be proprerly displayed you need to invoke `displayHints` method after your application DOM will be loaded (for example in `ngAfterViewInit()` method).
