import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Users/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:softobiz123@cluster0.6b6l4.mongodb.net/softobiz?retryWrites=true&w=majority'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
