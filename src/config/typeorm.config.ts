import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: true,
    username: 'root',
    password: '123456',
    database: 'tasks',
    entities: [
        __dirname + '/../**/*.entity.js'
    ],
    synchronize: true
}