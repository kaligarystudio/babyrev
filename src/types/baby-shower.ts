export interface BabyShower {
  id: string;
  slug: string;
  babyName: string;
  parentsName: string | null;
  eventDate: string | null;
  eventTime: string | null;
  location: string | null;
  primaryColor: string;
  secondaryColor: string;
  message: string | null;
  createdAt: Date;
  updatedAt: Date;
}
