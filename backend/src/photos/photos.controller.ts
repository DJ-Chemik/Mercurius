import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('photos')
export class PhotosController {
  //Sending one file.
  @Post('upload')
  @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
  uploadSingle(@UploadedFile() file) {
    console.log(file);
  }

  //Sending multiple files (max 10).
  @Post('uploads')
  @UseInterceptors(FilesInterceptor('photos[]', 10, { dest: './uploads' }))
  uploadMultiple(@UploadedFiles() files) {
    console.log(files);
  }
}
