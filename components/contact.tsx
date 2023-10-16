import React from "react";
import { SectionHeading } from "./section-heading";

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeading>Contact me</SectionHeading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:antonellarios0098@gmail.com">
          antonellarios0098@gmail.com
        </a>
        or through this form.
      </p>
    </section>
  );
}
