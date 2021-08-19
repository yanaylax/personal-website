import React from "react";
import ImageContainer from "../../../components/image-container/ImageContainer";
import devImage from "../../images/yanay-pic.png";
export default function DevBox() {
  return (
    <div className="dev_box">
      <ImageContainer image={devImage} />
      <div className="dev_text">
        <div className="title">
          <h1 className="dev_name">Yanay Lax</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="dev_description">
          <h2>
            Specializes in Front End development using
            <span className="react"> ReactJS</span>.
          </h2>
          <p className="parg_1">
            Excellent problem solver, fast and independent learner. Experienced
            with the latest cutting edge development tools and procedures.
          </p>
          <p className="parg_2">
            Always energetic and eager to learn new skills. Able to handle
            multiple tasks on a daily basis.
          </p>
        </div>
      </div>
    </div>
  );
}
