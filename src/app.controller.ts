import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Expense } from '@prisma/client';

@Controller('expenses')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getExpenses(): Promise<Expense[]> {
    return this.appService.getExpenses();
  }

  @Post()
  async addExpense(@Body() body: { amount: number; description: string }): Promise<Expense> {
    return this.appService.createExpense(body.amount, body.description);
  }
}
