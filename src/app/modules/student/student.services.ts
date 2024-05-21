import { IStudent } from './student.interface';

import { Student } from './student.model';

const creatStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await Student.find();
  return result;
};

export const studentServicess = {
  creatStudentIntoDB,
  getAllStudentIntoDB
};
