import LogoutButton from "@/components/logout-button";
import { PageWrapper } from "@/components/page-wrapper";

function DashboardPage() {
  return (
    <PageWrapper breadcrumbs={[{label: "Dashboard", href: "/dashboard"}]}>
      <h1>Dashboard</h1>
      <LogoutButton />
    </PageWrapper>
  );
}
export default DashboardPage;
