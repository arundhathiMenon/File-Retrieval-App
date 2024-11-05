"use client";

import { useState } from "react";
import ChildrenTable from "./components/ChildrenTable";
import Login from "./components/Login";

export default function Home() {

  const [accessToken, setAccessToken] = useState(null);
  const sharedFolderUrl = "https://1drv.ms/f/s!Ajj2Ksn7xCbAgbtdesjvi9IAiigQMA?e=RnkN5D";
  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  return (
    <>
      <div>
        <h1>OneDrive Shared Folder</h1>
        {!accessToken ? (
          <Login onSuccess={handleLoginSuccess} accessToken={accessToken} setAccessToken={setAccessToken}/>
        ) : (
          <ChildrenTable accessToken={accessToken} sharedFolderUrl={sharedFolderUrl} />
        )}
      </div>
    </>
  );
}
