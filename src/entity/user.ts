/**
 * @file 用户实体类
 * @author fly
 * @date 2022.05.31
 */

import { Column, Index, OneToMany } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '../core/base_entity';

import { UserRole } from './user_role';

@Index('phone_number_index', ['phoneNumber'], { unique: true })
@EntityModel('user', { schema: 'ktw' })
export class User extends BaseEntity {
  @Column('varchar', {
    name: 'user_name',
    comment: '用户手机号',
    length: 64,
  })
  userName: string;

  @Column('varchar', {
    name: 'phone_number',
    comment: '用户手机号',
    length: 64,
  })
  phoneNumber: string;

  @OneToMany(() => UserRole, userRole => userRole.user)
  userRoles: UserRole[];
}
