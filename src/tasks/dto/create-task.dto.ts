import {IsNotEmpty} from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}

// npm install class-validator class-transformer --save
// https://github.com/typestack/class-validator
