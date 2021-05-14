import { auth } from "../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import React from "react";

export default function SocialMediaAuth(provider) {
  return auth.signInWithPopup(provider).catch((error) => {
    return error;
  });
}
