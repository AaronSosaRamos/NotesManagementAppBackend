import { Controller, Get, Post, Param, Body, Put, Delete, Patch, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto, Note } from './note.entity';
import { validateOrReject } from 'class-validator';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('notes')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({ status: 200, description: 'Return all notes that are not archived.', type: [Note] })
  findAll() {
    return this.notesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('archived')
  @ApiOperation({ summary: 'Get all archived notes' })
  @ApiResponse({ status: 200, description: 'Return all archived notes.', type: [Note] })
  findArchived() {
    return this.notesService.findArchived();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a note by ID' })
  @ApiResponse({ status: 200, description: 'Return a single note.', type: Note })
  @ApiParam({ name: 'id', description: 'The ID of the note to retrieve' })
  findOne(@Param('id') id: number) {
    return this.notesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiResponse({ status: 201, description: 'The note has been successfully created.', type: Note })
  @ApiBody({ type: CreateNoteDto })
  async create(@Body() note: CreateNoteDto) {
    await validateOrReject(note);
    return this.notesService.create(note);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a note by ID' })
  @ApiResponse({ status: 200, description: 'The note has been successfully updated.', type: Note })
  @ApiParam({ name: 'id', description: 'The ID of the note to update' })
  @ApiBody({ type: CreateNoteDto })
  async update(@Param('id') id: number, @Body() note: CreateNoteDto) {
    await validateOrReject(note);
    return this.notesService.update(id, note);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a note by ID' })
  @ApiResponse({ status: 200, description: 'The note has been successfully deleted.' })
  @ApiParam({ name: 'id', description: 'The ID of the note to delete' })
  delete(@Param('id') id: number) {
    return this.notesService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/archive')
  @ApiOperation({ summary: 'Archive a note by ID' })
  @ApiResponse({ status: 200, description: 'The note has been successfully archived.' })
  @ApiParam({ name: 'id', description: 'The ID of the note to archive' })
  archive(@Param('id') id: number) {
    return this.notesService.archive(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/unarchive')
  @ApiOperation({ summary: 'Unarchive a note by ID' })
  @ApiResponse({ status: 200, description: 'The note has been successfully unarchived.' })
  @ApiParam({ name: 'id', description: 'The ID of the note to unarchive' })
  unarchive(@Param('id') id: number) {
    return this.notesService.unarchive(id);
  }
}
