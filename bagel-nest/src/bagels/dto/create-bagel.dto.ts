export class CreateBagelDto {
    readonly flavor: string;
    readonly spread: string;
    readonly addons: string;
    readonly toasted: boolean;
    readonly calories: number;
  }