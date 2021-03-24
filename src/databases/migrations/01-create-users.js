export async function up(queryInterface,Sequelize){
    await queryInterface.createTable('users',{
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
        },
        email:{
            type: Sequelize.STRING(20),
            unique: true,
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING(60),
            allowNull: false,
        },
        email_verified:{
            type: Sequelize.DATE,
        },
        createdAt:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt:{
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
}
export async function down(queryInterface,Sequelize){
    await queryInterface.dropTable('users');
}