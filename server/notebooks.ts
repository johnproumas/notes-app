"use server";

import { db } from "@/db/drizzle";
import {
  InsertNotebook,
  notebooks,
  notes,
} from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const createNotebook = async (
  values: InsertNotebook
) => {
  try {
    await db.insert(notebooks).values(values);

    return {
      success: true,
      message: "Notebook created successfully",
    };
  } catch {
    return {
      success: false,
      message: "Failed to create notebook",
    };
  }
};

export const getNotebooks = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userId = session?.user?.id;

    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    const notebooksByUser =
      await db.query.notebooks.findMany({
        where: eq(notebooks.userId, userId),
        with: {
          notes: true,
        },
      });

    return {
      success: true,
      notebooks: notebooksByUser,
    };
  } catch {
    return {
      success: false,
      message: "Failed to retrieve notebooks",
    };
  }
};

export const getNotebookById = async (id: string) => {
  try {
    const notebook = await db.query.notebooks.findFirst({
      where: eq(notebooks.id, id),
      with: {
        notes: true,
      },
    });

    if (!notebook) {
      return {
        success: false,
        message: "Notebook not found",
      };
    }

    return {
      success: true,
      notebook,
    };
  } catch {
    return {
      success: false,
      message: "Failed to retrieve notebook",
    };
  }
};

export const updateNotebook = async (
  id: string,
  values: Partial<InsertNotebook>
) => {
  try {
    await db
      .update(notebooks)
      .set(values)
      .where(eq(notebooks.id, id));

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

export const deleteNotebook = async (id: string) => {
  try {
    await db.delete(notebooks).where(eq(notebooks.id, id));

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
