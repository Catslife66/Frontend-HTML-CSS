The keys of this page design are:
1. a toggle button to switch between annually price and monthly price
2. premium price card is bigger and more standing than the basic price

To make the price toggle button, the key points are:
1. type of input field is checkbox
2. to hide the default checkbox, set its style css to 0 width, 0 height, 0 opacity
3. add a span tag to make a slide bar, add span:before {content: ''} as a slide button
4. style up the slide bar and slide button
5. add some javascript to manipulate the slide bar change action

To make the premium price card, the key points are:
1. use diplay flex, justify content center and align items center
2. define price card height and give premium price card extra height (if use scale to scale up the premium card, it will cause the content position not line up the same level)
3. use relative postion on premium card to move it up