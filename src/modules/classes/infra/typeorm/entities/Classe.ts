import User from '@modules/users/infra/typeorm/entities/User';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('classes')
class Classe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  subject: string;

  @Column()
  cost: number;

  @Column()
  user_id: string;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // provider: User;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Classe;
