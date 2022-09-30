import type { ChangeItemDto, SaveItemDto } from "../../../api/product/item.dto";
import { DatabaseOrm } from "src/database/repositories/database.service";
import type { ItemEntity } from "../../entities/item";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ItemRepository {

    public constructor(
        private readonly databaseOrm: DatabaseOrm
    ) {}

    public save(data: SaveItemDto): void {
        return this.databaseOrm.save(data);
    }

    public findAll(): Array<ItemEntity> {
        return this.databaseOrm.findAll();
    }

    public findOne(id: number): ItemEntity {
        return this.databaseOrm.findOne(id);
    }

    public delete(id: number): void {
        return this.databaseOrm.delete(id);
    }

    public deleteAll() {
        return this.databaseOrm.deleteAll();
    } 

    public change(changeItemDto: ChangeItemDto): ItemEntity {
        return this.databaseOrm.change(changeItemDto);
    }
}
