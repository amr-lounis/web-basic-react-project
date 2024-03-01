import { PageHome } from "@P/PageHome";
import { PageNotFond } from "@P/PageNotFond";
import { PageTest } from "@P/PageTest";
import { PageContactUs } from "@P/PageContactUs";
import { PageAbout } from "@P/PageAbout";

const app_routes: { to: string, element: any }[] = [
  { to: "/", element: PageHome },
  { to: "/contact_us", element: PageContactUs },
  { to: "/about", element: PageAbout },
  { to: "/test", element: PageTest },
  { to: "/*", element: PageNotFond },
];
const nav_urls: { name: string, to: string }[] = [
  { name: "home", to: "/" },
  { name: "about", to: "/about" },
  { name: "Contact us", to: "/contact_us" },
];

export const urls = {
  thisWebSite: "lape3ddesign",
  nav_urls: nav_urls,
  app_routes: app_routes,
  footers_urls: []
};
