### What did I do??

- step 1, follow the code logic start to finish
    - `App` renders `Parent` with props to pass to `Child`
    - Parent is using a `useMemo` to get `childTitle` when `childTitle` changes. Why would you do that? `childTitle` never changes and the way this is written it will always be defined. Commenting this out for now.
        - does this pose a true rendering issue or is it just some confusing code?
    - Is the rendering issue that the _Update state on Parent_ button isn't on the child? This feels like a strange app if the child isn't supposed to update the parent
        - made a onClickHandler()
        - renamed `value` to `previousValue` in `setValue((previousValue) => previousValue + 1);` (just for readability)
        - passed my onClickHandler to the child
        - moved button onto child
    - Checking out the CSS
        - `.Component .Variable` doesn't seem to serve any function when it could be `.Variable`, but it works
        - App rule for `text-align: center` isn't doing anything!
        - Going down the line of rules to comment them out and look for problems, `button.font-weight` does nothing too

## CSS rendering issues
- There is a  `.App` css rule, but not `App` class on that component so `text-align: center` CSS doesn't work. Added `className="App"` to the `App` component and removed it from the parent component props.
- `button.font-weight: 200` does nothing. 1-500 all do nothing
- [font-weight is dependant on font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- Testing out other font families It seems like all of them look the same under 500, maybe a property of buttons themselves? From what I've gathered from stackoverflow and MDN docs it looks like this applies to all font families in buttons.  Ran some various tests ahd saw the same behavior


### Other Misc Changes

- class name `Varible` -> `Variable`
- import  useState, ~~useMemo~~ from React
- changed all function components to arrow functions
- Removed `.Component` from the `.Component .Variable` css. 
- updated the background to a lovely skyblue
- cleaned up `/* #70ccd3; */` comment

Other changes I'd made:
- Don't pass `childTitle` down from App to Child, it serves no purpose