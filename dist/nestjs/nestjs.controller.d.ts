import { CreateNestjsDto } from './dto/create-nestjs.dto';
import { UpdateNestjsDto } from './dto/update-nestjs.dto';
import { NestjsService } from './nestjs.service';
export declare class NestjsController {
    private readonly nestjsService;
    constructor(nestjsService: NestjsService);
    getNestjs(weapon: 'stars' | 'nunchucks'): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNestjs(id: string): {
        id: string;
    };
    CreateNestjs(createNestjsDt: CreateNestjsDto): {
        name: string;
    };
    UpdateNestjs(id: string, updateNestjsDto: UpdateNestjsDto): {
        id: string;
        name: UpdateNestjsDto;
    };
    DeleteNestjs(id: string): {
        id: string;
    };
}
