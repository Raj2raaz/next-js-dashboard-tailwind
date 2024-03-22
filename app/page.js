import DisscussionFourm from "./components/DisscussionFourm";
import MarketStories from "./components/MarketStories";
import SideNavbar from "./components/SideNavbar";

export default function Home() {
 
  return (
    <div className="flex h-screen "  >
      <SideNavbar className="fixed left-0 top-0 h-full "/>
      <div className="flex-1 overflow-y-auto">
      <div className="md:flex justify-between">
        <DisscussionFourm/>
        <MarketStories/>
      </div>
      </div>
    </div>
  
  );
}
