import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'mail_queue',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('MAIL_SERVICE') private readonly client: ClientProxy) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.repo.save(dto);
    this.client.emit('user_created', { userId: user.id, email: user.email, name: user.name });
    return user;
  }
}
async rentBook(bookId: number, userId: number) {
  const book = await this.repo.findOne({ where: { id: bookId } });
  if (!book.available) throw new Error('Livro indisponível');
  book.available = false;
  await this.repo.save(book);

  this.client.emit('book_rented', { userId, email: user.email, bookTitle: book.title });
  return book;
}
