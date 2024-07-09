import { CustomError } from "./customErr";

export class NotFoundErr extends CustomError {
  statusCode: number;

  constructor() {
    super("Route not found");
    this.statusCode = 404;
    Object.setPrototypeOf(this, NotFoundErr.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Found!" }];
  }
}
