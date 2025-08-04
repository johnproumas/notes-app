interface NoteBooksProps {
  notebooks: {
    id: string;
    title: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  }[];
} 

export default function NoteBooks({ notebooks }: NoteBooksProps) {
  return (
    <div>
      {notebooks.map((notebook) => (
        <div key={notebook.id}>
          <h3>{notebook.title}</h3>
          <p>Created at: {new Date(notebook.createdAt).toLocaleDateString()}</p>
          <p>Updated at: {new Date(notebook.updatedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}