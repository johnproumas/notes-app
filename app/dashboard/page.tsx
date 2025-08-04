import { CreateNotebookButton } from "@/components/create-notebook-button";
import NoteBooks from "@/components/notebooks";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";

async function DashboardPage() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
      ]}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Your Notebooks</h1>
        <CreateNotebookButton />
      </div>

      {notebooks.success ? (
        <div>
          {notebooks?.notebooks?.map((notebook) => (
            <div key={notebook.id}>
              <h3>{notebook.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>{notebooks.message}</p>
      )}
    </PageWrapper>
  );
}
export default DashboardPage;
