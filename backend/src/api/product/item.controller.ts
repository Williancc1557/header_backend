import { ChangeItemDto, SaveItemDto } from "./item.dto";
import { ItemRepository } from "./../../database/repositories/product/product.repository";
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";

@Controller()
export class ItemController {
    public constructor(
        private readonly productRepository: ItemRepository
    ) { }

    @Get("find")
    public getAllItems() {
        return {
            statusCode: HttpStatus.OK,
            body: this.productRepository.findAll(),
        };
    }

    @Get("find/:id")
    public findById(@Param("id") id: number) {
        return this.productRepository.findOne(id);
    }

    @Post("save")
    public save(@Body() product: SaveItemDto) {
        return this.productRepository.save(product);
    }

    @Put("change")
    public change(@Body() data: ChangeItemDto) {
        return this.productRepository.change(data);
    }

    @Delete("delete-all")
    public deleteAll() {
        return this.productRepository.deleteAll();
    }

    @Delete("delete/:id")
    public delete(@Param("id") id: number) {
        return this.productRepository.delete(id);
    }
}
