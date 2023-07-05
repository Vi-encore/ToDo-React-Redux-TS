export type INote = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
export type IMutateNote = {
  title: string;
  description: string;
};

export type IGenericResponse = {
  status: string;
  message: string;
};

export type INoteResponse = {
  status: string;
  note: INote;
};

export type INotesResponse = {
  status: string;
  results: number;
  notes: INote[];
};
