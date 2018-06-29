import { IJobMySuffix } from './job-my-suffix.model';

export interface ITaskMySuffix {
  id?: number;
  title?: string;
  description?: string;
  jobs?: IJobMySuffix[];
}

export const defaultValue: Readonly<ITaskMySuffix> = {};
