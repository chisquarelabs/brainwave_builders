import * as jwt from "jsonwebtoken";
import { Users } from "../../core/entities/User";
import { config } from "../../config/config";

export class JwtService {
  private readonly secret: string;

  constructor() {
    this.secret = config.jwtSecret || "your-secret-key";
  }

  generateToken(user: Users): string {
    return jwt.sign({ userId: user.id, unique_patient_id: user.unique_patient_id }, this.secret, {
      expiresIn: "1h",
    });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
