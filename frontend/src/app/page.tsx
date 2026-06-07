import { Campaign } from "./components/registration/CampaignSection";
import { RegistrationSection } from "./components/registration/RegistrationSection";
import { VisitorTracker } from "./components/VisitorTracker";

export default function Home() {
  return (<main className="grid grid-cols-1 md:grid-cols-2">
    <Campaign />
    <RegistrationSection />
    <VisitorTracker />
  </main>);
}
