import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getResponse() { 
    return {
      operation_code: 1
    }
  }

  postResponse(data: string[]) { 
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";

    const numbers: string[] = [];
    const alphabets: string[] = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
      if (!isNaN(Number(item))) {
        numbers.push(item);
      } else if (item.match(/[a-zA-Z]/)) {
        alphabets.push(item);
        if (item.match(/[a-z]/) && item > highestLowercaseAlphabet) {
          highestLowercaseAlphabet = item;
        }
      }
    });

    return {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };
  }
}
