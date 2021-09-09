import React, { useState, useEffect } from "react";
import FormSplash from "../../components/SplashScreen/index";
import Login from "../Login/index";
import { useHistory } from "react-router";

function SplashScreen() {
  const [screen, setScreen] = useState(true);
  const { push } = useHistory();
  const token = localStorage.getItem("tokenRappi4C");

  useEffect(() => {
    let timeout;
    if (token) {
      push("/list");
    } else {
      timeout = setTimeout(() => {
        setScreen(false);
        push("/login");
      }, 3000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return <div>{screen ? <FormSplash /> : <Login />}</div>;
}

export default SplashScreen;
