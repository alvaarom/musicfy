import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./utils/Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Auth from "./pages/Auth";
import LoggedLayout from "./layouts/LoggedLayout";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    // console.log(currentUser);
    if (!currentUser?.emailVerified) {
      signOut(auth);
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setLoading(false);
  });

  if (loading) {
    return null;
  }

  return (
    <>
      {!user ? <Auth /> : <LoggedLayout user={user} />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={true}
      />
    </>
  );
}

export default App;
