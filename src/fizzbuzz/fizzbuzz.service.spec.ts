import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  test('Probar Fizz con multiplo de 3', ()=>{
    expect(service.fizzbuzz(3)).toBe('Fizz');
  })

  test('Probamos Buzz con multiplo de 5', ()=>{
    expect(service.fizzbuzz(5)).toBe('Buzz');
  })

  test('Probamos FizzBuzz con multiplo de 3 y 5', ()=>{
    expect(service.fizzbuzz(15)).toBe('FizzBuzz')
  })

  test('Probamos FizzBuzz con multiplo de 3 y 5', ()=>{
    expect(service.fizzbuzz(7)).toBe(7);
  })

  test('Numero entre 1 y 100', ()=>{
    expect(service.fizzbuzz(0)).toBeUndefined;
    expect(service.fizzbuzz(100)).toBeUndefined;
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
