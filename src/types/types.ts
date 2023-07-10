// export type INote = {
//   id: string;
//   title: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// };
// export type IMutateNote = {
//   title: string;
//   description: string;
// };

// export type IGenericResponse = {
//   status: string;
//   message: string;
// };

// export type INoteResponse = {
//   status: string;
//   note: INote;
// };

// export type INotesResponse = {
//   status: string;
//   results: number;
//   notes: INote[];
// };

export type createModalType = {
  children: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type editModalType = {
  children: string;
  modalEditOpen: boolean;
  setModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  id: number;
};

export type deleteModalType = {
  children: string;
  setModalDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeleteOpen: boolean;
  title: string;
  id: number;
};

export type closeBtnType = {
  children: string;
  isLoading: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type createModalBtnType = {
  children: string;
  isLoading: boolean;
};

export type deleteBtnType = {
  children: string;
  title: string;
  id: number;
};

export type editBtnType = {
  children: string;
  title: string;
  description: string;
  id: number;
};

export type cardInfoType = {
  title: string;
  description: string;
  id: number;
};

export type cardType = cardInfoType & {
  item: object;
};
