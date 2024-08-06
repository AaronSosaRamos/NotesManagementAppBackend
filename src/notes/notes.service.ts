import { Injectable } from '@nestjs/common';
import { NotesDao } from './notes.dao';
import { CreateNoteDto } from './note.entity';

@Injectable()
export class NotesService {
  constructor(private readonly notesDao: NotesDao) {}

  findAll() {
    return this.notesDao.findAll();
  }

  findOne(id: number) {
    return this.notesDao.findOne(id);
  }

  create(note: CreateNoteDto) {
    return this.notesDao.create(note);
  }

  update(id: number, note: CreateNoteDto) {
    return this.notesDao.update(id, note);
  }

  delete(id: number) {
    return this.notesDao.delete(id);
  }

  archive(id: number) {
    return this.notesDao.archive(id);
  }

  unarchive(id: number) {
    return this.notesDao.unarchive(id);
  }

  findArchived() {
    return this.notesDao.findArchived();
  }
}
