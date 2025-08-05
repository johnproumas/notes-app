"use server";

import { db } from "@/db/drizzle";
import { InsertNote, notebooks, notes } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const createNote = async (
  values: InsertNote
) => {
  try {
    await db.insert(notes).values(values);

    return {
      success: true,
      message: "Note created successfully",
    };
  } catch {
    return {
      success: false,
      message: "Failed to create note",
    };
  }
};

// export const getNotes = async () => {
//   try {
//     const session = await auth.api.getSession({
//       headers: await headers(),
//     });
//     const userId = session?.user.id;

//     if (!userId) {
//       return {
//         success: false,
//         message: "User not authenticated",
//       };
//     }

//     const notesByUser = await db
//       .select()
//       .from(notes)
//       .where(eq(notes.userId, userId));

//     return {
//       success: true,
//       notes: notesByUser,
//     };
//   } catch {
//     return {
//       success: false,
//       message: "Failed to retrieve notes",
//     };
//   }
// };

export const getNoteById = async (id: string) => {
  try {
    const note = await db
      .select()
      .from(notes)
      .where(eq(notes.id, id));

    if (note.length === 0) {
      return {
        success: false,
        message: "Note not found",
      };
    }

    return {
      success: true,
      note,
    };
  } catch {
    return {
      success: false,
      message: "Failed to retrieve note",
    };
  }
}

export const updateNote = async (
  id: string,
  values: Partial<InsertNote>
) => {
  try {
    await db
      .update(notes)
      .set(values)
      .where(eq(notes.id, id));

    return {
      success: true,
      message: "Notebook updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Failed to update notebook",
    };
  }
};

export const deleteNote = async (id: string) => {
  try {
    await db.delete(notes).where(eq(notes.id, id));

    return {
      success: true,
      message: "Notebook deleted successfully",
    };
  } catch {
    return {
      success: false,
      message: "Failed to delete notebook",
    };
  }
};