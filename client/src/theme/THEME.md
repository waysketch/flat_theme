# Theme Folder

## Summary
The theme is a way to collect all your **SCSS** into one place.

## Setup
**Step 1:** To create a new styled component create a javascript/typescript file in the `root > src > theme > styled` and title it with the text `.style` at the end. `example.style.js`

<details>
**TIP**: `using snake case mixed with dot notation allows you to doubleclick the file name and it will stop at the first pireod.`

Try it!
```json
example_snake_case.style.js
exampleCamelCaseStyle.js
example.dot.case.style.js
```

`the snake case lets you doubleclick and it will select everything connected with underscores _ and the dot notation tells the doubleclick to stop. So a mix of these two cases makes it easier to copy paste and edit code!`
</details>

**Step 2:** import styled components into that file `@import styled from 'styled-components'`

**Step 3:** Be sure a component is being exported from that new file.
```js
export const Example = styled.div`
    border: 1px solid #2d3436;
    padding: .5em 1em;
    margin: .5em;

    &:hover {
        transform: translateY(2px);
    }

    &:action {
        transform: translateY(5px);
    }

    &::after {
        content: "example";
    }
`;
```
**Step 4:** Export your new component from the `index.jsx` file in the `theme` folder. Export example `export * from './styled/example.style.js` or `export { Example } from './styled/example.style.js` 

**TIP**: Since some `style.js` files will be exporting multiple styled components it is possible you could forget what file one is in. To make components easier to find you can export by deconstructing the file *see second example above.* Importing and using the component does not change.

**Step 5:** In your Component or Page add the following import at the top `@import * as S from '../../theme'`

**Last Step:** To use your component just create a tag with an S at the begining `<S.Example />` or `<S.Example></S.Example>`

## How it works
Using the npm package `styled-components` we are able to use javascript/typescript to build out our css files and take advantage of **code splitting** to optimize the speed of our app.

Styling is done in [SCSS](https://sass-lang.com/documentation/syntax) and is much easier to read and maintain.

## install
```cli
npm install --save styled-components
```

## VSCode
If you are using VSCode as your **IDE** you should check out [vscode-styled-componets](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) extention.

To install: Go to the **Extention** tab in VSCode and search **vscode-styled-components** by Julien Poissonnier.