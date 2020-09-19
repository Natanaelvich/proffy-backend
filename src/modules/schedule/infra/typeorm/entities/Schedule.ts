import Classe from '@modules/classes/infra/typeorm/entities/Classe';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('schedules')
class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @Column()
  class_id: string;

  @ManyToOne(() => Classe)
  @JoinColumn({ name: 'class_id' })
  provider: Classe;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Schedule;
