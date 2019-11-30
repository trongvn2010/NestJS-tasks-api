import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { BadRequestException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hasPassword(password, user.salt);
        console.log(user.password)
        try {
            await user.save();
        } 
        catch (error) {
            if (error && error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    private async hasPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}