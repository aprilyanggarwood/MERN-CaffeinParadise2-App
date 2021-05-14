import { auth } from "../firebase";

import React from "react";

export default function authMethods() {
  return;
  const FacebookProvider = new auth.FacebookAuthProvider();
  const GithubProvider = new auth.GithubAuthProvider();
  const GoogleProvider = new auth.GoogleAuthProvider();
}
