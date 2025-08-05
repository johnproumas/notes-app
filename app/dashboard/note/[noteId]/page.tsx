import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNoteById } from "@/server/notes";

type Params = Promise<{
  noteId: string;
}>;

export default async function page({
  params,
}: {
  params: Params;
}) {
  const { noteId } = await params;
  const { note } = await getNoteById(noteId);
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: note?.title || "Untitled",
        },
      ]}
    >
      {note?.title}
      <RichTextEditor />
    </PageWrapper>
  );
}
