import DisscussionFourm from "./components/DisscussionFourm";
import MarketStories from "./components/MarketStories";
import SideNavbar from "./components/SideNavbar";

export default function Home() {
  return (
    <div className="flex"  >
      <SideNavbar/>
      <div className="flex-1 md: flex h-screen relative justify-between">
        <DisscussionFourm/>
        <MarketStories/>
      </div>
    </div>
  );
}
