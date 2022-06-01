/**
 * @file 用户角色关系实体类
 * @author fly
 * @date 2022.06.01
 */

import { Column, ManyToOne, JoinColumn } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '../core/base_entity';

import { User } from './user';
import { Role } from './role';

@EntityModel('user_role', { schema: 'ktw' })
export class UserRole extends BaseEntity {
  @Column('int', {
    name: 'user_id',
    comment: '用户id',
  })
  userId: number;

  @Column('int', {
    name: 'role_id',
    comment: '角色id',
  })
  roleId: number;

  @ManyToOne(() => User, user => user.userRoles, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => Role, role => role.userRoles, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: Role;
}
