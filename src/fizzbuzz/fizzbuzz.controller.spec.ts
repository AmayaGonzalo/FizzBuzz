import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;

  //Para mock all
  let mockedFizzBuzzValue = 'Buzz';
  let mockedFizzBuzzService = {
    fizzbuzz: ()=> mockedFizzBuzzValue
  }
  //

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    })
    //para mock all
    .overrideProvider(FizzbuzzService)    
    .useValue(mockedFizzBuzzService)
    //
    .compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  // test('al poner 3 me devuelve Fizz con spyON', ()=>{
  //   const result = 'Fizz';
  //   jest.spyOn(service, 'fizzbuzz').mockImplementation(()=>result);

  //   expect(controller.fizzbuzz(3)).toBe('Fizz');
  // })

  test('mock all al poner 5 me devuelve Buzz con spyON',()=>{
    expect(controller.fizzbuzz(5)).toBe(mockedFizzBuzzValue);
  })

  test('mock all al poner 3 me devuelve Fizz con spyON',()=>{
    mockedFizzBuzzValue = 'Fizz';
    expect(controller.fizzbuzz(3)).toBe(mockedFizzBuzzValue);
  })

  test('mock all al poner 1 me devuelve el 1 con spyON',()=>{  
    mockedFizzBuzzValue = '1';  
    expect(controller.fizzbuzz(1)).toBe(mockedFizzBuzzValue);
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
