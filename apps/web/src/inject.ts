import { container } from "@/container";
import { ServiceIdentifier } from "inversify";

export function inject<T>(serviceIdentifier: ServiceIdentifier<T>) {
  return container.get<T>(serviceIdentifier);
}
