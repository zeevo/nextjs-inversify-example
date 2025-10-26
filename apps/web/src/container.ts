import { Container } from "inversify";
import { UserService } from "@myapp/services/user.service";
import { DatabaseService } from "@myapp/services/database.service";

const container = new Container({ autobind: true });

container.bind(UserService).toSelf();
container.bind(DatabaseService).toSelf();

export { container };
