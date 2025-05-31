export interface Admin {
    id: string;
    isAdmin: boolean;
}

export interface IUser extends Document {
    id: string;
    company: string;
    name: string;
    password: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
  }