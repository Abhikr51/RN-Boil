Installing process
For MAC usres
--> npx react-native init yourProjectName --template https://github.com/Abhikr51/RN-Boil.git
For windows users
--> npx react-native init yourProjectName
--> clone template project and copy app/ folder and App.js and Paste/Replace into your project
--> yarn add @react-navigation/native@^6.0.8 @react-navigation/stack@^6.1.1 react-native-gesture-handler@^2.2.0 react-native-safe-area-context@^3.3.2 react-native-screens@^3.10.2 react-native-vector-icons@^9.0.0 react-redux@^7.2.6 redux@^4.1.2 redux-thunk@^2.4.

--> react-native link
--> yarn run android


///// USER_SNNIPTES /////
"react-native boilerplate": {
  "prefix": "rnboil",
  "body": [
    "import React from 'react';",
    "import { StyleSheet, View } from 'react-native';",
    "",
    "const ${1:${TM_FILENAME_BASE}} = () => {",
    "  return (",
    "    <View>",
    "      $2",
    "    </View>",
    "  );",
    "};",
    "",
    "export default ${1:${TM_FILENAME_BASE}};",
    "const styles = StyleSheet.create({",
    "",
    "});"
  ],
  "description": "react-native boilerplate"
},

==> set it to your USER_SNNIPTES and  just type  'rnboil' and see the magic 

/////// FEATURES ///////
----> Basic file sturture maded up
----> Integrated Dark mode with two flexible components {AppText , Screen} import it from components folder 
    --> Customizable {system-default , light , dark}
    --> Uses == import useAppDarkMode from hooks folder and use properties like
        {
          initContext,
          mode,
          colorScheme ,
          setColorScheme ,
        }
    --> V-1.0
    --> support till i'm not dead hehe
----> Transparent status bar support for both IOS and ANDROID 
----> Basic React navigation is seted up (6.x) with stack navigator
----> Redux is already Seted Up :D
----> Prebuilt Splash screen
