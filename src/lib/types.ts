export type ClubRole = "club_admin" | "team_coach" | "assistant_coach" | "guardian" | "player";

export type AttendanceStatus = "available" | "unavailable" | "maybe" | "attended" | "absent" | "pending";

export interface Club {
  id: string;
  name: string;
  slug: string;
  badgeUrl?: string;
  primaryColor: string;
  secondaryColor: string;
  createdAt: Date;
}

export interface Team {
  id: string;
  clubId: string;
  name: string;
  ageGroup: string;
  season: string;
  createdAt: Date;
}

export interface Member {
  id: string;
  clubId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: ClubRole;
  createdAt: Date;
}

export interface Player {
  id: string;
  teamId: string;
  firstName: string;
  lastName: string;
  preferredPosition?: string;
  dateOfBirth?: string;
  guardianMemberId?: string;
  createdAt: Date;
}

export interface Fixture {
  id: string;
  teamId: string;
  opponent: string;
  kickoffAt: Date;
  venue: string;
  homeAway: "home" | "away";
  status: "scheduled" | "completed" | "cancelled";
  createdAt: Date;
}

export interface TrainingSession {
  id: string;
  teamId: string;
  title: string;
  startsAt: Date;
  endsAt: Date;
  location: string;
  objectives: string[];
  createdAt: Date;
}

export interface AttendanceRecord {
  id: string;
  sessionId: string;
  playerId: string;
  status: AttendanceStatus;
  reason?: string;
  recordedByMemberId?: string;
  recordedAt?: Date;
}
