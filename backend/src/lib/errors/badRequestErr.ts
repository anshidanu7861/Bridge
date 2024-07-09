import { CustomError } from "./customErr";

export class BadRequestErr extends CustomError {
  statusCode: number;

  constructor(public message: string) {
    super(message);

    this.statusCode = 400;

    Object.setPrototypeOf(this, BadRequestErr.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
