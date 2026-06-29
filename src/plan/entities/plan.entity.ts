import {
  Column,
  CreateDateColumn,
  Entity,
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

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  balance: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
