import { StyleSheet } from "react-native";

export const newItemStyle = StyleSheet.create({
  mainStack: { paddingLeft: 10, paddingRight: 10 },
  title: {
    fontSize: 28,
    marginTop: 30,
    paddingTop: 10,
    // marginBottom: 10,
  },
  labels: {
    fontSize: 17,
  },
  labelBox: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  counterButton: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  category: {
    marginRight: 30,
  },
  counterHBar: {
    width: "100%",

    alignContent: "space-between",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counterHBarDate: {
    // backgroundColor: "green",
    width: "100%",
    alignItems: "flex-start",
  },
  dateBox: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  counterButtonsHStack: {
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "transparent",

    width: 80,
  },
  cancelButtonText: {
    color: "blue",
  },
  codeNumberText: {
    textAlign: "center",
    borderWidth: 2,
    borderColor: "lightgray",
    width: "50%",
  },
  codeNumberBox: {
    width: "100%",
    alignItems: "center",
  },
  saveButton: {
    marginBottom: 10,
    backgroundColor: "rgba(0, 122, 255, 1)",
  },
  moreItemsButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(0, 122, 255, 1)",
  },
  CategoryText: {
    paddingLeft: 15,
    fontSize: 14,
  },
});
