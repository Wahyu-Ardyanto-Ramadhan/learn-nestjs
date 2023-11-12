import { CreateNestjsDto } from './dto/create-nestjs.dto';
export declare class NestjsService {
    private nestjs;
    getNestjs(weapon?: 'stars' | 'nunchucks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getNest(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNest(createNestjsDto: CreateNestjsDto): {
        id: number;
        name: string;
        weapon: "stars" | "nunchucks";
    };
}
