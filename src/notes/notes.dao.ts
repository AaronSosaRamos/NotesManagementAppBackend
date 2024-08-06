import { Injectable } from '@nestjs/common';
import { knexConnection } from '../db/knex/knexConnection';

@Injectable()
export class NotesDao {
  private readonly knex = knexConnection;

  async findAll(): Promise<any[]> {
    const notes = await this.knex('notes').where('isArchived', false).select('*');
    for (const note of notes) {
      note.categories = await this.knex('notes_categories')
        .join('categories', 'notes_categories.categoryId', 'categories.id')
        .where('notes_categories.noteId', note.id)
        .select('categories.id', 'categories.name', 'categories.color');
    }
    return notes;
  }

  async findOne(id: number): Promise<any> {
    const note = await this.knex('notes').where('id', id).first();
    if (note) {
      note.categories = await this.knex('notes_categories')
        .join('categories', 'notes_categories.categoryId', 'categories.id')
        .where('notes_categories.noteId', note.id)
        .select('categories.id', 'categories.name', 'categories.color');
    }
    return note;
  }

  async create(note: any): Promise<any> {
    const { categories, ...noteData } = note;
    const [createdNote] = await this.knex('notes').insert(noteData).returning('*');
    await this.knex('notes_categories').insert(
      categories.map((categoryId: number) => ({
        noteId: createdNote.id,
        categoryId,
      })),
    );
    return createdNote;
  }

  async update(id: number, note: any): Promise<any> {
    const { categories, ...noteData } = note;
    const [updatedNote] = await this.knex('notes').where('id', id).update(noteData).returning('*');
    await this.knex('notes_categories').where('noteId', id).del();
    await this.knex('notes_categories').insert(
      categories.map((categoryId: number) => ({
        noteId: id,
        categoryId,
      })),
    );
    return updatedNote;
  }

  async delete(id: number): Promise<void> {
    await this.knex('notes_categories').where('noteId', id).del();
    await this.knex('notes').where('id', id).del();
  }

  async archive(id: number): Promise<void> {
    await this.knex('notes').where('id', id).update({ isArchived: true });
  }

  async unarchive(id: number): Promise<void> {
    await this.knex('notes').where('id', id).update({ isArchived: false });
  }

  async findArchived(): Promise<any[]> {
    const notes = await this.knex('notes').where('isArchived', true).select('*');
    for (const note of notes) {
      note.categories = await this.knex('notes_categories')
        .join('categories', 'notes_categories.categoryId', 'categories.id')
        .where('notes_categories.noteId', note.id)
        .select('categories.id', 'categories.name', 'categories.color');
    }
    return notes;
  }
}
