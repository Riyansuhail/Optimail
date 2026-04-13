"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Landing from "@/components/Landing";
import SearchPage from "@/components/SearchPage";
import Directory from "@/components/Directory";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

export default function Home() {
  const [page, setPage] = useState("landing");
  const [auth, setAuth] = useState(false);

  const signIn = () => {
    setAuth(true);
    setPage("search");
  };

  const signOut = () => {
    setAuth(false);
    setPage("landing");
  };

  return (
    <div>
      <Nav
        page={page}
        setPage={setPage}
        auth={auth}
        onSignIn={signIn}
        onSignOut={signOut}
      />
      {!auth && <Landing onSignIn={signIn} />}
      {auth && page === "search" && <SearchPage setPage={setPage} />}
      {auth && page === "directory" && <Directory />}
      {auth && page === "chat" && <Chat />}
      <Footer />
    </div>
  );
}
