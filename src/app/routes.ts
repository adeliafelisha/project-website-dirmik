import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { ProfileAbout } from "./pages/ProfileAbout";
import { ProfileVisionMission } from "./pages/ProfileVisionMission";
import { ProfileStructure } from "./pages/ProfileStructure";
import { Services } from "./pages/Services";
import { Announcements } from "./pages/Announcements";
import { Articles } from "./pages/Articles";
import { Downloads } from "./pages/Downloads";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "profil", Component: Profile },
      { path: "profil/tentang", Component: ProfileAbout },
      { path: "profil/visi-misi", Component: ProfileVisionMission },
      { path: "profil/struktur", Component: ProfileStructure },
      { path: "layanan", Component: Services },
      { path: "pengumuman", Component: Announcements },
      { path: "artikel", Component: Articles },
      { path: "unduhan", Component: Downloads },
      { path: "faq", Component: FAQ },
      { path: "kontak", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
