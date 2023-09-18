import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {


    fizzbuzz(numero):any{

        if(numero <= 0 || numero>=100)
            return;        
     
        if(numero % 15 == 0)
            return 'FizzBuzz';

        if(numero % 3 == 0)
            return 'Fizz';

        if(numero % 5 == 0)
            return 'Buzz';        

        return numero;
    }
}
