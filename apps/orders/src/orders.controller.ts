import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(
    @Body() order: CreateOrderRequest
  ){
    return await this.ordersService.createOrder(order);
  }

  @Get()
  async getOrders(){
    return await this.ordersService.getOrders();
  }

}
