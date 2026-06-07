import { Campaign } from "./components/registration/CampaignSection";
import { RegistrationSection } from "./components/registration/RegistrationSection";

export default function Home() {
  return (<main className="grid grid-cols-1 md:grid-cols-2">
    <Campaign />
    <RegistrationSection />
  </main>);
}
