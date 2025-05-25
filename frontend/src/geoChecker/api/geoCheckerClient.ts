import { UserFullData } from "../types";
import { GeoCheckerClientStructure } from "./types";

const API_BASE_URL = "http://localhost:2100/api";


export class GeoCheckerClient implements GeoCheckerClientStructure {
  private readonly baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async createUser(userData: UserFullData): Promise<UserFullData> {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Error creating user");
    }

    return response.json();
  }
} 