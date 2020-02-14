import {AutoIncrement, Column, DataType, Default, IsEmail, Model, PrimaryKey, Table, Unique} from "sequelize-typescript"

@Table({freezeTableName: true, timestamps: false})
export default class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number

    @IsEmail
    @Unique
    @Default(null)
    @Column
    public email: boolean

    @Default(null)
    @Column(DataType.STRING(64))
    public password: string

    @Default(null)
    @Column
    public userName: string

}
