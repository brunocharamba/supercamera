# React Native Boilerplate

## This project contains the basics for React Native development and some optional packages that facilitates my work.

This project contains:

- eslint
- redux
- redux-saga
- react-navigation (with react-native-gesture-handler)
- axios
- reactotron

# Installation

**general**
To automatically install all dependencies, run:

```bash
npm install
```

or, using yarn:

```bash
yarn
```

**eslint**

```bash
eslint --init
-> to check syntax, find problems, and enforce code style
-> JavaScript modules (import/exports)
-> React
-> Unmark Browser and Node (leave all unchecked using Spacebar)
-> Use a popular style guide
-> Standard (or choose whatever you like more)
-> JSON
-> Y (yes)
```

Wait until eslint/guides are installed.
If you're using Yarn instead NPM, you'll need to **delete** the **package-lock.json** and run:

```bash
yarn
```

---

Some packages has native modules dependencies. For some of those, we may automatically linking then with:

```bash
react-native link
```

For other, you'll need to folow the next steps.

**react-navigation**

```bash
react-native link react-native-gesture-handler
```

No aditional steps are required for iOS

For Android, you'll need to change the **MainActivity.java** file in _android/app/src/main/java/com/reactnativeboilerplate_

```bash
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

And you're all good.
