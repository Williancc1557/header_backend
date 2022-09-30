import type { ChangeItemDto, SaveItemDto } from "../../api/product/item.dto";
import type { ItemEntity } from "./../entities/item";
import { Injectable } from "@nestjs/common";

const database: Array<ItemEntity> = [
  {
    name: "Header",
    type: "Hotel",
    city: "Igarassu",
    country: "Brazil",
    id: 1,
    owner: "Hudson Freitas",
    latitude: 123,
    longitude: 123,
    state: "PE",
    created: "05/10/2004",
  },
];

@Injectable()
export class DatabaseOrm {
  private static generateSequenceId() {
    const lastItem = database.slice(-1)[0]; // eslint-disable-line

    if (!lastItem) return 1; // eslint-disable-line

    const id = lastItem.id + 1; // eslint-disable-line

    return id;
  }

  public save(data: SaveItemDto): void {
    const id = DatabaseOrm.generateSequenceId();
    const dateCurrency = new Date();
    const day = dateCurrency.getDate();
    const month = dateCurrency.getMonth();
    const year = dateCurrency.getFullYear();
    const created = `${day}/${month}/${year}`;
    database.push({
      owner: "Hudson Freitas",
      created,
      ...data,
      id,
    });
    console.log(database);
  }

  public findAll(): Array<ItemEntity> {
    return database;
  }

  public findOne(id: number): ItemEntity {
    const item = database.find((i) => i.id == id);

    return item;
  }

  public deleteAll() {
    const FIRST = 0;
    database.splice(FIRST, database.length);
  }

  public delete(id: number): void {
    const itemPosition = database.findIndex((item) => item.id == id);

    database.splice(itemPosition, 1); // eslint-disable-line
  }

  public change(itemBody: ChangeItemDto): ItemEntity {
    const index = database.findIndex((item) => item.id == itemBody.id);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...itemsToChange } = itemBody;

    database[index] = { ...database[index], ...itemsToChange };

    return database[index];
  }
}
