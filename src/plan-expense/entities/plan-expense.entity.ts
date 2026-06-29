import { PlanEntity } from 'src/plan/entities/plan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'plan-expense' })
export class PlanExpenseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint', unsigned: true, default: 0 })
  percent: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  fixedAmount: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  sum: number;

  @Column()
  title: string;

  @ManyToOne(() => PlanEntity, (plan) => plan.planExpenses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'planId' })
  plan: PlanEntity;
}
