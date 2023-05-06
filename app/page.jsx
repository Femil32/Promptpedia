import React from "react";
import Feed from "@/components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptpedia is an open-source AI prompting tool for modern world to
        Discover, Ceate and Share creative prompts.
      </p>

      <Feed />
    </section>
  );
}

export default Home;
