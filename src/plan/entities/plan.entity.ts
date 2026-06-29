import { PlanExpenseEntity } from 'src/plan-expense/entities/plan-expense.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'plans' })
export class PlanEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  dateFrom: string;
  @Column({ type: 'date' })
  dateTo: string;

  @OneToMany(() => PlanExpenseEntity, (expense) => expense.plan)
  planExpenses: PlanExpenseEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
