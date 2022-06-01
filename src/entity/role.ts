/**
 * @file 角色实体类
 * @author fly
 * @date 2022.06.01
 */

import { Column, OneToMany } from 'typeorm';
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '../core/base_entity';

import { UserRole } from './user_role';

@EntityModel('role', { schema: 'ktw' })
export class Role extends BaseEntity {
  @Column('varchar', {
    name: 'role_name',
    comment: '角色名称',
    length: 64,
  })
  roleName: string;

  @OneToMany(() => UserRole, userRole => userRole.role)
  userRoles: UserRole[];
}
