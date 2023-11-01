import { useState } from "react";
import SideProject from "../SideProject/SideProject";
import "./_side-projects-list.scss";
import UpIcon from "../UpIcon";
import DownIcon from "../DownIcon";

const SideProjectsList = () => {

  const [showSideProjectsList, setShowSideProductsList] = useState<boolean>(false);

  return (
    <>
      <div className="side-projects-top">
        <button className="side-projects-toggle-btn" onClick={() => setShowSideProductsList(prev => !prev)}>
          <span>More Projects</span>
          <span>{showSideProjectsList ? <UpIcon /> : <DownIcon />}</span>
        </button>
      </div>
      
      <ul className={`side-projects-list ${showSideProjectsList ? `show` : ``}`}>
          <SideProject
            projectId={`project-5`}
            projectYear={2023}
            projectName={`project-5`}
            projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            projectDemoUrl={`https://google.com`}
            projectSourceUrl={`https://google.com`}
          />
          <SideProject
            projectId={`project-6`}
            projectYear={2023}
            projectName={`project-6`}
            projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            projectDemoUrl={`https://google.com`}
            projectSourceUrl={`https://google.com`}
          />
          <SideProject
            projectId={`project-7`}
            projectYear={2023}
            projectName={`project-7`}
            projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            projectDemoUrl={`https://google.com`}
            projectSourceUrl={`https://google.com`}
          />
          <SideProject
            projectId={`project-8`}
            projectYear={2023}
            projectName={`project-8`}
            projectDescription={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
            projectDemoUrl={`https://google.com`}
            projectSourceUrl={`https://google.com`}
          />
   
        </ul>
    </>
  );
};

export default SideProjectsList;
