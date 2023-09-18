import { Controller, Get, Param } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
  constructor(private readonly fizzbuzzService: FizzbuzzService) {}

  @Get(':numero')
  fizzbuzz(@Param('numero') numero): any{
    return this.fizzbuzzService.fizzbuzz(numero);
  }
}
