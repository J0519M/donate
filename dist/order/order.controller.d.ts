import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<import("./model/order.model").Order>;
    findAll(): Promise<import("./model/order.model").Order[]>;
    findOne(id: string): Promise<import("./model/order.model").Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("./model/order.model").Order>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
