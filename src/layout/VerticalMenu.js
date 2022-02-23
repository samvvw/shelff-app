import React from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { useState } from "react";
import { screenWidth } from "./layout";

import Footer from "./Footer";

const VerticalMenu = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <>
      <Provider>
        <Portal>
          <FAB.Group
            fabStyle={{
              backgroundColor: "red",
              marginBottom: 45,

              alignSelf: "center",
            }}
            style={{
              backgroundColor: "transparent",
            }}
            open={open}
            icon={open ? "calendar-today" : "plus"}
            actions={[
              {
                style: {
                  marginRight: screenWidth / 2 - 42,
                },
                icon: "plus",
                onPress: () => console.log("Pressed add"),
              },
              {
                style: {
                  marginRight: screenWidth / 2 - 42,
                },
                icon: "star",
                // label: "Star",
                onPress: () => alert("Pressed star"),
              },
              {
                style: {
                  marginRight: screenWidth / 2 - 42,
                },
                icon: "email",
                // label: "Email",
                onPress: () => alert("email"),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (!open) {
                //   alert("hello");
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
        <Footer />
      </Provider>
    </>
  );
};

export default VerticalMenu;
