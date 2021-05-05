import { Injectable } from '@nestjs/common';
import { CsvParser } from 'nest-csv-parser';
import * as fs from 'fs';

class Entity {
  foo: string;
  bar: string;
}

@Injectable()
export class CsvParserCustomService {
  constructor(private readonly csvParser: CsvParser) {}
  async parse(file: any) {
    // Create stream from file (or get it from S3)
    // console.log('alo', file);
    const stream = fs.createReadStream('file.csv');
    const entities: any = await this.csvParser.parse(stream, Entity);
    console.log('entities', entities.list[0].coluna1);
    return entities.list[0];
  }

  // async parse(file: any) {
  //   const results = [];
  //   fs.createReadStream(file)
  //     .pipe(csv({ separator: ';' }))
  //     .on('data', (data) => results.push(data))
  //     .on('end', () => {
  //       console.log(results);
  //       // [
  //       //   { NAME: 'Daffy Duck', AGE: '24' },
  //       //   { NAME: 'Bugs Bunny', AGE: '22' }
  //       // ]
  //     });

  //   return results;
  // }
}
