# React Native Pre Built Widgets

<img src="https://www.qed42.com/sites/default/files/styles/featured_image/public/2018-11/react-native.png?itok=lj4A4r0I" alt="Getting started" />

| ## TABLE OF CONTENTS |
| -------------------- |
| 1. INSTALLATION      |
| 2. COMPONENTS        |
| 3. EXAMPLES          |
| 4. LICENSE           |
| 5. LINKS             |

## INSTALLATION

```npm i react-native-widgetsui```
```import {} from 'react-native-widgetsui```

## COMPONENTS

### AVATAR

`import {} from 'react-native-widgetsui`

A Circular Image Icon with properties of a url and height

```
{
              <Avatar
                url={"image url"}
                height={80}
                margin={11}
                backgroundColor="grey"
              />
}
```
### PILL BUTTON

`import {} from 'react-native-widgetsui`

A Pill Shaped button which requires a JSX child element and a onPress event action.

Properties:
height,
width,
backgroundColor

```
{
              <PillButton
                onPress(()=>{})
                child = {<Text>Press Me</Text>}
                height={40}
                width={200}
                backgroungColor={'blue'}
              />
}
```