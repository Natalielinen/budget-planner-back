import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column({ type: 'date' })
  date: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
