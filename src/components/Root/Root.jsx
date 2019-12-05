import React, { Component } from "react";
import { connect } from "react-redux";

import { createBrowserHistory } from "history";

import HeroesList from "../../pages/HeroesList";

import styles from "./Root.module.scss";

const history = createBrowserHistory();

const mapStateToProps = store => ({

});

class Root extends Component {

  componentDidMount() {
    if (this.container) {
      const vh = window.innerHeight * 0.01;
      this.container.style.setProperty("--vh", `${vh}px`);
    }
    window.onresize = () => {
      if (this.container) {
        const vh = window.innerHeight * 0.01;
        this.container.style.setProperty("--vh", `${vh}px`);
      }
    };
  }

  startSession() {
    // eslint-disable-next-line no-undef
    const idUser = localStorage.getItem("id_user");
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem("token");
    return idUser && token;
  }

  render() {
    return (
      <div
        className={styles.rootContainer}
        ref={el => {
          this.container = el;
        }}
      >
        <HeroesList />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Root);
