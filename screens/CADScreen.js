import React, { Component } from "react";
import { WebView } from "react-native-webview";

const CADScreen = ({ navigation }) => {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{
        uri: "https://myhub.autodesk360.com/ue2d9e293/shares/public/SHabee1QT1a327cf2b7a9907ea329c429482?mode=embed",
      }}
    />
  );
};

export default CADScreen;
