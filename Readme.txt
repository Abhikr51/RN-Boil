installing process

npx react-native init testRnBoil --template https://github.com/Abhikr51/RN-Boil.git

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
