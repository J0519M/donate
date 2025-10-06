import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./model/category.model").Category>;
    findAll(): Promise<import("./model/category.model").Category[]>;
    findOne(id: string): Promise<import("./model/category.model").Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./model/category.model").Category>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
