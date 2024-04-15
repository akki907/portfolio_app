import { contactData } from "@/lib/data";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <p> 
          &#x3c;&#47;&#x3e; with ❤️ by &nbsp;
          <a href={contactData.socialMedia.github.link} target="_blank">
           {contactData.name}
          </a>
        </p>
    </footer>
  );
}
