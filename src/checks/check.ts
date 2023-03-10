export enum CheckType {
  FileExists,
  FileLineContains,
  FileContainsContent,
  ForensicQuestion,
  ServiceUpCheck,
  BinaryEixstsCheck,
  UserCheck,
  UserHasToExistCheck,
  UserAdminCheck,
  FirewallUpCheck,
  FirewallLoglevel,
  FirewallPortsCheck,
  UserInGroupCheck,
}

export abstract class Check {
  checkType: CheckType;
  completedMessage: string;
  penaltyMessage: string;
  points: number;
  completed = false;

  constructor(
    checkType: CheckType,
    completedMessage: string,
    points: number,
    penaltyMessage: string,
  ) {
    this.completedMessage = completedMessage;
    this.checkType = checkType;
    this.points = points;

    penaltyMessage
      ? this.penaltyMessage = penaltyMessage
      : this.penaltyMessage = completedMessage;
  }
  abstract runCheck(): void;
}
