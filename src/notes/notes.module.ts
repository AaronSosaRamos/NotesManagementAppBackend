import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NotesDao } from './notes.dao';

@Module({
  providers: [NotesService, NotesDao],
  controllers: [NotesController],
})
export class NotesModule {}
