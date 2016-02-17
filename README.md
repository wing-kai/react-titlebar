# About React-OSX-Titlebar

模拟 os x 标题栏的react组件

# Usage

```jsx
const TitleBar = require('../lib/titlebar');

const Body = React.createClass({
    render() {
        return (
            <div>
                <TitleBar />
            </div>
        )
    }
});
```

# Properties

### blur *`boolean`*
 - false *default*
 - true
   ![](./screenshot/blur_true.png)

### size *`string`* 

 - normal *default*
 - inset
 
   ![](./screenshot/size_inset.png)

 - center
 
   ![](./screenshot/size_center.png)

### theme *`string`*

 - default *default*

 - inverse
   
   ![](./screenshot/theme_inverse.png)

### fullScreen *`boolean`*

 - false *default*

 - true
 
   ![](./screenshot/fullscreen_true.png)
 

### disabled *`boolean`*

 - false *default*
 
 - true
 
   ![](./screenshot/disabled_true.png)

### lockBtn *`Array`*

 - `[]`  *default*
   - close
   - minimize
   - normalScreen
   - fullScreen

   `<TitleBar lockBtn={['fullScreen']} />`
   
   ![](./screenshot/lockbtn_fullscreen.png)
   
### Handler

`<TitleBar onClose={this.onClose} />`
 - onClose
 - onMinimize
 - onFullScreen
 - onNormalScreen (exit fullscreen mode)
