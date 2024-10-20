import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Expense } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getExpenses(): Promise<Expense[]> {
    return this.prisma.expense.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createExpense(amount: number, description: string): Promise<Expense> {
    return this.prisma.expense.create({
      data: {
        amount,
        description,
      },
    });
  }
}
