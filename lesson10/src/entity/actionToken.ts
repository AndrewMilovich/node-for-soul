import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { User } from './user';
import { config } from '../config/config';
import { ActionTokenTypes } from '../enums/ActionTokenTypes';
import { ICommonFields } from '../interface/icommonFields';

export interface IActionToken extends ICommonFields{
    actionToken: string;
    type: ActionTokenTypes;
    userId: number;
}

export interface IActionTokenForSave {
    actionToken: string;
    type: ActionTokenTypes;
    userId: number;
}

@Entity('ActionToken', { database: config.MYSQL_DATABASE_NAME })
export class ActionToken extends CommonFields implements IActionToken {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        actionToken: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        type: ActionTokenTypes;

    @Column({
        type: 'int',
    })
        userId: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
        user: User;
}
