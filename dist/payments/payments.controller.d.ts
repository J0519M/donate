import { PaymentService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(createPaymentDto: CreatePaymentDto): Promise<import("./models/payment.model").Payment>;
    findAll(): Promise<import("./models/payment.model").Payment[]>;
    findOne(id: string): Promise<import("./models/payment.model").Payment>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<import("./models/payment.model").Payment>;
    remove(id: string): Promise<{
        message: string;
        id: number;
    }>;
}
