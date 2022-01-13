npx sequelize model:generate --name Image --attributes userId:integer,imageUrl:string,favoritedCount:integer

npx sequelize model:generate --name Favorite --attributes userId:integer,imageId:integer

npx sequelize model:generate --name Profile --attributes userId:integer,fullName:string,profilePic:string,location:string,description:text,specialties:array

npx sequelize model:generate --name Review --attributes userId:integer,artistId:integer,reviewText:text,rating:integer

npx sequelize model:generate --name Role --attributes name:string

npx sequelize model:generate --name UserRole --attributes userId:integer,roleId:integer




npx sequelize seed:generate --name image-seeds
