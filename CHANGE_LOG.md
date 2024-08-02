## What did I do??

### Step 1, follow the code logic start to finish
- `App` renders `Parent` with props to pass to `Child`
- Parent is using a `useMemo` to get `childTitle` when `childTitle` changes. Why would you do that? `childTitle` never changes and the way this is written it will always be defined. Commenting this out for now.
    - does this pose a true rendering issue or is it just some confusing code?
- The _Update state on Parent_ button isn't on the child? This feels like a strange app if the child isn't supposed to update the parent.
    - made an `onClickHandler()`
    - renamed `value` to `previousValue` in `setValue((previousValue) => previousValue + 1);` (just for readability)
    - passed my `onClickHandler` to the child
    - moved button onto child
- Checking out the CSS
    - App rule for `text-align: center` isn't working
        - Looks like the class is not in the right place to apply to the `App` component. Fixing that.
    - `.Component .Variable` doesn't seem to serve any function when it could be `.Variable`, but it works
        - `.Component .Variable` targets a `Variable` class that is the child of a `Component` class. It's not wrong, but not especially functional
    - Going down the line of rules to comment them out and look for problems, `button.font-weight` does nothing too. Looks like this might be a limitation of buttons? I can't get any font family to respect below `600` `font-weights` on a button
- Everything appears to be rendering correctly.
- Talking a step back to look at the unmodified code. While walking a coworker through the problem I was trying to demonstrate the rendering cycle with console logs and a debugger in the components. Which revealed:
    - each component renders twice twice in a row:
        - looked up reasons and `React.StrictMode` causes each component to render twice. Removing that for now.
    - button in `Parent` updates state on the parent, but when clicked the child re-renders as well even though no props changed!
        - I googled around and found this on stack overflow
            > Use React memo -> this is the best way to prevent Rerendering even if you have functional components ,you simply need to wrap your components export with React.memo like : export default React.memo(MessageList)
        
            Leading me to [this `React.memo()` doc](https://react.dev/reference/react/memo) and the child no longer rerenders when the button updates the parent!!
        - Now I have to undo my 'improvement' to show the re-rendering fix.

### My Changes
#### CSS rendering issues
- There is a  `.App` css rule, but not `App` class on that component so `text-align: center` CSS doesn't work. Added `className="App"` to the `App` component and removed it from the parent component props.
- `button.font-weight: 200` does nothing. 1-500 all do nothing
    - [font-weight is dependant on font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
    - Testing out other font families It seems like all of them look the same under 500, maybe a property of buttons themselves? From what I've gathered from stackoverflow and MDN docs it looks like this applies to all font families in buttons.  Ran some various tests ahd saw the same behavior.

#### Child rerenders when it doesn't need to
- The child's prop does not change, so it doesn't need to re-render, I believe this is what the `useMemo()` is intended to do, but I replaced this with a `React.memo()` in the Child component.

#### Remove Strict Mode
- Each component renders twice twice in a row when using `React.StrictMode`. This was probably not a problem intended to be fixed, but to help with the challenge, but I removed But I replaced `<React.StrictMode>` with `<>` to minimize rerenders.
- strict mode does not re-invoke render in production, probably no issue here but it made easier for me to look at the component rendering logs by removing it


### Other Misc Changes

- class name `Varible` -> `Variable`
- import  `useState`, `memo` from React
- changed all function components to arrow functions
- Removed `.Component` from the `.Component .Variable` css. not a problem but redundant
- updated the background to a lovely `skyblue`
- cleaned up `/* #70ccd3; */` comment
- intentionally left in console logs to demo renders quicker
- broke components out into files and exported/imported them
- added a button to change the Child title text. This serves no purpose but it makes more sense why you'd pass it as a prop now
- Added some tests to confirm the `onClick` functions are updating the state and rendering the new state
- Add `PropTypes` for type safety