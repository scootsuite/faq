import React, { useState } from "react";
import Head from "next/head";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA(): JSX.Element {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Ticketmaster Fan Support</title>
        <link rel="stylesheet" href="/styles.css" /> {/* Updated CSS file path */}
      </Head>
      <header className="header" style={{ backgroundColor: '#e21836', display: 'flex', alignItems: 'center' }}>
        <div className="common-nav__logo-container">
          <a href="/lnlogo.png">
            <img src="/lnlogo.png" alt="Live Nation®" className="common-nav__logo" style={{ height: '80px' }} /> {/* Adjust the height here */}
			
          </a>
        </div>
<div className="flex justify-center">
  <h1 className="text-center"></h1>
</div>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto px-8">
          <div className="mt-4">
            <FileUploadArea
              handleSetFiles={setFiles}
              maxNumFiles={75}
              maxFileSizeMB={30}
            />
          </div>
        </div>

        <div className="container mx-auto px-8">
          <FileQandAArea files={files} />
        </div>
      </main>

      <footer className="footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
}
