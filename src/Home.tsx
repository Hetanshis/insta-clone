import "./HomePage.css";
import SideNav from "./navigation/sideNav";

import Timeline from "./timeline/timeline";

function Home() {
  return (
    <div className="homepage">
      <div className="homepage_nav">
        <SideNav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
