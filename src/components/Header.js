import React, { Component } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Thumbnail,
  Icon
} from "native-base";
import { StyleSheet, TouchableHighlight } from "react-native";
import NavigationService from "../utils/navigationService";
import { connect } from "react-redux";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: null,
      routerName: null
    };
  }

  getNameContact = navigation => {
    if (navigation) {
      return navigation.state;
    }
  };

  render() {
    const router = this.getNameContact(this.props.navigation);
    return (
      <Header
        style={styles.container}
        androidStatusBarColor={this.props.modal ? "white" : "#00897b"}
      >
        {this.props.navigation &&
          this.props.navigation.state.routeName !== "initial" && (
            <Left>
              <TouchableHighlight
                underlayColor="#eeeeee"
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 100
                }}
                onPress={() => {
                  this.props.navigation.pop();
                }}
              >
                <Icon
                  style={{ color: "white", fontSize: 24 }}
                  name="arrow-back"
                />
              </TouchableHighlight>
            </Left>
          )}
        <Body>
          {router.routeName === "initial" && <Title>Locha Mesh</Title>}
          {router.routeName === "chat" && <Title>{router.params.name}</Title>}
        </Body>
        <Right />
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  aplication: state.aplication,
  other: state.nav
});

export default connect(
  mapStateToProps,
  null
)(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#009688"
  }
});
