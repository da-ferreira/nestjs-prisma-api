import { User as UserPrisma } from '@prisma/client';

export class User implements UserPrisma {
  id: number;
  email: string;
  name: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
