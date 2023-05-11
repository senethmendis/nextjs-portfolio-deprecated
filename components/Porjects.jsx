
import React from "react";
import Property from "../public/assets/projects/property.jpg";
import Nextflix from "../public/assets/projects/netflix.jpg";
import Twitch from "../public/assets/projects/twitch.jpg";
import Crypto from "../public/assets/projects/crypto.jpg";

import ProjectItem from "./ProjectItem";

const Porjects = () => {
  return (
    <div id="Project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Prjects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            bgImg={Property}
            projectURL="/property"
          />

          <ProjectItem
            title="Netflix App"
            bgImg={Nextflix}
            projectURL="/netflix"
          />

          <ProjectItem title="Twitch App" bgImg={Twitch} projectURL="/twitch" />

          <ProjectItem title="Crypto App" bgImg={Crypto} projectURL="/crypto" />
        </div>
      </div>
    </div>
  );
};

export default Porjects;
