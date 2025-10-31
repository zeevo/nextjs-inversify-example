import { injectable } from "inversify";
import { ITodoRepository } from "./todo.repository";
import { UserService } from "./user.service";

@injectable()
export class TodoService {
  constructor(
    private userService: UserService,
    private todoRepository: ITodoRepository
  ) {}

  async createTodo(ownerId: string, content: string) {
    const roles = await this.userService.getRoles(ownerId);

    console.log();
    if (roles.includes("create_todo")) {
      return await this.todoRepository.create(ownerId, content);
    }

    throw new Error("Forbidden");
  }

  async getTodos(userId: string) {
    return await this.todoRepository.getTodos(userId);
  }
}
