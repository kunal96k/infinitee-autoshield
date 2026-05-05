import Join from "./Join";
import Home from "./Home";
import StatsSection from "./StatsSection";
import CustomerStories from "./CustomerStories";
import EcosystemSection from "./EcosystemSection";
import VehicleCareOverview from "./VehicleCareOverview";
import VehicleWellnessSummary from "./VehicleWellnessSummary";
import SmartCarCompanion from "./SmartCarCompanion";

function Homepage(){
    return(
        <>
        <Home/>
        <StatsSection/>
        <CustomerStories/>
        <EcosystemSection/>
        <VehicleCareOverview/>
        <VehicleWellnessSummary/>
        <SmartCarCompanion/>
        <Join/>
        </>
    );
}

export default Homepage;