import { Module } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';
import { FizzbuzzController } from './fizzbuzz.controller';

@Module({
  controllers: [FizzbuzzController],
  providers: [FizzbuzzService],
})
export class FizzbuzzModule {}
